import React from 'react';
import { Table } from "reactstrap";

const OrderAsk = () => {

  return (
    <div  style={{
      border:"1px solid #F0F0F0"
    }} >
      <Table striped borderless>
        <thead>
          <tr>
            <th>
              First Name
            </th>
            <th>
              Last Name
            </th>
            <th>
              Username
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
              1
            </th>
            <td>
              Mark
            </td>
            <td>
              Otto
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
export {OrderAsk};