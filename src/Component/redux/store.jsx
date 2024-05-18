import {configureStore} from '@reduxjs/toolkit'
import DepartmentSlice from './Department'
import EmployeeSlice from './EmployeeSlice'
import RelativeSlice from './RelativeSlice'
export const store=configureStore({
    reducer:{
        department:DepartmentSlice.reducer,
        employee:EmployeeSlice.reducer,
        relative:RelativeSlice.reducer
    }
})