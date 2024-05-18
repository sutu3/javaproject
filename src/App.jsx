
import { useEffect } from 'react'
import './App.css'
import Department from './Component/Department/index.jsx'
import Employee from './Component/Employee/index.jsx'
import Relative from './Component/Relative/index'
import {useDispatch} from 'react-redux'
import {FetchDepartment} from './Component/redux/Department.jsx'
function App() {
  const dipatch=useDispatch()
useEffect(()=>{
dipatch(FetchDepartment())
},[])
  return (
    <div className="flex gap-3 h-[1000px] -translate-x-20">
      <Department/>
      <Employee/>
      <Relative/>
    </div>
  )
}

export default App
