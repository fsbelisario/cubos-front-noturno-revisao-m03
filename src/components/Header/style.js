import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    button: {
        height: 36,
        width: 64,
        backgroundColor: '#FF505F',
        marginRight: 20,
        '&:hover': {
            backgroundColor: '#EE4453',
        }
    },
    greeting: {
        marginLeft: 20
    }
});