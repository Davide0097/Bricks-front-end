// Overview: Hook for using logout

import { useUserContext } from './useUserContext'

export const useLogout = () => {

    const { dispatch } = useUserContext()

    const logout = () => {

        //remove user from storage
        localStorage.removeItem('user')

        //dispatch logout action
        dispatch({ type: 'LOGOUT' })
    }

    return { logout }
}