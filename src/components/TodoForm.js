import React, { Component } from 'react'

class TodoForm extends Component{
    state = {
        title: '',
        content: ''
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: '',
            content: ''
        })
    }

    render(){
        return(
           
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                <input name='title'
                placeholder='Title'
                value={this.state.title}
                onChange={this.handleChange}
                required
                ></input>
                <label>Content:</label>
                <input name='content'
                placeholder='Content'
                value={this.state.content}
                onChange={this.handleChange}
                required
                ></input>
                <input type='submit'></input>
            </form>
         
        )
    }
}
export default TodoForm;