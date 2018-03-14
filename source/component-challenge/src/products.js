import React, { Component } from 'react';
// import inventory from './inventory';
import Product from './product';
import Category from './category';
import inventory, { categories } from './inventory';

class Products extends Component {
    constructor(props) {
        super(props)

        this.state= {
            category: 'All'
        }

    }

    handleClick(name) {
        this.setState({
            category: name
        })
    }

    filterCategory() {
        const items = inventory.filter((item) => {
            return this.state.category === item.category || this.state.category === "All"
        });

        return items.map((item) => {
            return ( <Product
                    key={item.id}
                    name={item.name}
                    price={item.price}
                    category={item.category}
                     />)

        })
    }

    uniqueCategory() {
        return categories.map((item, index) => {
             return (
                <Category
                    key={index}
                    category={item}
                    onClick={() => this.handleClick(item)}
                />
            )
        })
    }


    render() {

        {/* const items = inventory.map((item, index) => {
            return (<Product
            key      = {item.id}
            name     = {item.name}
            price    = {item.price}
            category = {item.category} />)
        })

        const category = categories.map((item, index) => {
            return (<Category
            buttons = {item} />)
        })

        return (
            <div>
                {category}
                {items}
            </div>
        )
        */}


        return (
            <div>
                <div className="categories">
                    {this.uniqueCategory()}

                </div>
                <div className="inventory">
                    {this.filterCategory()}
                </div>
            </div>
        )
    }
}

export default Products
