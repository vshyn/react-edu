import React from 'react';
import { Form, Field } from 'react-final-form';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SignInPage extends React.Component {
    onSubmit = () => {
        this.props.history.push('/');
    };

    required = (value) => (value ? undefined : 'Required');

    isEmail = (value) => (/\S+@\S+\.\S+/.test(value) ? undefined : 'Must be email');

    minLength = (value) =>
        value.length > 8 ? undefined : 'Must be 8 symbols length';

    hasNumber = (value) =>
        /\d/.test(value) ? undefined : 'Must have minimum one number';

    hasLetter = (value) =>
        /[a-zA-Z]/.test(value) ? undefined : 'Must have minimum one letter';

    composeValidators = (...validators) => (value) =>
        validators.reduce(
            (error, validator) => error || validator(value),
            undefined
        );

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
                                validate={this.composeValidators(
                                    this.required,
                                    this.isEmail
                                )}
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
                                validate={this.composeValidators(
                                    this.required,
                                    this.minLength,
                                    this.hasNumber,
                                    this.hasLetter
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
