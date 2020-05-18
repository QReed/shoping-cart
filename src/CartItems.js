import React from 'react';
import CartItemCOM from './CartItemCom';

class CartItems extends React.Component{
    render() { 

        let ItemList= this.props.Itemlist;        
        return (
        <div className="container">
            <h1>Cart Items</h1>
            <div className= "list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div> 
                </div >
                <CartItemCOM ItemsLS={ItemList}/>
            </div>
        </div>);

    }
}
export default CartItems;