import React from 'react';
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const NavBar = () => (
    <Navbar expand="md">
        <Nav className="mr-auto" navbar>
            <NavItem>
                <NavLink href="/sign-in">Sign in</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/" exact="true">
                    Home
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
);

export default withRouter(NavBar);
