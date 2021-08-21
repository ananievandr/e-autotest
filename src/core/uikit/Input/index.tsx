import MaterialInput, { InputProps } from '@material-ui/core/Input';

import { useStyles } from './styles';

function Input(props: InputProps) {
    const classes = useStyles();

    return (
        <MaterialInput 
            classes={{
                root: classes.root,
                input: classes.input,
                underline: classes.inputUnderline,
                focused: classes.focused,
                error: classes.error
            }}
            fullWidth={true}
            {...props} 
        /> 
    );
}

export default Input;
