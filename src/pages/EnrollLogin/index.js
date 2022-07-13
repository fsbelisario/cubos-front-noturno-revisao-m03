import {
    Backdrop,
    Card,
    CircularProgress,
    Snackbar,
}
    from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { useState } from 'react';
import FormEnroll from '../../components/FormEnroll';
import FormLogin from '../../components/FormLogin';
import useStyles from './style.js';
import './style.css';

function EnrollLogin() {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [requestError, setRequestError] = useState('');

    function handleAlertClose() {
        setRequestError('');
    };

    return (
        <div className='container'>
            <Card className={classes.card}>
                <FormEnroll setLoading={setLoading} setRequestError={setRequestError} />
                <FormLogin setLoading={setLoading} setRequestError={setRequestError} />
            </Card>

            <Backdrop className={classes.backdrop} open={loading}>
                <CircularProgress color='inherit' />
            </Backdrop>

            <Snackbar open={!!requestError} autoHideDuration={2000} onClose={handleAlertClose}>
                <Alert onClose={handleAlertClose} severity='error'>
                    {requestError}
                </Alert>
            </Snackbar>
        </div >
    );
}

export default EnrollLogin;