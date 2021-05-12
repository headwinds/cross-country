import React, { Component } from 'react';
import Image from '../../atoms/image/image';
import Column from '../../atoms/column/column';
import Row from '../../atoms/row/row';
import SubHeadline from '../../atoms/text/subheadline/subheadline';
import TextInput from '../../atoms/text/input';
import Label from '../../atoms/text/label';
import Paragraph from '../../atoms/text/paragraph';
import Button from '../../atoms/button/button';
import { postLoginUser } from '../../../services/login-service';
import { getUnsplashPhoto } from '../../../services/image-service';
import clsx from 'clsx';
import styles from './login.scss';
import { privateConfig } from '../../../../cross-country-config-private';

/**
 * Allows the user to enter text
 *
 * @category Organisms
 * @namespace Organisms.Login
 * @component
 * @param {function} onChangeHandler - A change handler function param
 * @param {object} customStyle - An object param
 * @param {string} value - A string param
 */
const Login = ({
  config: {
    url,
    text,
    a11y,
    hasBackground,
    route,
    callback,
    username,
    password,
    response = null,
    handleClick,
    onUsernameChange,
    onPasswordChange,
    feedback,
    customErrorClass = '',
    crossCountryConfig = null,
  },
}) => {
  return (
    <Column hasBackground={hasBackground} customClass={styles.login}>
      <SubHeadline>Login</SubHeadline>
      <Image url={url} width="300" a11y={a11y} />
      <Row customClass={styles.login__row}>
        <Label>Username</Label>
        <TextInput onChangeHandler={onUsernameChange} value={username} />
      </Row>
      <Row customClass={styles.login__row}>
        <Label>Password</Label>
        <TextInput onChangeHandler={onPasswordChange} value={password} type="password" />
      </Row>
      <Row customClass={styles.login__rowSend}>
        <Button label="login" handleClick={handleClick}>
          Send
        </Button>
      </Row>
      <Row>
        {feedback !== '' && (
          <Paragraph
            customClass={clsx(
              { [styles.login__error]: response.hasError, [styles.login__success]: response.isSuccessful },
              customErrorClass
            )}
          >
            {feedback}
          </Paragraph>
        )}
      </Row>
    </Column>
  );
};

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      feedback: '',
      imageUrl: '',
      crossCountryConfig: this.props.config.crossCountryConfig || privateConfig,
      fetch: false,
      response: null,
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.login = this.login.bind(this);
    this.onKeydownHandler = this.onKeydownHandler.bind(this);
  }

  componentDidMount() {
    const { crossCountryConfig } = this.state;

    getUnsplashPhoto(crossCountryConfig.UNSPLASH_API_KEY).then(result => {
      if (result.errors) {
        // handle error here
        console.log('error occurred: ', result.errors[0]);
      } else {
        // handle success here
        const {
          urls: { small },
        } = result.response;
        this.setState({ imageUrl: small });
      }
    });

    window.addEventListener('keydown', this.onKeydownHandler, false);
  }

  componentWillUnmount() {
    window.removeEventListener('keyPress', this.onKeydownHandler, false);
  }

  componentDidUpdate() {}

  onUsernameChange({ target: { value } }) {
    this.setState({ username: value });
  }

  onPasswordChange({ target: { value } }) {
    this.setState({ password: value });
  }

  onKeydownHandler(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      this.login();
    }
  }

  login() {
    const {
      config: { route },
    } = this.props;
    const { username, password } = this.state;

    if (username && password) {
      postLoginUser({ username, password }, route)
        .then(
          response => {
            console.log('Login heard response: ', response);
            return response.json();
          },
          error => {
            console.log('Login heard error: ', error);
          }
        )
        .then(json => {
          console.log('Login heard json: ', json);
          const { isAuthenticated, message, status, access_token } = json;
          if (status === 200) {
            if (!isAuthenticated && message) {
              this.setState({ feedback: message, response: { hasError: true, isSuccessful: false } });
            } else if (isAuthenticated && access_token) {
              this.setState({ feedback: 'You are logged in!', response: { hasError: false, isSuccessful: true } });
            }
          }
        })
        .catch(err => console.log('caught err: ', err));
    }
  }

  render() {
    const { config } = this.props;
    const { username, password, feedback, imageUrl, response } = this.state;
    const loginConfig = {
      ...config,
      url: imageUrl,
      username,
      password,
      feedback,
      handleClick: this.login,
      onUsernameChange: this.onUsernameChange,
      onPasswordChange: this.onPasswordChange,
      response,
    };
    return <Login config={loginConfig} />;
  }
}