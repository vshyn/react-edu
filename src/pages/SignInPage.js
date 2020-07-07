import React from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    composeValidators,
    required,
    isEmail,
    minLength,
    hasNumber,
    hasLetter,
} from '../validation/validations';

class SignInPage extends React.Component {
    onSubmit = () => {
        this.props.history.push('/');
    };

    checkDisable = (values) => values.hasValidationErrors;

    render() {
        return (
            <div>
                <Form
                    onSubmit={this.onSubmit}
                    render={({ handleSubmit, form }) => (
                        <form onSubmit={handleSubmit}>
                            <Field
                                name="username"
                                validate={composeValidators(required, isEmail)}
                            >
                                {({ input, meta }) => (
                                    <div>
                                        <label>username</label>
                                        <input
                                            {...input}
                                            type="text"
                                            placeholder="username"
                                        />
                                        {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                        )}
                                    </div>
                                )}
                            </Field>
                            <Field
                                name="password"
                                validate={composeValidators(
                                    required,
                                    minLength,
                                    hasNumber,
                                    hasLetter
                                )}
                            >
                                {({ input, meta }) => (
                                    <div>
                                        <label>password</label>
                                        <input
                                            {...input}
                                            type="text"
                                            placeholder="password"
                                        />
                                        {meta.error && meta.touched && (
                                            <span>{meta.error}</span>
                                        )}
                                    </div>
                                )}
                            </Field>
                            <button
                                type="submit"
                                disabled={this.checkDisable(form.getState())}
                                onSubmit={this.onSubmit}
                            >
                                Sign in
                            </button>
                        </form>
                    )}
                />
            </div>
        );
    }
}
SignInPage.propTypes = {
    history: PropTypes.any,
};

export default withRouter(SignInPage);
