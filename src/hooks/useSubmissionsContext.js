// Overview: Hook for using Submissions context

import { SubmissionsContext } from "../context/submissionsContext";

import { useContext } from 'react'

export const useSubmissionsContext = () => {
   const context = useContext(SubmissionsContext)

   if (!context) {
      throw Error("Cannot access the context for submissions")
   }

   return context
}