import React from 'react';

function shopingcart() {
	const CartFooter=
        <nav className="navbar navbar-dark bg-dark">
           <a className="navbar-brand" href="#">&copy;</a>
        </nav>;

        const CartHeader=
        <nav className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" href="#">Shoping Cart</a>
        </nav>;

        const CartItems=
                <div className="container">
                    <h1>Cart Items</h1>
                </div>;
 return  <div>
	  {CartHeader}
	  {CartItems}
	  {CartFooter}
	</div>
}
export default shopingcart;
