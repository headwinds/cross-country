import React, { useState, useReducer, useEffect } from 'react';
// components
import { Image, TextInput, Column, Row, Paragraph, Button, Label, SubHeadline } from '../../';
import LoginView from './login-view';

// utils
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import { getWindow } from '../../../utils/server-side-util';
import { fetchRetry } from '../../../utils/fetch-util';

const usernameRegExp = /^.{2,}$/;
const passwordRegExp = /^.{4,}$/;

const loginReducerInitialState = {
  username: {
    isUsernameValid: false,
    isUsernameUntouched: true,
    usernameErrorMessage: 'Username is required and must be lowercase & unique',
    usernameRegExp,
    usernameValue: '',
  },
  password: {
    isPasswordValid: false,
    isPasswordUntouched: true,
    passwordErrorMessage: 'Password is required and must be at least 4 characters',
    passwordRegExp,
    passwordValue: '',
  },
  hasImage: false,
  a11y: '',
  feedback: '',
  text: '',
  fetch: false,
  response: null,
  route: '/login',
  screenWindow: null,
  unsplashImgUrl: null,
  loginResponse: {
    error: null,
    message: '',
    isSuccessful: false,
  },
};

const createInitialState = () => {
  return {
    ...loginReducerInitialState,
  };
};

const reduceActionTypes = {
  VALIDATE_USERNAME: 'VALIDATE_USERNAME',
  VALIDATE_PASSWORD: 'VALIDATE_PASSWORD',
  SET_SCREEN: 'SET_SCREEN',
  SET_LOGIN_RESPONSE: 'SET_LOGIN_RESPONSE',
  SET_LOGIN_ERROR: 'SET_LOGIN_ERROR',
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case reduceActionTypes.VALIDATE_USERNAME:
      return {
        ...state,
        username: {
          ...state.username,
          isUsernameValid: state.username.usernameRegExp.test(action.payload),
          isUsernameUntouched: false,
          usernameValue: action.payload,
        },
      };
    case reduceActionTypes.VALIDATE_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          isPassowrdValid: state.password.passwordRegExp.test(action.payload),
          isPasswordUntouched: false,
          passwordValue: action.payload,
        },
      };
    case reduceActionTypes.SET_SCREEN:
      return {
        ...state,
        screenWindow: action.payload,
      };
    case reduceActionTypes.SET_LOGIN_RESPONSE:
      return {
        ...state,
        loginResponse: action.payload,
      };
    case reduceActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        loginResponse: action.payload,
      };
    default:
      return state;
  }
};

const Login = ({
  crossCountryConfig = { UNSPLASH_API_KEY: 'YOUR-API-KEY' },
  isAnimated = false,
  hasImage = true,
  hasBackground = false,
  imageUrl = null,
}) => {
  const [
    {
      username: { usernameValue, isUsernameValid, isUsernameUntouched, usernameErrorMessage },
      password: { passwordValue, isPasswordValid, isPasswordUntouched, passwordErrorMessage },
      feedback,
      response,
      route,
      screenWindow,
      unsplashImgUrl,
      a11y,
      loginResponse,
    },
    dispatch,
  ] = useReducer(loginReducer, null, createInitialState);

  // functions
  const onUsernameChange = newValue => {
    dispatch({
      type: reduceActionTypes.VALIDATE_USERNAME,
      payload: newValue,
    });
  };

  const onPasswordChange = newValue => {
    dispatch({
      type: reduceActionTypes.VALIDATE_PASSWORD,
      payload: newValue,
    });
  };

  const onKeydownHandler = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      login();
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    login();
  };

  const login = () => {
    if (username && password) {
      postLoginUser({ username: usernameValue, password: passwordValue }, route)
        .then(
          response => {
            return response.json();
          },
          error => {
            return callback(error);
          }
        )
        .then(json => {
          const { isAuthenticated, message, status, access_token } = json;
          if (status === 200) {
            if (!isAuthenticated && message) {
              return dispatch({
                type: reduceActionTypes.SET_LOGIN_ERROR,
                payload: { feedback: message, response: { hasError: true, isSuccessful: false } },
              });
            } else if (isAuthenticated && access_token) {
              dispatch({
                type: reduceActionTypes.SET_LOGIN_RESPONSE,
                payload: { feedback: 'You are logged in!', response: { hasError: false, isSuccessful: true } },
              });
            } else {
              dispatch({
                type: reduceActionTypes.SET_LOGIN_RESPONSE,
                payload: json,
              });
            }
          }
        })
        .catch(error => {
          return dispatch({
            type: reduceActionTypes.SET_LOGIN_ERROR,
            payload: error,
          });
        });
    }
  };

  // effects
  // capture keydown events but interferes with input fields
  /*
  useEffect(() => {
    //
    const newScreenWindow = getWindow();
    newScreenWindow?.addEventListener('keydown', onKeydownHandler, false);
    dispatch({
      type: reduceActionTypes.SET_SCREEN,
      payload: newScreenWindow,
    });

    return () => {
      screenWindow?.removeEventListener('keyPress', onKeydownHandler, false);
    };
  }, []);*/

  useEffect(() => {
    const { UNSPLASH_API_KEY } = crossCountryConfig;

    if (UNSPLASH_API_KEY !== 'YOUR-API-KEY' && unsplashImgUrl === null && hasImage)
      getUnsplashPhoto(UNSPLASH_API_KEY).then(({ type, response, status }) => {
        if (status === 200) {
          const { urls } = response;
          const { small } = urls;
          setState({ ...state, unsplashImgUrl: small, a11y: 'record player' });
        }
      });
  }, []);

  const loginViewProps = {
    crossCountryConfig,
    usernameValue,
    passwordValue,
    onSubmitHandler,
    onUsernameChange,
    onPasswordChange,
    unsplashImgUrl,
    imageUrl,
    a11y,
    loginResponse,
    isAnimated,
    hasImage,
    hasBackground,
  };

  return <LoginView {...loginViewProps} />;
};

export default Login;
