// Overview: Hook for using login

// Use state
import { useState } from 'react'

// User context
import { useUserContext } from '../hooks/useUserContext'


export const useLogin = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()

    const login = async (email, password) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://bricks-back-end.onrender.com/api/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)

        }
        if (response.ok) {

            //saving info
            localStorage.setItem('user', JSON.stringify(json))

            //update the auth context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }

    return { login, isLoading, error }
}