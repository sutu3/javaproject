//import React from 'react'

import { useState } from "react";
import {  useSelector } from "react-redux";
import {
  AddRelative,
  DeteleRelative,
  FixRelative,
} from "../redux/RelativeSlice";
import Button1 from "../Button/Button1";
import Button2 from "../Button/Button2";
import Input from "../Input";
import { Relative, Employee, RemainngRelative } from "../redux/Selection";
const Index = () => {
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
        <Button1
          value="Thêm"
          value1={Them}
          arr={[setid, setname, setage, setidEmployee]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Xóa"
          value1={Xoa}
          arr={[setid, setname, setage, setidEmployee]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Sửa"
          value1={Sua}
          arr={[setid, setname, setage, setidEmployee]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
      </div>
      {Them && (
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-5">
          <Input
            option={name}
            setOption={setname}
            placeholder="Enter Your name Relative"
          />
          <Input
            option={age}
            setOption={setage}
            placeholder="Enter Your Age Relative"
          />
          {dsemployee}
          <Button2
            arr={[setage, setname, setidEmployee]}
            action={AddRelative}
            object={{ name: name, age: age, idEmployee: idEmployee }}
          />
        </div>
      )}
      {Xoa && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Relative"
          />
          <Button2 arr={[setid]} action={DeteleRelative} object={id} />
        </div>
      )}
      {Sua && (
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-10">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Relative"
          />
          <Input
            option={name}
            setOption={setname}
            placeholder="Enter Your name Relative"
          />
          <div className="flex gap-5">
            <Input
              option={age}
              setOption={setage}
              placeholder="Enter Your Age Relative"
            />
            {dsemployee}
          </div>
          <Button2
            arr={[setid, setage, setname, setidEmployee]}
            action={FixRelative}
            object={{ id: id, name: name, age: age, idEmployee: idEmployee }}
          />
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
