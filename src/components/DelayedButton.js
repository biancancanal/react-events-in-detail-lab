// Code DelayedButton Component Here

import React, { Component } from 'react'

export default class DelayedButton extends Component {
    handleDelayClick = (event) => {
        event.persist()
        const delay = this.props.delay 
        const callback = () => {
            this.props.onDelayedClick(event)
        }
        setTimeout(callback, delay)
        
    }

    render() {
        return (
            <div>
            <button onClick={this.handleDelayClick}>Delay Click</button>  
            </div>
        )
    }
}
