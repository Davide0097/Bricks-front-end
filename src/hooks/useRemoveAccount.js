// Overview: Hook for removing the account

import { useUserContext } from './useUserContext'

// Sending stuff back end
export const useRemoveAccount = () => {

    const { dispatch, user } = useUserContext()

    const removeAccount = async () => {
        const response = await fetch('https://bricks-back-end.onrender.com/api/user/' + user.email, {
            method: 'DELETE',
            headers: {
                'Authorization': `application/json`
            }
        })
        const json = await response.json()

        if (response.ok) {

            //remove user from storage
            localStorage.removeItem('user')

            console.log(json)//dispatch logout action in the context
            dispatch({ type: 'LOGOUT' })
        }
    }

    return { removeAccount }
}