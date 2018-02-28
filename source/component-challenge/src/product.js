import React, { Component } from 'react'
import inventory from './inventory'


class Product extends Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1> {this.props.name} </h1>
                <small> {this.props.price} </small>
                <p> {this.props.category} </p>
            </div>
        )
    }

}

export default Product
