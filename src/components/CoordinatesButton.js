// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (array) => {
        console.log(array)
        this.props.onReceiveCoordinates([array.clientX, array.clientY]) 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>   
                </button>
             </div>
        )
    }
}



// {(array) => console.log(array.clientX, array.clientY)}