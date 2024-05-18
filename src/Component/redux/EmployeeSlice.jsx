import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RelativeSlice from "./RelativeSlice";
const url = "http://26.232.136.42:8080/api/employee";
const EmployeeSlice = createSlice({
  name: "employee",
  initialState: {
    employee: [],
  },
  reducers: {
    addEmployee: (state, action) => {
      state.employee.push(action.payload);
    },
    removeEmployee: (state, action) => {
      state.employee = state.employee.filter((el) => el.id !== action.payload);
    },
    fixEmployee: (state, action) => {
      state.employee = state.employee.map((el) =>
        el.id === parseInt(action.payload.id)
          ? {
              ...el,
              name: action.payload.name,
              IdDepartment: action.payload.IdDepartment,
            }
          : el
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchEmployee.fulfilled, (state, action) => {
        state.employee = action.payload;
        console.log(action.payload);
      })
      .addCase(AddEmployee.fulfilled, (state, action) => {
        state.employee.push(action.payload);
      })
      .addCase(Deteleemployee.fulfilled, (state, action) => {
         state.employee = state.employee.filter((el) => el.id !== action.payload);
      })
      .addCase(FixEmployee.fulfilled, (state, action) => {
        state.employee = state.employee.map((el) =>
        el.id === parseInt(action.payload.id)
          ? {
              ...el,
              name: action.payload.name,
              IdDepartment: action.payload.IdDepartment,
            }
          : el
      );
      });
  },
});
export const removeRelativebyEmployee = (id) => {
  return function remove(dispatch, getState) {
    getState().relative.relative.map((el) => {
      parseInt(el.IDEmployee) === parseInt(id)
        ? dispatch(RelativeSlice.actions.removeRelative(parseInt(el.id)))
        : el;
    });
    dispatch(EmployeeSlice.actions.removeEmployee(id));
  };
};
export const FetchEmployee = createAsyncThunk(
  "employee/FetchEmployee",
  async () => {
    const res = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    return data;
  }
);
export const AddEmployee = createAsyncThunk(
  "employee/AddEmployee",
  async (data1) => {
    const res = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    const data = await res.json();
    return data;
  }
);
export const Deteleemployee = createAsyncThunk(
  "employee/Deteleemployee",
  async (data1, { dispatch, getState }) => {
    const res = await fetch(`${url}/delete/${data1}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    const data = await res.json();
    getState().relative.relative.map((el) => {
      parseInt(el.IDEmployee) === parseInt(data1)
        ? dispatch(RelativeSlice.actions.removeRelative(parseInt(el.id)))
        : el;
    });
    return data;
  }
);
export const FixEmployee = createAsyncThunk(
  "employee/FixEmployee",
  async (data1) => {
    console.log(data1);
    const res = await fetch(`${url}/update/${data1.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name:data1.name,
        idDepartment:data1.IdDepartment,
      }),
      
    });
    const data = await res.json();
    return data;
  }
);
export default EmployeeSlice;
