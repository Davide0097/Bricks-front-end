// Overview: creating the context for submissions

import { createContext, useReducer } from 'react'

//Creo context
export const SubmissionsContext = createContext()


export const submissionsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_SUBMISSIONS':
            return {
                submissions: action.payload
            }
        case 'CREATE_SUBMISSION':
            return {
                submissions: [action.payload, ...state.submissions]
            }

        default:
            return state
    }
}

export const SubmissionsContextProvider = ({ children }) => {
    const [state, dispatch2] = useReducer(submissionsReducer, {
        submissions: null
    })

    return (
        <SubmissionsContext.Provider value={{ ...state, dispatch2 }}>
            {children}
        </SubmissionsContext.Provider>

    )
}