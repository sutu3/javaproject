//import React from 'react'
import { useDispatch } from "react-redux";
const Button2 = ({ object, action, arr }) => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(action(object));
        arr.map((el) => el(""));
      }}
      className="h-10 w-32 border-black uppercase border-2 hover:font-bold
          border-solid rounded-lg active:bg-slate-600 active:text-white"
    >
      submit
    </button>
  );
};

export default Button2;
