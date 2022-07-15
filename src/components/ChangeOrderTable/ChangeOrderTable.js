import React from 'react';
import { RiExchangeBoxLine } from "react-icons/ri";
import { Modal, ModalHeader, ModalBody, Form, Input } from "reactstrap";

const ChangeOrderTable = (props) => {

  return (
    <div>
      <span onClick={()=>{props.ChangeTable()}}
      style={{
      cursor:"pointer",
      position:"absolute",
      right:"100px",
      top:0,
        }} >
        <RiExchangeBoxLine/>
      </span>
      <div>
        <Modal
          size='sm'
          isOpen={props.ChangeOrderList}
          toggle={props.ChangeTable}>
          <ModalBody>
          <Form>
            <Input
              bsSize="sm"
              type="select"
            >
            <option>
              Small Select
            </option>
            </Input>
            </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
  );
}
export {ChangeOrderTable};