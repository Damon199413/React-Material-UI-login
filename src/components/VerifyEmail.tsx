import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';

import logo from '../assets/images/logo.svg';
import EmailVerifyIcon from '../assets/icons/verifyemail-icon.svg'

import './style.scss'
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            width: 400,
            margin: `${theme.spacing(0)} auto`,
            marginTop: '141px'
        },
        loginBtn: {
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
            height: '520px',
            boxShadow: '0px 44px 65px rgba(176, 183, 195, 0.19)',
            borderRadius: '15px',
            textAlign: 'center'
        },
        button: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
    })
);

const VerifyEmail = () => {
    const classes = useStyles();
    return (
        <>
            <div className="logo">
                <img src={logo} className="mt-73" />
            </div>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <img src={EmailVerifyIcon} className='verify-email' />
                    {/* <CardHeader className={classes.header} title="Forget Password?" /> */}
                    <h1>Verify Your Email</h1>
                    <h4>We've sent a link to your email </h4>
                    <h4>address: mark@gmail.com</h4>
                    <CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                fullWidth
                                size="large"
                                color="primary"
                                className={classes.loginBtn}>
                                Submit
                            </Button>
                        </CardActions>
                    </CardContent>

                    <div className="footer">
                        <span>Didn't receive an email? </span>
                        <a className="mx-2 text-decoration-none" href="#"> Resend</a>
                    </div>

                </Card>
            </form>
        </>
    );
}

export default VerifyEmail;