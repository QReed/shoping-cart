import React from 'react'

class AddItem extends React.Component{

    render(){
        const prodlist = this.props.items;// array of products sent from app.js
//        console.log("prodlist", prodlist);
        //maps out every item within the passed in array in an option tag.
        const Itemlist = prodlist.map((item, index) =>
            <option key={index}  value={item.name} price={item.priceInCents/100}>{item.name}</option>);              
    
        return (
            <div className="container">
                
                <form>
                <h2>Quantaty</h2>
                    <input type="number"/>
                <h2>Products</h2>   
                    <select>
                        <option>select an option..</option>
                        {Itemlist}
                    </select>
                    <br/>
                <input type="submit"/>
                </form>  
                        
            </div>
        );
    }
}
export default AddItem;