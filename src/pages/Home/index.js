import Header from '../../components/Header';
import {
    Button
}
    from '@material-ui/core';
import { useHistory } from 'react-router';
import useStyles from './style.js';
import './style.css';

function Home() {
    const classes = useStyles();
    const history = useHistory();

    function editProfile() {
        history.push('./profile');
    };

    return (
        <div className='container'>
            <Header />
            <Button type='submit' onClick={editProfile} className={classes.button} variant='contained' color='primary'>
                ATUALIZAR PERFIL
            </Button>
        </div >
    );
}

export default Home;