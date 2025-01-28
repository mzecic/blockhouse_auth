import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import App from '../src/App';

describe('App Navigation', () => {
  const renderApp = () => render(<App />);

  it('renders login screen by default', () => {
    const {getByTestId} = renderApp();
    expect(getByTestId('login-screen')).toBeTruthy();
  });

  it('navigates to signup screen', () => {
    const {getByText, getByTestId} = renderApp();

    fireEvent.press(getByText('Sign Up'));
    expect(getByTestId('signup-screen')).toBeTruthy();
  });

  it('validates login with empty fields', () => {
    const {getByText} = renderApp();
    const loginButton = getByText('Login');

    fireEvent.press(loginButton);

    // checking for errors in the login form
    expect(getByText('Please enter a valid email address.')).toBeTruthy();
    expect(getByText('Please enter your password.')).toBeTruthy();
  });

  it('validates signup with empty fields', () => {
    const {getByText} = renderApp();

    // navigation to signup
    fireEvent.press(getByText('Sign Up'));

    const signupButton = getByText('Sign Up');
    fireEvent.press(signupButton);

    // checking for validation errors
    expect(getByText('Email is required.')).toBeTruthy();
    expect(getByText('Password is required.')).toBeTruthy();
    expect(getByText('Please confirm your password.')).toBeTruthy();
  });

  it('validates email format', () => {
    const {getByText, getByPlaceholderText} = renderApp();

    const emailInput = getByPlaceholderText('Email');
    const loginButton = getByText('Login');

    // email validation
    fireEvent.changeText(emailInput, 'invalidemail');
    fireEvent.press(loginButton);

    expect(getByText('Please enter a valid email address.')).toBeTruthy();
  });

  it('validates password length', () => {
    const {getByText, getByPlaceholderText} = renderApp();

    // navigation to signup
    fireEvent.press(getByText('Sign Up'));

    const passwordInput = getByPlaceholderText('Password');
    const signupButton = getByText('Sign Up');

    // short passwrod validation
    fireEvent.changeText(passwordInput, '12');
    fireEvent.press(signupButton);

    expect(getByText('Password must be at least 6 characters.')).toBeTruthy();
  });
});
