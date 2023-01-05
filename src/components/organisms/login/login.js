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
    isValid: false,
    isUntouched: true,
    errorMessage: 'Password is required and must be at least 4 characters',
    regex: passwordRegExp,
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

const formActionTypes = {
  VALIDATE_USERNAME: 'VALIDATE_USERNAME',
  VALIDATE_PASSWORD: 'VALIDATE_PASSWORD',
};

const loginReducer = (state, action) => {
  console.log('loginReducer action: ', action);
  switch (action.type) {
    case formActionTypes.VALIDATE_USERNAME:
      const { usernameRegExp } = loginReducerInitialState.username;
      return {
        ...state,
        username: {
          ...state.username,
          isUsernameValid: usernameRegExp.test(action.payload),
          isUsernameUntouched: false,
          usernameValue: action.payload,
        },
      };
    case formActionTypes.VALIDATE_PASSWORD:
      return {
        ...state,
        password: {
          ...state.password,
          // isValid: state.password.regex.test(action.payload),
          isUntouched: false,
          passwordValue: action.payload,
        },
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

  //const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  // functions

  const onUsernameChange = newValue => {
    console.log('onUsernameChange value: ', newValue);

    dispatch({
      type: formActionTypes.VALIDATE_USERNAME,
      payload: newValue,
    });
    //setUsernameValue(newValue);
  };

  const onPasswordChange = newValue => {
    setState({ ...state, password: newValue });
  };

  const onKeydownHandler = event => {
    event.preventDefault();
    if (event.keyCode === 13) {
      //login();
    }
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    login();
  };

  const login = () => {
    const { username, password, route } = this.state;

    if (username && password) {
      postLoginUser({ username, password }, route)
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
              this.setState({ feedback: message, response: { hasError: true, isSuccessful: false } });
            } else if (isAuthenticated && access_token) {
              this.setState({ feedback: 'You are logged in!', response: { hasError: false, isSuccessful: true } });
            }
            callback(json);
          }
        })
        .catch(error => callback(error));
    }
  };

  // effects
  // why do I even need this?!
  /*
  useEffect(() => {
    //
    const newScreenWindow = getWindow();
    newScreenWindow?.addEventListener('keydown', onKeydownHandler, false);
    setState({ ...state, screenWindow: newScreenWindow });

    return () => {
      screenWindow?.removeEventListener('keyPress', onKeydownHandler, false);
    };
  }, [screenWindow]);
  */

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

  useEffect(() => {
    console.log('should re-render when usernameValue or passwordValue changes');
    console.log('usernameValue on change: ', usernameValue);
    console.log('usernameValue isUsernameValid: ', isUsernameValid);
  }, [usernameValue, isUsernameValid]);

  //useEffect(() => {}, [username, password]);

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

  return (
    <>
      <TextInput onTextChange={onUsernameChange} value={usernameValue} />
      <Paragraph>{usernameValue}</Paragraph>
    </>
  );
};

export default Login;
