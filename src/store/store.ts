import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./features/modal/modalSlice";
import membersReducer from "./features/members/membersSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    members: membersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
