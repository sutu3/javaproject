import {createSlice} from '@reduxjs/toolkit'
const RelativeSlice=createSlice({
    name: 'relative',
    initialState:{
        relative:[]
    },
    reducers:{
        addRelative:(state,action)=>{
            state.relative.push(action.payload);
        },
        removeRelative:(state,action)=>{
            state.relative=state.relative.filter((el)=>el.id!==parseInt(action.payload));
        },
        fixRelative:(state,action)=>{
            state.relative=state.relative.map((el)=>
            el.id===parseInt(action.payload.id)?
            {...el,name:action.payload.name,age:action.payload.age,IDEmployee:action.payload.IDEmployee}
            :el
            )
        }
    }
})
export default RelativeSlice