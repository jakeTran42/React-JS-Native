import React, { Component } from 'react';
// import inventory from './inventory';
import Product from './product';
import Category from './category';
import inventory, { categories } from './inventory';

class Products extends Component {
    constructor(props) {
        super(props)

    }

    const

    render() {

        const items = inventory.map((item, index) => {
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
    }
}

export default Products