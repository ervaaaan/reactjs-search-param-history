import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ThemeState } from "../types/theme";
import { getTheme } from "../utils";

const initialState: ThemeState = {
  value: getTheme(),
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<"light" | "dark">) => {
      state.value = action.payload;
    },
  },
});

export const { set } = themeSlice.actions;

export default themeSlice.reducer;
