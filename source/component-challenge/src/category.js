import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <button className="categoryButton" onClick={this.props.onClick}>
                    <h1>{this.props.name}</h1>
                    <small>{this.props.price}</small>
                    <p>{this.props.category}</p>
                </button>
            </div>
        )
    }
}

export default Category
