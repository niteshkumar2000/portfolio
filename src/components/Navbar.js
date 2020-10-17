import React from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Collapse} from "reactstrap";

export default class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        }
    }

    toggle(){
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <React.Fragment>
                <Navbar fixed="top" dark color="dark" expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem onClick={this.toggle}>
                            <NavLink href="#home">Home</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggle}>
                            <NavLink href="#projects">Projects</NavLink>
                            </NavItem>
                            <NavItem onClick={this.toggle}>
                            <NavLink href="#work">Work</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        );
    }
}