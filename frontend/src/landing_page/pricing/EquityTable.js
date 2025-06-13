import React from "react";

function EquityTable() {
  return (
    <>
      <thead>
        <tr>
          <th></th>
          <th>Equity Delivery</th>
          <th>Equity Intraday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Brokerage</td>
          <td>₹0</td>
          <td>0.03% or ₹20/executed order whichever is lower</td>
        </tr>
        <tr>
          <td>STT/CTT</td>
          <td>0.1% on buy & sell</td>
          <td>0.025% on the sell side</td>
        </tr>
        <tr>
          <td>Transaction charges</td>
          <td>0.00345%</td>
          <td>0.00345%</td>
        </tr>
        <tr>
          <td>GST</td>
          <td colSpan="2">18% on (brokerage + SEBI + transaction charges)</td>
        </tr>
        <tr>
          <td>SEBI charges</td>
          <td colSpan="2">₹10 / crore</td>
        </tr>
        <tr>
          <td>Stamp charges</td>
          <td>0.015% on buy side</td>
          <td>0.003% on buy side</td>
        </tr>
      </tbody>
    </>
  );
}

export default EquityTable;
