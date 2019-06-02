    import React, { Component } from 'react';
    import { Link } from 'react-router-dom'
    import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <div>
            <Navbar color="primary" light expand="md">
            <NavbarBrand href="/" ><span className="link">Todo list</span></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto navLinks" navbar>
                <NavItem className="navItem">
                    <Link className="link" to="/">Dashboard</Link>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret >
                    <span className="link">Filter</span>
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        Incomplete
                    </DropdownItem>
                    <DropdownItem>
                        Completed
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                        Clear All
                    </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
                </Nav>
            </Collapse>
            </Navbar>
        </div>
        );
    }
    }


export default Header