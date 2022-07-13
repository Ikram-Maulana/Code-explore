import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await axios.get(
      "https://623b066b2e056d1037ebba0e.mockapi.io/users"
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const saveUser = createAsyncThunk("users/saveUser", async (value) => {
  try {
    const response = await axios.post(
      "https://623b066b2e056d1037ebba0e.mockapi.io/users",
      {
        ...value,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  try {
    await axios.delete(
      `https://623b066b2e056d1037ebba0e.mockapi.io/users/${id}`
    );
    return id;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (value) => {
    try {
      const response = await axios.put(
        `https://623b066b2e056d1037ebba0e.mockapi.io/users/${value.id}`,
        {
          name: value.name,
          email: value.email,
        }
      );
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const usersEntity = createEntityAdapter({
  selectId: (user) => user.id,
});

const userSlice = createSlice({
  name: "user",
  initialState: usersEntity.getInitialState(),
  extraReducers: {
    [getUsers.fulfilled]: (state, action) => {
      usersEntity.setAll(state, action.payload);
    },
    [saveUser.fulfilled]: (state, action) => {
      usersEntity.addOne(state, action.payload);
    },
    [deleteUser.fulfilled]: (state, action) => {
      usersEntity.removeOne(state, action.payload);
    },
    [updateUser.fulfilled]: (state, action) => {
      usersEntity.updateOne(state, {
        id: action.payload.id,
        updates: action.payload,
      });
    },
  },
});

export const usersSelector = usersEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
