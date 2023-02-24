// Overview: Hook for using the user context

import { UserContext } from "../context/userContext";

import { useContext } from 'react'

export const useUserContext = () => {
   const context = useContext(UserContext)

   if (!context) {
      throw Error("Cannot access the context for user")
   }

   return context
}