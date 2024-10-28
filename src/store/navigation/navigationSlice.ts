import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface NavigationState {
  selectedPage: string;
}

const initialState: NavigationState = {
  selectedPage: "tournaments",
};

export const navigationSlice = createSlice({
  name: "navigation",
  initialState,
  reducers: {
    setSelectedPage: (state, action: PayloadAction<string>) => {
      state.selectedPage = action.payload;
    },
  },
});

export const { setSelectedPage } = navigationSlice.actions;
