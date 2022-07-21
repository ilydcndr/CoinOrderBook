import { OrderTable} from "../OrderTable/OrderTable";
import React, { useState, useEffect} from 'react';
import Draggable from "react-draggable";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AiOutlineExpandAlt, AiOutlineShrink, AiOutlineSetting } from "react-icons/ai";
import { ChangeOrderTable } from "../ChangeOrderTable/ChangeOrderTable";
import { BASE_URL, INSTRUMENT_1 } from '../../config/constants';

const OrderBook = () => {
  const [showModal, setShowModal] = useState(true);
  const [modalFullScreen, setModalFullScreen] = useState(false);
  const [selectedCoin,setSelectedCoin] = useState(INSTRUMENT_1);
  const [sellData, setSellData] = useState([]);
  const [buyData, setBuyData] = useState([]);
  const [allOrder, setAllOrder] = useState([]);


	useEffect(() => {
    let ws = new WebSocket(`${BASE_URL}?subscribe=orderBookL2:${selectedCoin}`);

    let apiCall = {};
  
    ws.onopen = () => {
      ws.send(JSON.stringify(apiCall));
    };

    ws.onmessage = (event) => {
    const json=JSON.parse(event.data);
    setAllOrder(json);
    
    if(json.action === 'partial'){
        let totalBuy = 0;
        let totalSell = 0;

        const filteredSellData = json.data.filter((item) => item.side === 'Sell')
        const filteredBuyData = json.data.filter((item) => item.side === 'Buy')
        const slicedBuyData = filteredBuyData.slice(0,10);
        const slicedSellData = filteredSellData.slice(-10);

        for (let i = 9; i >= 0; i--) {
          totalSell = totalSell + slicedSellData[i].size // cumultative for sell
          slicedSellData[i].total = totalSell;
          if (i === 0) {
            let maxCumultative = slicedSellData[0].total 
            for (let j = 0; j <= 8; j++) { //percentage for sell
              let percentage = ( slicedSellData[j].total / maxCumultative )* 100
              slicedSellData[j].percentage = percentage;
            }
          }
        };
     
        setSellData(slicedSellData);

        slicedBuyData.forEach((item, i) => {  //cumultative for buy
          totalBuy = totalBuy + item.size;
          item.total = totalBuy;

          if (i === 8) {
            let maxCumultative = slicedBuyData[8].total 
            for (let j = 8; j >= 0; j--) { //percentage for buy
              let percentage = ( slicedBuyData[j].total / maxCumultative )* 100
              slicedBuyData[j].percentage = percentage;
            }
          }
        });
        
        setBuyData(slicedBuyData); 
      }
    }});

    /*useEffect(() => {
      if(allOrder.action ===  'update') {
       
        sellData.forEach((item) => { 
        const updatedData = allOrder.data.find((element) => {
           return item.id = element.id;         
         });

        if(updatedData) {
           item.size = updatedData.size
           item.price = updatedData.price
           item.side = updatedData.side
           colorEffect(item, updatedData.side)
         }
       })
 
      buyData.forEach((item) => {
         const updatedData = allOrder.data.find((element) => {
           return item.id = element.id;        
         })
         if(updatedData) {
         item.size = updatedData?.size
         item.price = updatedData?.price
       }) 
     }  
     
    }, [allOrder, sellData, buyData,])*/
    
    
  /*const colorEffect = (item,side) => {
    if(side === 'Buy'){
      item.className = '-growing' // animation effect +
    } else {
      item.className = '-decreasing' //animation effect -
    }
  }*/

  const modalClose = () => {
    setShowModal(false);
  };

  const handleFullScreen = () => {
    setModalFullScreen(modalFullScreen => !modalFullScreen);
  }
 
  return (
    <>
      <Draggable>
          <Modal
            fullscreen = {modalFullScreen}
            isOpen={showModal}
            className="modalOrderBook"
            toggle={() => {
              modalClose();
            }}
            >
            <ModalHeader
              className="modal-header bg-secondary modal-title text-black"
              toggle={() => {
               modalClose();
              }}>
              <p className="modalHeaderText"> Orderbook ({selectedCoin}) </p>
                <span onClick={() => {
                handleFullScreen();
                }}
                className="modalFullScreenIcon icon" >
                  {modalFullScreen ? <AiOutlineShrink /> : <AiOutlineExpandAlt />}
                </span>
                <span className="modalSettingIcon icon">
                  <AiOutlineSetting />
                </span>
                <ChangeOrderTable setSelectedCoin = {setSelectedCoin} selectedCoin = {selectedCoin} ></ChangeOrderTable>
              </ModalHeader>
            <ModalBody>
              <OrderTable sellData = {sellData} buyData = {buyData}  ></OrderTable>
            </ModalBody>
          </Modal>
      </Draggable>
    </>
  );
}

export {OrderBook};