import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';

import background from '../assets/images/background.svg';
import logo from '../assets/images/logo.svg';
import googleIcon from '../assets/icons/google-icon.svg';
import emailIcon from '../assets/icons/email-icon.svg';
import lockIcon from '../assets/icons/lock-icon.svg';
import eyeIcon from '../assets/icons/eye-icon.svg';

import './style.scss'
import InputAdornment from '@material-ui/core/InputAdornment';
import { UnsubscribeTwoTone } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      width: '410px',
      margin: `${theme.spacing(0)} auto`
    },
    loginBtn: {
      marginTop: theme.spacing(2),
      textTransform: 'unset',
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
      width: '410px',
    },
    button: {
      textTransform: 'unset',
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
  emailVal: string
  isEmailError: boolean
  isPwdError: boolean
};

const initialState: State = {
  username: '',
  password: '',
  isButtonDisabled: true,
  helperText: '',
  emailVal: '',
  isEmailError: false,
  isPwdError: false
};

type Action = { type: 'setUsername', payload: string }
  | { type: 'setPassword', payload: string }
  | { type: 'setIsButtonDisabled', payload: boolean }
  | { type: 'loginSuccess', payload: string }
  | { type: 'loginFailed', payload: string }
  | { type: 'setIsError', payload: boolean }
  | { type: 'onBlur', payload: string }
  | { type: 'onFocus', payload: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'onBlur':
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!state.username.match(re)) { 
        return {
          ...state,
          emailVal: action.payload,
          isEmailError: true
        };
      }
      return {
        ...state
      }
    case 'onFocus':
      return {
        ...state,
        isEmailError: false,
        emailVal: ''
      };
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
        isEmailError: false,
        isPwdError: false
      };
    case 'loginFailed':
      return {
        ...state,
        helperText: action.payload,
        isPwdError: true,
      };
    case 'setIsError':
      return {
        ...state,
        isPwdError: action.payload
      };
  }
}

const Login = () => {
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

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'setUsername',
      payload: event.target.value
    });
  };

  const handleUsernameBlur: React.FocusEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'onBlur',
      payload: 'Please enter a valid email address'
    });
  };
  const handleUsernameFocus: React.FocusEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'onFocus',
      payload: ''
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: 'setPassword',
      payload: event.target.value
    });
  };

  return (
    <>
      <Typography className="logo">
        <img src={logo} className="mt-73" />
      </Typography>
      <form className={classes.container} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardHeader className={classes.header} title="Getting Started" />
          <h3>Create an account to continue!</h3>
          <CardContent>
            <Typography>
              <Button
                variant="contained"
                className={classes.button}
                fullWidth
                startIcon={<Avatar src={googleIcon} className='google-icon' />}
              >
                Sign In with Google
              </Button>

              <Typography className="google-bottom">
                OR
              </Typography>
              <TextField
                className='textField'
                error={state.isEmailError}
                fullWidth
                id="username"
                type="email"
                placeholder="Your Eamil"
                margin="normal"
                helperText={state.emailVal || ''}
                onChange={handleUsernameChange}
                onBlur={handleUsernameBlur}
                onFocus={handleUsernameFocus}
                onKeyPress={handleKeyPress}
                variant="outlined"
                InputProps={{
                  startAdornment: <InputAdornment position="start"><img src={emailIcon} /></InputAdornment>,
                }}
              />
              <Typography style={{ padding: '16.5px' }}></Typography>
              <TextField
                className='textField'
                error={state.isPwdError}
                fullWidth
                id="password"
                type="password"
                placeholder="Create Password"
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
            </Typography>
            <Typography className="forget_pw">
              <Link href="#" className="title">
                Forget Password?
              </Link>
              <Link href="#" >
                Reset
              </Link>
            </Typography>
            <Typography className="term">
              <Box component="span" m={1}>
                By signing in you agree to the
              </Box>
              <Link href="#" className="mx-2">Terms & Conditions</Link>
            </Typography>
            <CardActions>
              <Button
                variant="contained"
                fullWidth
                size="large"
                color="primary"
                className={classes.loginBtn}
                onClick={handleLogin}
                disabled={state.isButtonDisabled}>
                Sign In
              </Button>
            </CardActions>
          </CardContent>

          <Typography className="footer">
            <Box component="span" m={1}>Don't have an accout?</Box>
            <Link className="mx-2" href="#">Sign Up</Link>
          </Typography>

        </Card>
      </form>
    </>
  );
}

export default Login;