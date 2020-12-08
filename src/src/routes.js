import {Switch, Route, Redirect} from 'react-router-dom'
import ListPage from "./pages/ListPage/ListPage";
import AuthPage from "./pages/AuthPage/AuthPage";


export const useRotes = (isAuth) => {

    if (isAuth) {
        return (
            <Switch>
                <Route path='/list' exact>
                    <ListPage/>
                </Route>
                <Redirect to='/list'/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path='/auth'>
                <AuthPage/>
            </Route>
            <Redirect to='/auth'/>
        </Switch>
    )
}