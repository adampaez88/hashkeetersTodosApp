import React, { Component } from 'react'

export default class TodoItem extends Component {
    render(){
        const {title, content} = this.props.todo
        return (
            <div className='todo'>
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        )
    }
}
