//import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Department, RemainngEmployee } from "../redux/Selection";
import {
  AddEmployee,
  Deteleemployee,
  FixEmployee,
} from "../redux/EmployeeSlice";
const Index = () => {
  const Employee1 = useSelector(RemainngEmployee);
  // console.log(Employee2)
  // const Employee1=useSelector(Employee)
  const dispatch = useDispatch();
  const department = useSelector(Department);
  const [Them, setthem] = useState(false);
  const [Xoa, setxoa] = useState(false);
  const [Sua, setsua] = useState(false);
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [idDepartment, setIdDepartment] = useState("");
  const dsdepartment = (
    <select
      onChange={(e) => {
        setIdDepartment(e.target.value);
      }}
      className="w-40 p-2 h-10 border-2 border-black border-solid
           overflow-scroll rounded-lg"
    >
      {department.length != 0 && <option value=""> --chọn department--</option>}
      {department.map((el) => (
        <option value={el.id} key={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
  return (
    <div className="w-full flex flex-col gap-5 gap-5 border-2 border-black border-solid">
      <h1>Employee</h1>
      <div className="flex gap-5 w-full h-12  m-5">
        <button
          className="h-full w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          onClick={() => {
            setthem(!Them);
            setsua(false);
            setxoa(false);
            setid("");
            setname("");
            setIdDepartment("");
          }}
        >
          Thêm
        </button>
        <button
          className="h-full w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          onClick={() => {
            setxoa(!Xoa);
            setthem(false);
            setsua(false);
            setid("");
            setname("");
            setIdDepartment("");
          }}
        >
          Xóa
        </button>
        <button
          className="h-full w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          onClick={() => {
            setsua(!Sua);
            setthem(false);
            setxoa(false);
            setid("");
            setname("");
            setIdDepartment("");
          }}
        >
          Sửa
        </button>
      </div>
      {Them && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your name Employee"
          />
          {dsdepartment}

          <button
            onClick={() => {
              // dispatch(EmployeeSlice.actions.addEmployee({
              //   id:Employee1.length+1,
              //   name:name,
              //   idDepartment:idDepartment
              // }))
              dispatch(
                AddEmployee({
                  name: name,
                  idDepartment: idDepartment,
                  relatives: [],
                })
              );
              setname("");
              setIdDepartment("");
            }}
            className="h-10 w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          >
            submit
          </button>
        </div>
      )}
      {Xoa && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <input
            type="text"
            value={id}
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your ID Employee"
          />

          <button
            onClick={() => {
              dispatch(Deteleemployee(parseInt(id)));
              setid("");
              setIdDepartment("");
            }}
            className="h-10 w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          >
            submit
          </button>
        </div>
      )}
      {Sua && (
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-5">
          <input
            value={id}
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your ID Employee"
          />
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your name Employee"
          />
          {dsdepartment}
          <button
            onClick={() => {
              dispatch(
                FixEmployee({
                  id: id,
                  name: name,
                  IdDepartment: idDepartment,
                })
              );
              setid("");
              setname("");
              setIdDepartment("");
            }}
            className="h-10 w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          >
            submit
          </button>
        </div>
      )}
      <div className=" translate-y-20">
        <ul
          style={{
            height: "500px",
            overflow: "scroll",
            gap: "30px",
            border: "2px solid black",
          }}
        >
          {Employee1.map((el) => (
            <li
              onClick={() => {
                setid(el.id);
              }}
              key={el.id}
              style={{
                display: "flex",
                gap: "30px",
                marginBottom: "10px",
                border: "2px solid black",
                width: "400px",
                margin: "auto",
                height: "80px",
                borderRadius: "5px",
                textAlign: "left",
              }}
            >
              <div
                style={{ padding: "10px", flexDirection: "col" }}
                className="flex flex-col"
              >
                <span style={{ fontWeight: "bold" }}>
                  Employee name: {el.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
