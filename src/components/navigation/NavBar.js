import React from 'react';
import { Navbar, Nav, NavItem, NavbarText } from 'reactstrap';
import { withRouter, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logout } from '../../store/actions';

const NavBar = ({ authorized, onLogout, admin }) => (
    <Navbar expand="md">
        <Nav className="mr-auto" navbar>
            |
            <NavItem>
                {authorized ? (
                    <NavLink
                        onClick={() => {
                            onLogout();
                        }}
                        to="/sign-in"
                        activeStyle={{
                            color: 'darkblue',
                        }}
                    >
                        Sign out
                    </NavLink>
                ) : (
                    <NavLink
                        to="/sign-in"
                        activeStyle={{
                            color: 'darkblue',
                        }}
                    >
                        Sign in
                    </NavLink>
                )}
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
            {admin && (
                <NavItem>
                    <NavLink
                        exact
                        to="/settings"
                        activeStyle={{
                            color: 'darkblue',
                        }}
                    >
                        Settings
                    </NavLink>
                </NavItem>
            )}
        </Nav>
        {authorized && (
            <NavbarText>
                Hello, {JSON.parse(localStorage.getItem('authData'))?.username}
            </NavbarText>
        )}
    </Navbar>
);

NavBar.propTypes = {
    authorized: PropTypes.bool,
    admin: PropTypes.bool,
    onLogout: PropTypes.func,
};

const mapStateToProps = (state) => ({
    authorized: state.authReducer.authorized,
    admin: state.authReducer.admin,
});

const mapDispatchToProps = {
    onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavBar));
