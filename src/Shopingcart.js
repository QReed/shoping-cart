
import React from 'react';
import CartFooter from './Footer';
import CartHeader from './Cartheader';
import CartItems from './CartItems';
 
function shopingcart(prop) {
   
let list = prop.Itemlist
    
return  <div>
  <CartHeader/>
  <CartItems items={list}/>
  <CartFooter copyright="2016"/>
</div>
}
export default shopingcart;

