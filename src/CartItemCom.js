import React from 'react';

function CartItemCOM(prop) {

  var cartItemsList = prop.itemsLS;
  
  const productList = cartItemsList.map((cartitem, index) =>
  <tr key={index} >
    <td>
      {cartitem.product.name}
    </td>
    <td>
      {"$" + cartitem.product.priceInCents*.01}
    </td>
    <td>
      {cartitem.quantity}
    </td>
  </tr>);
  
  return ( 
    <table >
        <tbody>
          {productList}
        </tbody>
    </table>
  )
}

export default CartItemCOM;