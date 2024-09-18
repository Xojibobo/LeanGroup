import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button className="button1">{this.props.children}</button>
        )
    }
}
