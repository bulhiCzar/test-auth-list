import s from './AddBlock.module.css'
import InputText from "../../../../module/InputModule/InputText";
import Button from "@material-ui/core/Button";

const AddBlock = (props) => {

    return (
        <div  className={s.wrapper}>
            <form onSubmit={props.submit} className={s.form}>
                <InputText
                    value={props.value}
                    handleChange={props.handleChange}
                    label={'Введите имя'}
                    sName={s.input}
                    name={props.name}
                />
                <Button
                    className={s.button}
                    type={'submit'}
                    variant="contained"
                    color="default"
                    disableElevation
                >
                    Добавить контакт
                </Button>
            </form>
        </div>
    )
}

export default AddBlock