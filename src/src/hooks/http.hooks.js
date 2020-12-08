import {useCallback, useState} from "react";

export const useHttp = () => {
    const [loading, setLoading] = useState(false)
    const request = useCallback(async (url, method, body, headers={} ) => {
        try {

            body = JSON.stringify(body)
            headers['Content-Type'] = 'application/json'

            setLoading(true)
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()


            setLoading(false)
            return data
        } catch (e) {
            setLoading(false)
            throw e
        }
    }, [])

    return {request, loading}
}