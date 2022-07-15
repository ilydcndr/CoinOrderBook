import React from 'react';
import { Table } from "reactstrap";

const OrderBid = () => {

  return (
    <div style={{
      border:"1px solid #F0F0F0"
    }}>
      <Table striped borderless>
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

export {OrderBid};