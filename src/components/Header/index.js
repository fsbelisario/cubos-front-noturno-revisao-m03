import {
    Button,
    Typography
}
    from '@material-ui/core';
import { useHistory } from 'react-router';
import useStyles from './style.js';
import './style.css';

function Header() {
    const classes = useStyles();
    const history = useHistory();

    function logoff() {
        history.push('./');
    };

    return (
        <>
            <header>
                <Typography className={classes.greeting} variant='h5' component='h3'>
                    Olá, Fulano
                </Typography>
                <Button type='submit' onClick={logoff} className={classes.button} variant='contained' color='primary'>
                    SAIR
                </Button>
            </header>
        </>
    );
}

export default Header;