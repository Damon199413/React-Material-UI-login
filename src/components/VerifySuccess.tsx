import React, { useReducer, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import logo from '../assets/images/logo.svg';
import VerifySuccessIcon from '../assets/icons/verify-success.svg'

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
            marginTop: '20px'
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
            height: '480px',
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

const VerVerifySuccess = () => {
    const classes = useStyles();
    return (
        <>
            <div className="logo">
                <img src={logo} className="mt-73" />
            </div>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <img src={VerifySuccessIcon} className='verify-email' />
                    {/* <CardHeader className={classes.header} title="Forget Password?" /> */}
                    <h1>Verification is </h1>
                    <h1>successful</h1>
                    <div className="footer">
                        <span>Please, <a className="mx-2 text-decoration-none" href="#"> Sign In</a>  to continue</span>
                        
                    </div>
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
                </Card>
            </form>
        </>
    );
}

export default VerVerifySuccess;