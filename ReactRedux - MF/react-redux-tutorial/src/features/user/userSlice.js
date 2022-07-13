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
  },
});

export const usersSelector = usersEntity.getSelectors((state) => state.user);
export default userSlice.reducer;
