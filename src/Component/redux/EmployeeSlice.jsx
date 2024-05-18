import {createSlice} from '@reduxjs/toolkit'
import RelativeSlice from './RelativeSlice'
const EmployeeSlice=createSlice({
    name:'employee',
    initialState:{
        employee:[]
    },
    reducers:{
        addEmployee:(state,action)=>{
            state.employee.push(action.payload);
        },
        removeEmployee:(state,action)=>{
            state.employee=state.employee.filter((el)=>el.id!==action.payload)
        },
        fixEmployee:(state,action)=>{
            state.employee=state.employee.map((el)=>el.id===parseInt(action.payload.id)?
            {...el,name:action.payload.name,IdDepartment:action.payload.IdDepartment}:el)
        },
    }
})
export const removeRelativebyEmployee=(id)=>{
    return function remove(dispatch,getState){
        getState().relative.relative.map((el)=>{
            parseInt(el.IDEmployee)===parseInt(id)?dispatch(RelativeSlice.actions.removeRelative(parseInt(el.id))):el
        })
        dispatch(EmployeeSlice.actions.removeEmployee(id))
    }
}
export default EmployeeSlice;