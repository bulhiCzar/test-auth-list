import './App.css';
import {useRotes} from "./src/routes"
import {useAuth} from "./src/hooks/auth.hooks";
import {AuthContext} from './src/context/AuthContext'
import {BrowserRouter} from "react-router-dom";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';
import {ToastProvider} from 'react-toast-notifications';
import Snack from "./src/toast/snake";
import NavBar from "./src/module/NavBar/NavBar";


const mainTheme = createMuiTheme({
    palette: {
        type: 'dark'
    },
});


function App() {
    const {login, logout, token, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRotes(isAuthenticated)

    if (!ready) {
        return (
            <>
                LOADING...
            </>
        )
    }

    return (
        <AuthContext.Provider value={{login, logout, token}}>
            <BrowserRouter>
                <ThemeProvider theme={mainTheme}>
                    <ToastProvider
                        autoDismiss
                        autoDismissTimeout={3000}
                        placement="bottom-center"
                        components={{Toast: Snack}}
                    >
                        {isAuthenticated && <NavBar/>}

                        {routes}

                    </ToastProvider>
                </ThemeProvider>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;
