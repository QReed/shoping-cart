import React from 'react';

class CartItemCOM extends React.Component{
  
  render(){
    var cartItemsList = this.props.ItemsLS;
    const productList = cartItemsList.map((cartitem, index) =>
       <ul key={index}>
        <div className="row">
           <div className="col-md-8"  >
                {cartitem.product.name}
            </div>
            <div className="col-md-2" >
              {cartitem.product.priceInCents}
            </div>
            <div className="col-md-2" >
              {cartitem.quantity}       
           </div>
        </div>
       </ul>
    );

    return ( 
        <div className="collection-item">
            {productList}
        </div>
        
    );

  }
}
export default CartItemCOM;