import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: 2,
        backgroundColor: theme.palette.common.white,
        border: '1px solid #EBEBEB',
        transition: `all 0.2s ${theme.transitions.easing.easeIn}`,
        '&:hover': {
            borderColor: theme.palette.text.primary
        },
        marginTop: 10,
    },
    input: {
        padding: '12px 16px',
    },
    inputUnderline: {
        '&::before, &::after': {
            display: 'none'
        }
    },
    focused: {
        borderColor: theme.palette.text.primary
    },
    error: {
        borderColor: theme.palette.error.main
    }
}));
