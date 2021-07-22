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
import BackIcon from '../assets/icons/icon-chevron-left 1.svg'
import emailIcon from '../assets/icons/email-icon.svg';

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
            height: '395px',
            boxShadow: '0px 44px 65px rgba(176, 183, 195, 0.19)',
            borderRadius: '15px',
        },
        button: {
            margin: theme.spacing(1),
            textAlign: 'center'
        },
    })
);



const Forgetpassword = () => {
    const classes = useStyles();

    return (
        <>
            <div className="logo">
                <img src={logo} className="mt-73" />
            </div>
            <form className={classes.container} noValidate autoComplete="off">
                <Card className={classes.card}>
                    <CardHeader className={classes.header} title="Forget Password?" />
                    <h3>Enter your details to receive a reset link!</h3>
                    <CardContent>
                        <div>

                            <TextField
                                fullWidth
                                id="email"
                                type="email"
                                placeholder="hello@unisense.agency"
                                margin="normal"
                                variant="outlined"
                                InputProps={{
                                    startAdornment: <InputAdornment position="start"><img src={emailIcon} /></InputAdornment>,
                                }}
                            />
                            <div style={{ padding: '16.5px' }}></div>
                        </div>
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
                        <a className="mx-2 text-decoration-none" href="#"> <img src={BackIcon} />Back to Siginin</a>
                    </div>

                </Card>
            </form>
        </>
    );
}

export default Forgetpassword;