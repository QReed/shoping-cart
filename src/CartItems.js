import React from 'react';
import CartItemCOM from './CartItemCom';

function CartItems(prop){

    let itemList= prop.items;

return <div className="container">
            <h1>Cart Items</h1>
            <div className= "list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div> 
                </div >
                <CartItemCOM itemsLS={itemList}/>
            </div>
        </div>
}
export default CartItems;