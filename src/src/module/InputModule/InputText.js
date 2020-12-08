import {FormControl, Input, InputLabel} from "@material-ui/core";

const InputText = ({handleChange, value, label, name, sName = 'defualtClassName'})=>{
    return(
        <FormControl className={sName}>
            <InputLabel htmlFor="text-component">{label}</InputLabel>
            <Input id="text-component" value={value} onChange={handleChange(name)} />
        </FormControl>
    )
}
export default InputText
