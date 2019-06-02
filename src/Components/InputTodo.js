import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';

export class InputTodo extends Component {
    render() {
        return (
            <div>
                <InputGroup className="inputTodo">
                    <InputGroupAddon addonType="prepend">
                    <Button color="primary" outline>Add!</Button>
                    </InputGroupAddon>
                    <Input placeholder="Clean my room..." />
                    <InputGroupAddon addonType="append">
                    <Button color="danger" outline>add trash can</Button>
                    </InputGroupAddon>
                </InputGroup>
                
            </div>
        )
    }
}

export default InputTodo
