import React, { Component } from 'react';
import axios from 'axios';
import InputTodo from './InputTodo';
import Footer from './Footer';;

export class MainDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todoList: [],
            completed: false,
            filter: 'main'
        }

        this.addTodo = this.addTodo.bind(this)
    }

    componentDidMount() {
        axios
            .get('/api/todo')
            .then(response => this.setState({ todoList: response.data }))
            .catch(error => console.log(`didMount: ${error}`))
    }


    addTodo(description) {
        let { completed, filter } = this.state

        axios
            .post('api/todo', { description: description, completed: completed })
            .then(this.setState({ filter: filter }))
            .catch(error => console.log(`Main-axiosPost: ${error}`))
    }

    deleteTodo(id) {

    }

    editTodo() {

    }

    filterTodo() {

    }
    
    //  <InputGroupAddon addonType="append">
    // <Button color="danger" outline><img src={trashCan} alt="delete"/></Button>
    // </InputGroupAddon> 

    render() {
        // if complete = false unchecked : checked
        let { completed, todoList } = this.state
        let displayTodos = todoList.map((todo,index) => {
            return (
                <div key={index}>
                    {/* prepend check box */}
                    <h5>{todo.description}</h5>
                    {/* append delete (trash can) */}
                </div>
            )
        })
        return (
            <div className="mainDisplay">
                <h1>My todo list</h1>
                <InputTodo 
                addTodoFn={this.addTodo}
                />
                
                {displayTodos}
                
                
                {/* map over todoList */}
                <Footer />
            </div>
        )
    }
}

export default MainDisplay
