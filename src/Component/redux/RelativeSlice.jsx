import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const url = "http://26.232.136.42:8080/api/relative";
const RelativeSlice = createSlice({
  name: "relative",
  initialState: {
    relative: [],
  },
  reducers: {
    addRelative: (state, action) => {
      state.relative.push(action.payload);
    },
    removeRelative: (state, action) => {
      state.relative = state.relative.filter(
        (el) => el.id !== parseInt(action.payload)
      );
    },
    fixRelative: (state, action) => {
      state.relative = state.relative.map((el) =>
        el.id === parseInt(action.payload.id)
          ? {
              ...el,
              name: action.payload.name,
              age: action.payload.age,
              idEmployee: action.payload.idEmployee,
            }
          : el
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(FetchRelative.fulfilled, (state, action) => {
        console.log(action.payload);
        state.relative = action.payload;
      })
      .addCase(AddRelative.fulfilled, (state, action) => {
        console.log(action.payload);
        state.relative.push(action.payload);
      })
      .addCase(DeteleRelative.fulfilled, (state, action) => {
        state.relative = state.relative.filter(
          (el) => el.id !== parseInt(action.payload)
        );
      })
      .addCase(FixRelative.fulfilled, (state, action) => {
        state.relative = state.relative.map((el) =>
          el.id === parseInt(action.payload.id)
            ? {
                ...el,
                name: action.payload.name,
                age: action.payload.age,
                idEmployee: action.payload.idEmployee,
              }
            : el
        );
      });
  },
});
export const FetchRelative = createAsyncThunk(
  "relative/FetchRelative",
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
export const AddRelative = createAsyncThunk(
  "relative/AddRelative",
  async (data1) => {
    console.log(data1);
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
export const DeteleRelative = createAsyncThunk(
  "relative/DeteleRelative",
  async (data1) => {
    const res = await fetch(`${url}/delete/${data1}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data1),
    });
    const data = await res.json();
    return data;
  }
);
export const FixRelative = createAsyncThunk(
  "relative/FixRelative",
  async (data1) => {
    console.log(data1);
    const res = await fetch(`${url}/update/${data1.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data1.name,
        age: data1.age,
        idEmployee: data1.idEmployee,
      }),
    });
    const data = await res.json();
    return data;
  }
);
export default RelativeSlice;
