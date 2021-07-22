import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import background from '../assets/images/background.svg';
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/icons/google-icon.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import lockIcon from '../assets/icons/lock-icon.svg';
import eyeIcon from '../assets/icons/eye-icon.svg';

import './style.scss'
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: 400,
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
    },
    header: {
      fontFamily: 'Poppins',
      fontStyle: 'normal',
      fontWeight: 600,
      fontSize: '28px',
      lineHeight: '130%',
      textAlign: 'center',
    },
    card: {
      marginTop: theme.spacing(10),
      padding: '13px',
      minWidth: '410px',
      height: '824px'
    },
    button: {
      margin: theme.spacing(1),
      textAlign: 'center'
    },
  })
);

//state type

type State = {
  username: string
  password: string
  isButtonDisabled: boolean
  helperText: string
  isError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  isError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'setUsername':
      return {
        ...state,
        username: action.payload
      };
    case 'setPassword':
      return {
        ...state,
        password: action.payload
      };
    case 'setIsButtonDisabled':
      return {
        ...state,
        isButtonDisabled: action.payload
      };
    case 'loginSuccess':
      return {
        ...state,
        helperText: action.payload,
        isError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isError: true
      };
    case 'setIsError':
      return {
        ...state,
        isError: action.payload
      };
  }
}

const Signup = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: false
      });
    } else {
      dispatch({
        type: 'setIsButtonDisabled',
        payload: true
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === 'abc@email.com' && state.password === 'password') {
      dispatch({
        type: 'loginSuccess',
        payload: 'Login Successfully'
      });
    } else {
      dispatch({
        type: 'loginFailed',
        payload: 'Incorrect username or password'
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setUsername',
        payload: event.target.value
      });
    };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> =
    (event) => {
      dispatch({
        type: 'setPassword',
        payload: event.target.value
      });
    }
  return (
    <>
      <div className="logo">
        <img src={logo} className="mt-73" />
      </div>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Getting Started" />
          <h3>Create an account to continue!</h3>
          <CardContent>
            <div>
              <Button
                variant="contained"
                fullWidth
                startIcon={<Avatar src={googleIcon} />}
              >
                Sign In with Google
              </Button>

              <div className="google-bottom">
                OR
              </div>
              <TextField
                error={state.isError}
                fullWidth
                id="username"
                type="email"
                placeholder="Username"
                margin="normal"
                onChange={handleUsernameChange}
                onKeyPress={handleKeyPress}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><img src={emailIcon} /></InputAdornment>,
                }}
              />
              <div style={{ padding: '16.5px' }}></div>
              <TextField
                error={state.isError}
                fullWidth
                id="password"
                type="password"
                placeholder="Password"
                margin="normal"
                helperText={state.helperText}
                onChange={handlePasswordChange}
                onKeyPress={handleKeyPress}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><img src={lockIcon} /></InputAdornment>,
                  endAdornment: <InputAdornment position="start"><img src={eyeIcon} /></InputAdornment>,
                }}
              />
            </div>
            <div className="forget_pw">
              <span className="title">
                Forget Password?
              </span>
              <a href="#"> Reset</a>
            </div>
            <div className="term">
              <span>By signing in you agree to the</span>
              <a href="#" className="mx-2">Terms & Conditions</a>
            </div>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                className={classes.loginBtn}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}>
                Login
              </Button>
            </CardActions>
          </CardContent>

          <div className="footer">
            <span>Don't have accout?</span>
            <a className="mx-2" href="#">Sign UP</a>
          </div>

        </Card>
      </form>
    </>
  );
}

export default Signup;