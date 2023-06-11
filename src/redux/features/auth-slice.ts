import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  value: AuthState;
}

export interface AuthState {
  isAuth: boolean;
  username: string;
  uid: string;
  isModerator: boolean;
}

const initialState = {
  value: {
    isAuth: false,
    username: "dada",
    uid: "",
    isModerator: false,
  } as AuthState,
} as initialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: () => {
      return initialState;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
