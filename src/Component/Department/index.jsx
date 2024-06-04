//import React from 'react'

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Input/index.jsx";
import Button1 from "../Button/Button1.jsx";
import Button2 from "../Button/Button2.jsx";
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
        <Button1
          value="Thêm"
          value1={Them}
          arr={[setid, setname]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Xóa"
          value1={Xoa}
          arr={[setid, setname]}
          setthem={setthem}
          setxoa={setxoa}
          setsua={setsua}
        />
        <Button1
          value="Sửa"
          value1={Sua}
          arr={[setid, setname]}
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
            placeholder="Enter Your name Department"
          />
          <Button2
            action={AddDepartment}
            arr={[setname]}
            object={{ name: name, employees: [] }}
          />
        </div>
      )}
      {Xoa && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Department"
          />
          <Button2 action={DeteleDepartment} arr={[setid]} object={id} />
        </div>
      )}
      {Sua && (
        <div className="flex flex-col gap-5 h-20 m-5">
          <Input
            option={id}
            setOption={setid}
            placeholder="Enter Your ID Department"
          />
          <Input
            option={name}
            setOption={setname}
            placeholder="Enter Your name Department"
          />
          <Button2
            action={FixDepartment}
            arr={[setid, setname]}
            object={{ id: id, name: name }}
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
