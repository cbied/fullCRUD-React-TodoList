import React, { Component } from 'react';
import trashCan from '../assets/trash_can.svg'
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export class InputTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            description: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <div>
                <InputGroup className="inputTodo">
                    <InputGroupAddon addonType="prepend">
                    <Button color="primary" outline
                    onClick={() => this.props.addTodoFn(this.state.description)}>Add!</Button>
                    </InputGroupAddon>
                    <Input className="input" placeholder="Clean my room..." 
                    onChange={this.handleChange} value={this.state.description}
                    name="description"/>
                </InputGroup>
                
            </div>
        )
    }
}

export default InputTodo
