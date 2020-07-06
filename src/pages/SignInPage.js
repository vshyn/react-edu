import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignInPage extends React.Component {
    handleClick = () => {
        this.props.history.push('/');
    };

    render() {
        return (
            <Form>
                <FormGroup>
                    <Label for="username ">Username </Label>
                    <Input
                        type="username"
                        name="username"
                        id="username"
                        placeholder="username"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="Password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="Password"
                        placeholder="password"
                    />
                </FormGroup>
                <Button color="primary" onClick={this.handleClick}>
                    Sign in
                </Button>
            </Form>
        );
    }
}
SignInPage.propTypes = {
    history: PropTypes.any,
};

export default withRouter(SignInPage);
