import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    card: {
        display: 'flex',
        borderRadius: 16,
        width: 825,
        boxShadow: '0px 8px 9px -5px rgba(0, 0, 0, 0.2), 0px 15px 22px 2px rgba(0, 0, 0, 0.14), 0px 6px 28px 5px rgba(0, 0, 0, 0.12)',
        padding: '45px 60px 60px 62px',
        margin: 'auto',
        '& h2': {
            textAlign: 'center',
            marginBottom: 55,
            fontSize: 34
        },
    },
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
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#FFFFFF'
    }
}));