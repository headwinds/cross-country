import React, { useReducer, useEffect, useCallback } from "react";

// components
import LoginView from "./login-view";

// utils
import { postLoginUser } from "../../../services/login-service";
import { getUnsplashPhoto } from "../../../services/image-service";
import useLoginLocalStorage from "../../../hooks/useLoginLocalStorage";
import UserModel from "../../../models/UserModel";

/*
Authenticate the user with a JWT token and set access token in a secure cookie 
*/

const usernameRegExp = /^.{2,}$/;
const passwordRegExp = /^.{4,}$/;

const loginReducerInitialState = {
  username: {
    isUsernameValid: false,
    isUsernameUntouched: true,
    usernameErrorMessage: "Username is required and must be lowercase & unique",
    usernameRegExp,
    usernameValue: "",
  },
  password: {
    isPasswordValid: false,
    isPasswordUntouched: true,
    passwordErrorMessage:
      "Password is required and must be at least 4 characters",
    passwordRegExp,
    passwordValue: "",
  },
  hasImage: false,
  a11y: "",
  text: "",
  fetch: false,
  response: null,
  route: "/login",
  screenWindow: null,
  unsplashImgUrl: null,
  isFetching: false,
  error: null,
  // need to check the secure cookie
  hasRememberMeChecked: false,
  user: null,
  message: "",
};

const createInitialState = () => {
  return {
    ...loginReducerInitialState,
  };
};

const reduceActionTypes = {
  VALIDATE_USERNAME: "VALIDATE_USERNAME",
  VALIDATE_PASSWORD: "VALIDATE_PASSWORD",
  SET_SCREEN: "SET_SCREEN",
  SET_LOGIN_SUCCESS: "SET_LOGIN_SUCCESS",
  SET_LOGIN_ERROR: "SET_LOGIN_ERROR",
  IS_FETCHING: "IS_FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
  FETCH_FAIL: "FETCH_FAIL",
  TOGGLE_REMEMBER_ME: "TOGGLE_REMEMBER_ME",
  SET_REMEMBER_ME_SELECTED: "SET_REMEMBER_ME_SELECTED",
  SET_USERNAME_PASSWORD: "SET_USERNAME_PASSWORD",
};

const loginReducer = (state, action) => {
  switch (action.type) {
    case reduceActionTypes.SET_USERNAME_PASSWORD:
      return {
        ...state,
        username: {
          ...state.username,
          usernameValue: action.payload.username,
        },
        password: {
          ...state.password,
          passwordValue: action.payload.password,
        },
      };
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
    case reduceActionTypes.SET_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        message: action.payload.message,
      };
    case reduceActionTypes.SET_LOGIN_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case reduceActionTypes.IS_FETCHING:
      return {
        ...state,
        isFetching: true,
      };
    case reduceActionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
      };
    case reduceActionTypes.FETCH_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };
    case reduceActionTypes.TOGGLE_REMEMBER_ME:
      return {
        ...state,
        hasRememberMeChecked: state.hasRememberMeChecked ? false : true,
      };
    default:
      return state;
  }
};

const Login = ({
  crossCountryConfig = { UNSPLASH_API_KEY: "YOUR-API-KEY" },
  isAnimated = false,
  hasImage = false, // true is busted!
  hasBackground = false,
  imageUrl = null,
  onChange = (user: any) => {},
}) => {
  // remember me & local storage
  const [localStorageState, toggleRememberMe] = useLoginLocalStorage(
    "isRememberMeSelected",
    false
  );

  const { storedValue, storedUsername, storedPassword } = localStorageState;

  const [
    {
      username: {
        usernameValue,
        isUsernameValid,
        isUsernameUntouched,
        usernameErrorMessage,
      },
      password: {
        passwordValue,
        isPasswordValid,
        isPasswordUntouched,
        passwordErrorMessage,
      },
      route,
      unsplashImgUrl,
      a11y,
      user,
      hasRememberMeChecked,
    },
    dispatch,
  ] = useReducer(loginReducer, null, createInitialState);

  // functions
  const onUsernameChange = (newValue) => {
    dispatch({
      type: reduceActionTypes.VALIDATE_USERNAME,
      payload: newValue,
    });

    if (storedValue) {
      toggleRememberMe(newValue, passwordValue);
    }
  };

  const onPasswordChange = (newValue) => {
    dispatch({
      type: reduceActionTypes.VALIDATE_PASSWORD,
      payload: newValue,
    });
    if (storedValue) {
      toggleRememberMe(usernameValue, newValue);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch({
      type: reduceActionTypes.IS_FETCHING,
    });
    login();
  };

  useEffect(() => {
    console.log("Login user useEffect: ", user);
    onChange(user);
  }, [user]);

  console.log("Login localStorageState ", localStorageState);

  const handleRememberMeClicked = () => {
    console.log("Login handleRememberMeClicked ", {
      usernameValue,
      passwordValue,
    });

    toggleRememberMe(usernameValue, passwordValue);

    // dispatch toggle remember me
    dispatch({
      type: reduceActionTypes.TOGGLE_REMEMBER_ME,
    });
  };

  /*
  no need for this feature anymore - consider deleting it
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
  */

  useEffect(() => {
    if (storedValue && storedUsername && storedPassword) {
      dispatch({
        type: reduceActionTypes.SET_USERNAME_PASSWORD,
        payload: {
          username: storedUsername,
          password: storedPassword,
        },
      });
    }
  }, [storedValue, storedUsername, storedPassword]);

  const login = () => {
    if (usernameValue && passwordValue) {
      postLoginUser({ username: usernameValue, password: passwordValue }, route)
        .then(
          (response) => {
            return response.json();
          },
          (error) => {
            return dispatch({
              type: reduceActionTypes.SET_LOGIN_ERROR,
              payload: error,
            });
          }
        )
        .then((json) => {
          console.log("res  ", json);
          const { isAuthenticated, message, status } = json;

          /*
          access_token 
          isAuthenticated
          message: "success"
          refresh_token
          status: 200
          user_account: {
            admin: false,
            confirmed: true,
            confirmed_on: "Fri, 07 May 2021 14:53:29 GMT".
            email
            id 
            username
          } 
          */
          if (status === 200) {
            console.log("login json: ", json);
            if (isAuthenticated) {
              const { isAuthenticated, access_token, refresh_token } = json;
              const user = new UserModel({
                ...json.user_account,
                access_token,
                refresh_token,
                isAuthenticated,
              });
              dispatch({
                type: reduceActionTypes.SET_LOGIN_SUCCESS,
                payload: {
                  message: "You are logged in!",
                  user,
                },
              });
            } else {
              const errorPayload = {
                message,
                response: { hasError: true, isSuccessful: isAuthenticated },
              };
              dispatch({
                type: reduceActionTypes.SET_LOGIN_ERROR,
                payload: errorPayload,
              });
            }
          } else {
            dispatch({
              type: reduceActionTypes.SET_LOGIN_ERROR,
              payload: {
                message: "Something went wrong",
                response: { hasError: true, isSuccessful: false },
              },
            });
          }
        })
        .catch((error) => {
          return dispatch({
            type: reduceActionTypes.SET_LOGIN_ERROR,
            payload: error,
          });
        });
    }
  };

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
    isAnimated,
    hasImage,
    hasBackground,
    handleRememberMeClicked,
    user,
  };

  return <LoginView {...loginViewProps} hasRememberMeChecked={storedValue} />;
};

export default Login;
