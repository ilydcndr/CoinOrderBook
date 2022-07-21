import React from 'react';
import { RiExchangeBoxLine } from "react-icons/ri";
import { INSTRUMENT_1, INSTRUMENT_2 } from '../../config/constants';

const ChangeOrderTable = ({selectedCoin, setSelectedCoin}) => {

  const getChannelData = () => {
    if(selectedCoin === INSTRUMENT_1){
      setSelectedCoin(INSTRUMENT_2)
    } else {
      setSelectedCoin(INSTRUMENT_1)
    }
  }

  return (
    <div>
      <span onClick = {getChannelData}
      className = "changeBoxIcon icon">
        <RiExchangeBoxLine/>
      </span>
    </div>
  );
}
export {ChangeOrderTable};