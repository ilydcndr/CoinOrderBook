import { OrderAsk } from "../OrderAsk/OrderAsk";
import { OrderBid } from "../OrderBid/OrderBid";
import React, { useState } from 'react';
import Draggable from "react-draggable";
import { Modal, ModalHeader, ModalBody } from "reactstrap";
import { AiOutlineExpandAlt, AiOutlineShrink, AiOutlineSetting } from "react-icons/ai";
import { ChangeOrderTable } from "../ChangeOrderTable/ChangeOrderTable";

const OrderBook = () => {
  const [ShowModal, setShowModal] = useState(true);
  const [ChangeOrderList, setChangeOrderList] = useState(false);
  const [ModalFullScreen, setModalFullScreen] = useState(false);

  const modalClose = () => {
    setShowModal(false);
  };

  const changeTable = () => {
    setChangeOrderList(!ChangeOrderList);
  }

  const modalFullScreen = () => {
    setModalFullScreen(ModalFullScreen => !ModalFullScreen);
  }

  return (
    <div>
      <Draggable>
          <Modal
            fullscreen = {ModalFullScreen}
            isOpen={ShowModal}
            toggle={() => {
              modalClose();
            }}
             style={{
              minWidth: "30rem",
            }} >
            <ModalHeader
              className="modal-header bg-secondary modal-title text-black"
              toggle={() => {
               modalClose();
              }} 
              style={{
                height:"10px",
                display:"flex",
                }} >
              <p  style={{
                margin:0,
                }} > Header 
                </p>  
                <span onClick={() => {
                modalFullScreen();
                }}
                style={{
                cursor:"pointer",
                position:"absolute",
                right:"42px",
                top:0
                  }} >
                  {ModalFullScreen ? <AiOutlineShrink /> : <AiOutlineExpandAlt />}
                </span>
                <span
                 style={{
                  cursor:"pointer",
                  position:"absolute",
                  right:"70px",
                  top:0,
                    }} >
                  <AiOutlineSetting />
                </span>
                <ChangeOrderTable ChangeTable = {changeTable}  ChangeOrderList = {ChangeOrderList}></ChangeOrderTable>
              </ModalHeader>
            <ModalBody>
              <div>
                <OrderAsk></OrderAsk>
                <OrderBid></OrderBid>
              </div>
            </ModalBody>
          </Modal>
      </Draggable>
    </div>
  );
}

export {OrderBook};