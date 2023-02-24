// Overview: Hook for using Signup

import { useState } from 'react'
import { useUserContext } from '../hooks/useUserContext'

export const useSignup = () => {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const { dispatch } = useUserContext()

    const signup = async (email, password, blogname) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch('https://bricks-back-end.onrender.com/api/user/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password, blogname })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)

        }
        if (response.ok) {

            //saving info in the local storage
            localStorage.setItem('user', JSON.stringify(json))

            //Update the user context
            dispatch({ type: 'LOGIN', payload: json })
            setIsLoading(false)
        }
    }
    return { signup, isLoading, error }
}