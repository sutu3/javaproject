const url = "http://26.232.136.42:8080/api/department";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import EmployeeSlice,{removeRelativebyEmployee} from "./EmployeeSlice";
import RelativeSlice from "./RelativeSlice";
const DepartmentSlice = createSlice({
  name: "department",
  initialState: {
    filterid: "",
    department: [],
  },
  reducers: {
    addDepartment: (state, action) => {
      state.department.push(action.payload);
    },
    removeDepartment: (state, action) => {
      console.log(state.employee);
      state.department = state.department.filter(
        (el) => el.id !== action.payload
      );
    },
    fixDepartment: (state, action) => {
      state.department = state.department.map((el) =>
        el.id === parseInt(action.payload.id)
          ? { ...el, name: action.payload.name }
          : el
      );
      console.log(state.department); // In ra state sau khi cập nhật
    },
    changefilter: (state, action) => {
      state.filterid === action.payload
        ? (state.filterid = "")
        : (state.filterid = action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
    // .addCase(ChangeFilter.fulfilled,(state, action) => {
    // })
      .addCase(FetchDepartment.fulfilled, (state, action) => {
        state.department = action.payload;
      })
      .addCase(AddDepartment.fulfilled, (state, action) => {
        console.log(action.payload);
        state.department.push(action.payload);
      })
      .addCase(DeteleDepartment.fulfilled, (state, action) => {
        state.department = state.department.filter(
          (el) => el.id !== action.payload
        );
      })
      .addCase(FixDepartment.fulfilled, (state, action) => {
        state.department = state.department.map((el) =>
          el.id === parseInt(action.payload.id)
            ? { ...el, name: action.payload.name }
            : el
        );
      });
  },
});
export const removeEmployeebyDepartment = (id) => {
  return function remove(dispatch, getState) {
    console.log(getState());
    getState().employee.employee.map((el) => {
      parseInt(el.idDepartment) === parseInt(id)
        ? dispatch(EmployeeSlice.actions.removeEmployee(parseInt(el.id)))
        : el;
    });
    dispatch(DepartmentSlice.actions.removeDepartment(id));
  };
};
export const FetchDepartment = createAsyncThunk(
  "department/FetchDepartment",
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
export const AddDepartment = createAsyncThunk(
  "department/AddDepartment",
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
export const DeteleDepartment = createAsyncThunk(
  "department/DeteleDepartment",
  async (data1, { dispatch, getState }) => {
    //http://localhost:8080/api/department//{truyền
    const res = await fetch(`${url}/deleteall/${data1}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    const data = await res.json();
    getState().employee.employee.map((el) => {
      parseInt(el.idDepartment) === parseInt(data)
        ? dispatch(removeRelativebyEmployee(parseInt(el.id))): el;
    });
    return data;
  }
);
export const FixDepartment = createAsyncThunk(
  "department/FixDepartment",
  async (data1) => {
    const res = await fetch(`${url}/update/${data1.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data1.name,
        employees: [],
      }),
    });
    const data = await res.json();
    return data;
  }
);
export const ChangeFilter = createAsyncThunk(
  'department/changeFilter',
  async (data,{getState,dispatch}) => {
    // Perform your asynchronous operations here (e.g., API calls)
    // ...
    await dispatch(DepartmentSlice.actions.changefilter(data))
    await dispatch(EmployeeSlice.actions.changefilter(data))
    await dispatch(RelativeSlice.actions.changefilter(data))
    console.log(getState())
    return data; 
  }
);
export default DepartmentSlice;
