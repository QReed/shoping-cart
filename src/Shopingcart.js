
import React from 'react';
import CartFooter from './Footer';
import CartHeader from './Cartheader';
import CartItems from './CartItems';
 
function shopingcart(prop) {
   
let List = prop.Itemlist
    console.log("shopping",List)
return  <div>
  <CartHeader/>
  <CartItems items={List}/>
  <CartFooter copyright="2016"/>
</div>
}
export default shopingcart;

