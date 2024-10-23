import { createSlice } from "@reduxjs/toolkit";
import { Tenant } from "../../types";

interface TenantsState {
  tenants: Tenant[];
  isLoading: boolean;
  errorMessage?: string;
}

const initialState: TenantsState = {
  tenants: [],
  isLoading: false,
  errorMessage: undefined,
};

export const tenantsSlice = createSlice({
  name: "tenants",
  initialState,
  reducers: {
    startLoadingTenants: (state) => {
      state.isLoading = true;
    },
    setTenants: (state, { payload }) => {
      state.isLoading = false;
      state.tenants = payload;
    },
    setTenantsError: (state, { payload }) => {
      state.isLoading = false;
      state.errorMessage = payload;
    },
  },
});

export const { startLoadingTenants, setTenants, setTenantsError } = tenantsSlice.actions;
