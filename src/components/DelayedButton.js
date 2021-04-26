// Code DelayedButton Component Here

import React, { Component } from 'react'

setTimeout = (event) => {
    console.log(event.delay)
    // const delay = this.props.delay 
    // this.props.onDelayedClick(delay)
}

export default class DelayedButton extends Component {
    render() {
        return (
            <div>
            <button onClick={setTimeout}>Delay Click</button>  
            </div>
        )
    }
}
