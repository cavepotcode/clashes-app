import { createSlice } from "@reduxjs/toolkit";
import { Tournament } from "../../types";

interface TournamentState {
  tournaments: Tournament[];
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: TournamentState = {
  tournaments: [],
  isLoading: false,
  errorMessage: undefined,
};

export const tournamentsSlice = createSlice({
  name: "tournaments",
  initialState,
  reducers: {
    startLoadingTournaments: (state) => {
      state.isLoading = true;
    },
    setTournaments: (state, { payload }) => {
      state.isLoading = false;
      state.tournaments = payload;
    },
    setTournamentsError: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { startLoadingTournaments, setTournaments, setTournamentsError } = tournamentsSlice.actions;
