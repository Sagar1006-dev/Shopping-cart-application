// store.js

import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: userReducer
})