import React from 'react';
import AddItem from './AddItem';
import CartFooter from './Footer';
import CartItems from './CartItems';

class App extends React.Component {
  

  state ={
    products:[
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
    ]
  }

  render(){

            function CartHeader(){
                    return <nav className="navbar navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Shoping Cart</a>
                     </nav>;
            }
            
            function FormSubmit(cart){
                      const cartitem = cart.cartitems;
                        console.log("cartitem", cartitem);
                      let object ={
                                      product: {
                                        id: 40,
                                        name: 'Mediocre Iron Watch',
                                        priceInCents: 399
                                      },
                                      quantity: 1
                                    }
                              console.log("object", object);
                        cartitem.push(object);
                        console.log("new product", cartitem);
                        return null
               }

            let cartItemsList = [
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
            ];

            return (
                    <div>
                        <CartHeader/>
                        <FormSubmit cartitems={cartItemsList}/>
                        <CartItems Itemlist={cartItemsList}/>
                        <AddItem items={this.state.products} cartitems={cartItemsList} />  
                        <CartFooter copyright="2016"/>
                    </div>
            );
  }
}
export default App;


 