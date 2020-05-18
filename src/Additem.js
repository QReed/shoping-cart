import React from 'react'

class Additem extends React.Component{

    render(){
        var prodlist = this.props.items;
        console.log("prodlist", prodlist);
        const itemlist = prodlist.map((item, index) =>
            <option key={index}  value={item.name} price={item.priceInCents/100}>{item.name}</option>);              
    
        return (
            <div className="container">
                
                <form>
                <h2>Quantaty</h2>
                    <input type="number"/>
                <h2>Products</h2>   
                    <select>
                        <option>select an option..</option>
                        {itemlist}
                    </select>
                    <br/>
                <input type="submit"/>
                </form>  
                        
            </div>
        );
    }
}
export default Additem;