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


function FormEnroll({ setLoading, setRequestError }) {
    const classes = useStyles();
    const { handleSubmit, register, formState: { errors }, setError } = useForm();
    const history = useHistory();

    async function enrollUser(userData) {
        if (userData.userPassword !== userData.repeatUserPassword) {
            setError('userPassword', { type: 'validate' }, { shouldFocus: true });
            setError('repeatUserPassword', { type: 'validate' }, { shouldFocus: false });
            return;
        }

        const processedData = {
            'nome': userData.name,
            'email': userData.email,
            'senha': userData.userPassword
        }

        setRequestError('');
        setLoading(true);

        const response = await fetch('https://revisao-m03.herokuapp.com/usuarios', {
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
        <form className='enroll' onSubmit={handleSubmit(enrollUser)}>
            <Typography
                variant='h4'
                component='h2'
            >
                Cadastro
            </Typography>
            <div className={classes.row}>
                <TextField
                    className={classes.input}
                    label='Nome'
                    {...register('name', { required: true })}
                    error={!!errors.name}
                />
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
                <PasswordInput
                    label='Repita a senha'
                    id='repeatUserPassword'
                    register={() => register('repeatUserPassword', { required: true })}
                    error={!!errors.repeatUserPassword}
                />
            </div>
            <Button type='submit' className={classes.button} variant='contained' color='primary'>
                CADASTRAR-SE
            </Button>
        </form>
    );
}

export default FormEnroll;