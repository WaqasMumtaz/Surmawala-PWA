import React, { useCallback, useRef } from 'react';
import { func, shape, string } from 'prop-types';
import { Form } from 'informed';
import logo from '../Logo/surmawala-icon.svg';
import { mergeClasses } from '../../classify';
import Button from '../Button';
import MyButton from '../MyButton';
import Field from '../Field';
import LoadingIndicator from '../LoadingIndicator';
import TextInput from '../TextInput';
import { isRequired } from '../../util/formValidators';

import defaultClasses from './signIn.css';
import { useUserContext } from '@magento/peregrine/lib/context/user';

// Note: we can't access the actual message that comes back from the server
// without doing some fragile string manipulation. Hardcoded for now.
const ERROR_MESSAGE =
    'The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.';

const SignIn = props => {
    const { setDefaultUsername, showCreateAccount, showForgotPassword } = props;

    const [
        { isGettingDetails, isSigningIn, signInError, getDetailsError },
        { signIn }
    ] = useUserContext();

    const hasError = !!signInError || !!getDetailsError;

    const formRef = useRef(null);
    const classes = mergeClasses(defaultClasses, props.classes);
    const errorMessage = hasError ? ERROR_MESSAGE : null;

    const handleSubmit = useCallback(
        ({ email: username, password }) => {
            signIn({ username, password });
        },
        [signIn]
    );

    const handleForgotPassword = useCallback(() => {
        const { current: form } = formRef;

        if (form) {
            setDefaultUsername(form.formApi.getValue('email'));
        }

        showForgotPassword();
    }, [setDefaultUsername, showForgotPassword]);

    const handleCreateAccount = useCallback(() => {
        const { current: form } = formRef;

        if (form) {
            setDefaultUsername(form.formApi.getValue('email'));
        }

        showCreateAccount();
    }, [setDefaultUsername, showCreateAccount]);

    if (isGettingDetails || isSigningIn) {
        return (
            <div className={classes.modal_active}>
                <LoadingIndicator>{'Signing In'}</LoadingIndicator>
            </div>
        );
    }

    return (
        <div className={classes.root}>
            <div className={classes.logoContainer}>
            <img
                // className={classes.indicator}
                src={logo}
                width="64"
                height="64"
                // alt="logo"
            />
            </div>
            <Form
                ref={formRef}
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Field required={true}>
                    <TextInput
                        autoComplete="email"
                        field="email"
                        placeholder="email"
                        validate={isRequired}
                    />
                </Field>
                <Field required={true}>
                    <TextInput
                        autoComplete="current-password"
                        field="password"
                        type="password"
                        placeholder="password"
                        validate={isRequired}
                    />
                </Field>
                <div className={classes.signInError}>{errorMessage}</div>
                <div className={classes.signInButton}>
                    <Button priority="high" type="submit">
                        {'Sign In'}
                    </Button>
                </div>
            </Form>
            <div className={classes.forgotPasswordButton}>
                <Button
                    priority="low"
                    type="button"
                    onClick={handleForgotPassword}
                >
                    {'Forgot Password ?'}
                </Button>
            </div>
            {/* <div className={classes.signInDivider} /> */}
            <div className={classes.fbButtonContainer}>
                <MyButton 
                type="button"
                content="Log In With Facebook"
                contentStyle={classes.fbButton}
                />
            </div>
            <div className={classes.buttons}>
                <MyButton 
                type="button"
                content="Log In With Google"
                contentStyle={classes.googleButton}
                />
            </div>
            <div className={classes.buttons}>
                <MyButton 
                type="button"
                content="Log In With Twitter"
                contentStyle={classes.twitterButton}
                />
            </div>
            <div className={classes.buttons}>
                <MyButton 
                type="button"
                content="Log In With Linkedin"
                contentStyle={classes.linkedinButton}
                />
            </div>
            <div className={classes.createAccountButton}>
                <Button
                    priority="normal"
                    type="button"
                    onClick={handleCreateAccount}
                >
                    {'Create an Account'}
                </Button>
            </div>
        </div>
    );
};

export default SignIn;

SignIn.propTypes = {
    classes: shape({
        createAccountButton: string,
        form: string,
        forgotPasswordButton: string,
        root: string,
        signInButton: string,
        signInDivider: string,
        signInError: string
    }),
    setDefaultUsername: func.isRequired,
    showCreateAccount: func.isRequired,
    showForgotPassword: func.isRequired
};
