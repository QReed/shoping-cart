
import React from 'react';
import CartFooter from './Footer';
import CartItems from './CartItems';
import Additem from './Additem';
 
function shopingcart(prop) {
   
let list = prop.Itemlist
    
return  <div>
  
  <CartItems items={list}/>
  <Additem/>
  <CartFooter copyright="2016"/>
</div>
}
export default shopingcart;

