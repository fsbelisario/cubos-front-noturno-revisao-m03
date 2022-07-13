import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    row: {
        display: 'flex',
        gap: 40,
        marginBottom: 60
    },
    button: {
        backgroundColor: '#007DFF',
        '&:hover': {
            backgroundColor: '#075BC4',
        }
    },
    input: {
        width: 220
    }
});