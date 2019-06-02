import React, { Component } from 'react';
import inputTodo, { InputTodo } from './InputTodo'
import Footer from './Footer';

export class MainDisplay extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentTodo: [],
            description: '',
            completed: false,
            filter: 'main'
        }
    }

    componentDidMount() {

    }

    handleChange() {

    }

    addTodo() {

    }

    deleteTodo() {

    }

    editTodo() {

    }

    filterTodo() {

    }
    

    render() {
        return (
            <div>
                <InputTodo />
                {/* map over currentTodo */}
                <Footer />
            </div>
        )
    }
}

export default MainDisplay
