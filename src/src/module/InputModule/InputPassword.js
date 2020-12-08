import {FormControl, InputLabel, Input, InputAdornment, IconButton} from "@material-ui/core";
import {Visibility, VisibilityOff} from "@material-ui/icons";

const InputPassword = ({setValues, values, handleChange, sName})=>{

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return(
        <FormControl className={sName}>
            <InputLabel htmlFor="password">Пароль</InputLabel>
            <Input
                id="password"
                color="default"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
            />
        </FormControl>
    )
}

export default InputPassword