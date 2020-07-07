export const required = (value) => (value ? undefined : 'Required');

export const isEmail = (value) =>
    /\S+@\S+\.\S+/.test(value) ? undefined : 'Must be email';

export const minLength = (value) =>
    value.length > 8 ? undefined : 'Must be 8 symbols length';

export const hasNumber = (value) =>
    /\d/.test(value) ? undefined : 'Must have minimum one number';

export const hasLetter = (value) =>
    /[a-zA-Z]/.test(value) ? undefined : 'Must have minimum one letter';

export const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined);
