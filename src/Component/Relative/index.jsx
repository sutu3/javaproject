//import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {AddRelative,DeteleRelative,FixRelative} from "../redux/RelativeSlice";
import { Relative, Employee, RemainngRelative } from "../redux/Selection";
const Index = () => {
  const dispatch = useDispatch();
  const relative1 = useSelector(Relative);
  const relative = useSelector(RemainngRelative);
  console.log(relative1);
  const employee = useSelector(Employee);
  const [Them, setthem] = useState(false);
  const [Xoa, setxoa] = useState(false);
  const [Sua, setsua] = useState(false);
  const [id, setid] = useState("");
  const [idEmployee, setidEmployee] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const dsemployee = (
    <select 
      onChange={(e) => {
        setidEmployee(e.target.value);
      }}
      className="w-40 p-2 h-10 border-2 border-black border-solid
           overflow-scroll rounded-lg"
    >
      {employee.length != 0 && <option value=""> --chọn Employee--</option>}
      {employee.map((el) => (
        <option value={el.id} key={el.id}>
          {el.name}
        </option>
      ))}
    </select>
  );
  return (
    <div className="w-full flex flex-col gap-5 gap-5 border-2 border-black border-solid">
      <h1>Relative</h1>
      <div className="flex gap-5 w-full h-12  m-5">
        <button
          className="h-full w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
          onClick={() => {
            setthem(!Them);
            setsua(false);
            setxoa(false);
            setage("");
            setname("");
            setidEmployee("");
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
            setage("");
            setname("");
            setid("");
            setidEmployee("");
          }}
        >
          Sửa
        </button>
      </div>
      {Them && (
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-5">
          <input
            value={name}
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your name Relative"
          />
          <input
            value={age}
            type="text"
            onChange={(e) => {
              setage(parseInt(e.target.value));
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your Age Relative"
          />
          {dsemployee}
          <button
            onClick={() => {
              console.log(idEmployee)
              dispatch(
                AddRelative({
                  name: name,
                  age: age,
                  idEmployee: idEmployee,
                })
              );
              setage("");
              setname("");
              setidEmployee("");
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
            placeholder="Enter Your ID Relative"
          />
          <button
            onClick={() => {
              console.log(typeof id);
              dispatch(DeteleRelative(id));
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
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-10">
          <input
          value={id}
            type="text"
            onChange={(e) => {
              setid(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your ID Relative"
          />
          <input value={name}
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
            placeholder="Enter Your name Relative"
          />
          <div className="flex gap-5">
            <input value={age}
              type="text"
              onChange={(e) => {
                setage(parseInt(e.target.value));
              }}
              className="border-black border-2 border-solid w-60 h-10 p-3 rounded-md"
              placeholder="Enter Your Age Relative"
            />
            {dsemployee}
          </div>

          <button
            onClick={() => {
              dispatch(
                FixRelative({
                  id: id,
                  name: name,
                  age: age,
                  idEmployee: idEmployee,
                })
              );
              setid("");
              setname("");
              setage("");
              setidEmployee("");
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
          {relative.map((el) => (
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
                {" "}
                <span style={{ fontWeight: "bold" }}>
                  Relative name: {el.name}
                </span>
                <span style={{ fontWeight: "bold" }}>
                  Relative Age: {el.age}
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
