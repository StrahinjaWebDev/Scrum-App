import { configureStore } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";
import { useSelector } from "react-redux";
import boardsReducer from "./slices/board-slice";
import userDataReducer from "./slices/userData-slice";
import { boardsApi } from "./api/boards-api";
import { userDataApi } from "./api/user-api";

export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    [boardsApi.reducerPath]: boardsApi.reducer,
    boards: boardsReducer,
    userData: userDataReducer,
  },

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      boardsApi.middleware,
      userDataApi.middleware
    );
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
