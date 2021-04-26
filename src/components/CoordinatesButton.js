// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    handleClick = (event) => {
        console.log(event)
        this.props.onReceiveCoordinates([event.clientX, event.clientY]) 
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Log your click!</button>
             </div>
        )
    }
}



// {(array) => console.log(array.clientX, array.clientY)}