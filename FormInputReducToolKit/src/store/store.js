import { configureStore } from '@reduxjs/toolkit'
import formReducer from "../features/formData/formSlice.js"

export const store = configureStore({
  reducer: {
    form:formReducer
  },
})


export  default store