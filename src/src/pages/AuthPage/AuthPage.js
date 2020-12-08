import s from './AuthPage.module.css'
import InputPassword from "../../module/InputModule/InputPassword";
import InputText from "../../module/InputModule/InputText";
import {useContext, useState} from "react";
import Button from "@material-ui/core/Button";
import {useHttp} from "../../hooks/http.hooks";
import {useToasts} from "react-toast-notifications";
import {AuthContext} from "../../context/AuthContext";

const AuthPage = () => {
    const [values, setValues] = useState({
        login: '',
        password: '',
        showPassword: false,
    })
    const {request} = useHttp()
    const {login} = useContext(AuthContext)
    const {addToast} = useToasts()


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value})
    }

    const submitForm = async (e) => {
        e.preventDefault()
        const body = {
            login: values.login,
            password: values.password
        }
        const res = await request('https://classtable.herokuapp.com/api/auth/login', 'POST', body)
        if (res.tokenAuth){
            login(res.tokenAuth)
        }
        addToast(res.m, { appearance: res.type })
    }

    return (
        <div className={s.wrapper}>
            <div className={s.block}>
                <div className={s.title}>Вход</div>
                <form onSubmit={submitForm} className={s.body}>
                    <InputText
                        sName={s.inputItem}
                        value={values.login}
                        handleChange={handleChange}
                        label={'Логин'}
                        name={'login'}
                    />
                    <InputPassword
                        sName={s.inputItem}
                        values={values}
                        setValues={setValues}
                        handleChange={handleChange}
                    />
                    <Button
                        className={s.inputItem}
                        type={'submit'}
                        variant="contained"
                        color="default"
                        disableElevation
                    >
                        Войти
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default AuthPage