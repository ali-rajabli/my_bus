import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import pageSlice from "./reducers/pageSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      pagesData: pageSlice,
    },
  });

export const wrapper = createWrapper(makeStore, { debug: true });
