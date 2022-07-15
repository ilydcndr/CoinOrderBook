import { OrderAsk } from "../OrderAsk/OrderAsk";
import { OrderBid } from "../OrderBid/OrderBid";
import React, { useState } from 'react';
import Draggable from "react-draggable";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

const OrderBook = () => {
  const [ShowModal, setShowModal] = useState(true);
  const [ModalFullScreen, setModalFullScreen] = useState(false);

  const modalClose = () => {
    setShowModal(false);
  };

  const modalFullScreen = () => {
    setModalFullScreen(ModalFullScreen => !ModalFullScreen);
  }

  return (
    console.log(ModalFullScreen),
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
                }} >
              <p  style={{
                margin:0,
                }} > Header 
                <span onClick={() => {
                modalFullScreen();
                }}
                style={{
                cursor:"pointer",
                  }} >zz
                </span>
                </p>  
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