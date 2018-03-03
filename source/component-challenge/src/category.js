import React, { Component } from 'react';

class Category extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <button className="categoryButton" onClick={() => alert('click')}>
                    {this.props.buttons}
                </button>
            </div>
        )
    }
}

export default Category
