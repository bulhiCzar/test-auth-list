import s from './ListBlock.module.css'
import {useState} from "react";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import InputText from "../../../../module/InputModule/InputText";
import Button from "@material-ui/core/Button";
import DoneIcon from '@material-ui/icons/Done';

const ListBlock = ({item, deleteFunc, editFunc}) => {
    const [edit, setEdit] = useState(false)
    const [menu, setMenu] = useState(false)
    const [menuContext, setMenuContext] = useState(false)

    const [values, setValues] = useState({
        edit: ''
    })

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    const editLocal = (id) => {
        setEdit(true)
    }
    const send = (e)=>{
        e.preventDefault()
        if (values.edit){
            editFunc({id: item.id, newText: values.edit})
        }
        setEdit(false)
        setValues({edit: ''})
    }

    return (
        <div
            className={s.card}
            onMouseEnter={() => {
                setMenu(true)
            }}
            onMouseLeave={() => {
                setMenu(false)
            }}
        >
            <div className={s.cardHeader}>
                <div>Контакт</div>
            </div>
            <div className={s.cardBody}>
                {
                    !edit ?
                        <div>{item.name}</div>
                        :
                        <form onSubmit={send} className={s.form}>
                            <InputText
                                value={values.edit}
                                handleChange={handleChange}
                                label={item.name}
                                name={'edit'}
                            />
                            <Button
                                className={s.button}
                                type={'submit'}
                                variant="contained"
                                color="default"
                                disableElevation
                            >
                               <DoneIcon/>
                            </Button>
                        </form>
                }
            </div>
            <div className={`
                ${s.cardMenu}
                ${(edit || !menu) ? s.one : s.two}
                ${(edit || !(menu && menuContext)) ? '' : s.menuContext}
                `}
                 onMouseEnter={() => {
                     setMenuContext(true)
                 }}
                 onMouseLeave={() => {
                     setMenuContext(false)
                 }}
            >
                <EditIcon className={s.info} onClick={editLocal.bind(null, item.id)}/>
                <DeleteIcon className={s.delete} onClick={deleteFunc.bind(null, item.id)}/>
            </div>
        </div>
    )
}

export default ListBlock