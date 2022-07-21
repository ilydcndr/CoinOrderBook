import React from 'react';
import { Table, Progress } from "reactstrap";

const OrderTable = ({ sellData, buyData }) => {

  return (
    <Table striped borderless size="sm" className='orderBookTable'>
      <thead>
        <tr>
          <th>
            Price
          </th>
          <th>
            Size(USD)
          </th>
          <th>
            Total(USD)
          </th>
        </tr>
      </thead>
      
      <tbody>
        {sellData.map((item) => 

          <tr key={item.id}>
            <th scope="row">
              {item.price}
            </th>
            <td className = {item.cLassName ? item.cLassName : ''}>
              {item.size} {item.className}
            </td>
            <td>
              <Progress
                bar
                value = {item.percentage}
                className = "sellRow">  
                 <span>{item.total}</span>
              </Progress>
            </td>
          </tr>
        )}

        {buyData.map((item) => 

          <tr key = {item.id}>
            <th scope="row">
              {item.price}
            </th>
            <td>
              {item.size}
            </td>
            <td>
              <Progress
                bar
                value = {item.percentage}
                className = "buyRow">
                  {item.total}
              </Progress>
            </td>
          </tr>
          )}
        </tbody>
    </Table>
  );
}
export {OrderTable};