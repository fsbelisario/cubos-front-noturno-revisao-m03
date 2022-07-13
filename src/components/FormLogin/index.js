import { useForm } from 'react-hook-form';
import {
    Button,
    TextField,
    Typography
}
    from '@material-ui/core';
import { useHistory } from 'react-router';
import PasswordInput from '../PasswordInput';
import useStyles from './style.js';
import './style.css';

function FormLogin({ setLoading, setRequestError }) {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors } } = useForm();
    const history = useHistory();

    async function login(userData) {
        const processedData = {
            'email': userData.email,
            'senha': userData.userPassword
        }

        setRequestError('');
        setLoading(true);

        const response = await fetch('https://revisao-m03.herokuapp.com/login', {
            method: 'POST',
            body: JSON.stringify(processedData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        setLoading(false);

        if (response.ok) {
            history.push('./home');
            return;
        };

        const errorMessage = await response.json();

        setRequestError(errorMessage);
    };

    return (
        <form className='login' onSubmit={handleSubmit(login)}>
            <Typography
                variant='h4'
                component='h2'
            >
                Login
            </Typography>
            <div className={classes.row}>
                <TextField
                    className={classes.input}
                    label='E-mail'
                    {...register('email', { required: true })}
                    error={!!errors.email}
                />
            </div>
            <div className={classes.row}>
                <PasswordInput
                    label='Senha'
                    id='userPassword'
                    register={() => register('userPassword', { required: true })}
                    error={!!errors.userPassword}
                />
            </div>
            <Button type='submit' className={classes.button} variant='contained' color='primary'>
                ENTRAR
            </Button>
        </form >
    );
}

export default FormLogin;