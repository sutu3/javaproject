//import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DepartmentSlice, {
  FixDepartment,
  AddDepartment,
  DeteleDepartment,
} from "../redux/Department";
import { Department } from "../redux/Selection.jsx";
const Index = () => {
  const department = useSelector(Department);
  const dispatch = useDispatch();
  const [Them, setthem] = useState(false);
  const [Xoa, setxoa] = useState(false);
  const [Sua, setsua] = useState(false);
  const [name, setname] = useState("");
  const [id, setid] = useState();
  return (
    <div
      className="w-full flex flex-col relative
    gap-5 border-2 border-black border-solid"
    >
      <h1>Department</h1>
      <div className="flex gap-5 w-full h-12 m-5">
        <button
          className="h-full w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          onClick={() => {
            setthem(!Them);
            setsua(false);
            setxoa(false);
            setid("");
            setname("");
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
            placeholder="Enter Your name Department"
          />
          <button
            onClick={() => {
              // dispatch(DepartmentSlice.actions.addDepartment({
              //   id:(department.length+1),
              //   name:name
              // }))
              dispatch(
                AddDepartment({
                  name: name,
                  employees: [],
                })
              );
              setname("");
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
            value={id}
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your ID Department"
          />
          <button
            onClick={() => {
              //dispatch(DepartmentSlice.actions.removeDepartment(id))
              console.log(id);
              dispatch(DeteleDepartment(id));
              setid("");
            }}
            className="h-10 w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          >
            submit
          </button>
        </div>
      )}
      {Sua && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <input
            value={id}
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your ID Department"
          />
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your name Department"
          />
          <button
            onClick={() => {
              dispatch(
                FixDepartment({
                  id: id,
                  name: name,
                })
              );
              console.log(id);
              setid("");
              setname("");
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
          {department.map((el) => (
            <li
              onClick={() => {
                setid(el.id);
                dispatch(DepartmentSlice.actions.changefilter(el.id));
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
              <div style={{ padding: "10px" }}>
                {" "}
                <span style={{ fontWeight: "bold", marginRight: "10px" }}>
                  Department name:
                </span>
                {el.name}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Index;
