import s from './ListPage.module.css'
import AddBlock from "./Module/AddBlock/AddBlock";
import {useState} from "react";
import {useToasts} from "react-toast-notifications";
import ListBlock from "./Module/ListBlock/ListPage";

const ListPage = () => {
    const {addToast} = useToasts()
    const [values, setValues] = useState({
        name: '',
    })
    const [list, setList] = useState([
        {name: 'Вася', id: 1871263},
        {name: 'Петя', id: 18711332},
        {name: 'Джожи', id: 1871222},
        {name: 'Маша', id: 18372},
    ])

    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }
    const submitListAdd = (e) => {
        e.preventDefault()
        if (!values.name) {
            addToast('Поле пустое', {appearance: 'warning'})
            return
        }
        const item = {
            name: values.name,
            id: Date.now()
        }
        setList(list.concat(item))
        setValues({...values, name: ''})
        addToast('Контакт добавлен', {appearance: 'success'})
    }

    const deleteFromList = (id) => {
        setList(list.filter(item => item.id !== id));
        addToast('Контакт удален', {appearance: 'success'})
    }

    const editFromList = ({id, newText}) => {
        list.forEach((item, idx)=>{
            if (item.id === id){
                list[idx].name = newText
                addToast('Контакт изменен', {appearance: 'success'})
            }
        })
    }

    return (
        <div className={s.wrapper}>
            <AddBlock value={values.name} handleChange={handleChange} name={'name'} submit={submitListAdd}/>

            <div className={s.list}>
                {
                    list.map((item, idx) => {
                        return (
                            <ListBlock
                                item={item}
                                deleteFunc={deleteFromList}
                                editFunc={editFromList}
                                key={item.id + idx}
                            />
                        )
                    })
                }
            </div>

        </div>
    )
}

export default ListPage