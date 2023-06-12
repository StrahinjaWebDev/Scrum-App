import type { User } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialUserDataState: User = {
  id: "",
  name: "",
  image: "",
  Workspace: {
    id: "",
    name: "",
  },
} as User;

export const userDataSlice = createSlice({
  name: "userData",
  initialState: initialUserDataState,
  reducers: {
    setUserData: (state, action) => {
      return action.payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
