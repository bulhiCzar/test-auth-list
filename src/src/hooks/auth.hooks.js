import {useCallback, useEffect, useState} from "react";

const storageGlobal = 'hold'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(null)


    const login = useCallback((token) => {
        setToken(token)

        localStorage.setItem(storageGlobal, JSON.stringify(token))
    }, [])

    const logout = useCallback(() => {
        setToken(null)

        localStorage.removeItem(storageGlobal)
    }, [])


    useEffect(() => {
        const tokenjson = localStorage.getItem(storageGlobal)
        const token = JSON.parse(tokenjson)

        if (token) {
            login({token})
        }

        setReady(true)

    }, [login])


    return {login, logout, token, ready}
}