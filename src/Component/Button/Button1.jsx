//import React from 'react';

const Button1 = ({ value, value1,arr, setthem, setxoa, setsua }) => {
  return (
    <button
      className="h-full w-32 border-black uppercase border-2 hover:font-bold border-solid rounded-lg active:bg-slate-600 active:text-white"
      onClick={() => {
        if (value === "Thêm") {
          setthem(!value1);
          setxoa(false);
          setsua(false);
        } else if (value === "Xóa") {
          setthem(false);
          setxoa(!value1);
          setsua(false);
        } else {
          setthem(false);
          setxoa(false);
          setsua(!value1);
        }
        arr.map((el)=>el(""))
      }}
    >
      {value}
    </button>
  );
}

export default Button1;