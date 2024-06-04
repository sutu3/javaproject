//import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Department, RemainngEmployee } from "../redux/Selection";
import Button1 from "../Button/Button1";
import Button2 from "../Button/Button2";
import Input from "../Input";
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
        <Button1
          value="Thêm"
          value1={Them}
          arr={[setid, setname, setIdDepartment]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Xóa"
          value1={Xoa}
          arr={[setid, setname, setIdDepartment]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Sửa"
          value1={Sua}
          arr={[setid, setname, setIdDepartment]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
      </div>
      {Them && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <Input
            option={name}
            setOption={setname}
            placeholder="Enter Your name Employee"
          />
          {dsdepartment}
          <Button2
            arr={[setIdDepartment, setname]}
            action={AddEmployee}
            object={{ name: name, idDepartment: idDepartment, relatives: [] }}
          />
        </div>
      )}
      {Xoa && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Employee"
          />
          <Button2
            arr={[setid, setIdDepartment]}
            action={Deteleemployee}
            object={id}
          />
        </div>
      )}
      {Sua && (
        <div className="flex flex-col gap-5 h-20 m-5 -translate-y-5">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Employee"
          />
          <Input
            option={name}
            setOption={setname}
            placeholder="Enter Your ID Employee"
          />
          {dsdepartment}
          <Button2
            arr={[setid, setname, setIdDepartment]}
            action={FixEmployee}
            object={{ id: id, name: name, IdDepartment: idDepartment }}
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
