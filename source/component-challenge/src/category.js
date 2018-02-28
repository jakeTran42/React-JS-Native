import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <button>{this.props.buttons}</button>
            </div>
        )
    }
}

export default Category
