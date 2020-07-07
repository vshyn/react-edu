import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import { withRouter, NavLink } from 'react-router-dom';

const NavBar = () => (
    <Navbar expand="md">
        <Nav className="mr-auto" navbar>
            |
            <NavItem>
                <NavLink
                    to="/sign-in"
                    activeStyle={{
                        color: 'darkblue',
                    }}
                >
                    Sign in
                </NavLink>
            </NavItem>
            |
            <NavItem>
                <NavLink
                    exact
                    to="/"
                    activeStyle={{
                        color: 'darkblue',
                    }}
                >
                    Home
                </NavLink>
            </NavItem>
            |
        </Nav>
    </Navbar>
);

export default withRouter(NavBar);
