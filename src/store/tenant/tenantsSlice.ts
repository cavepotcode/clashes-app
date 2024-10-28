import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tenant } from "../../types";

interface TenantsState {
  tenants: Tenant[];
  isLoading: boolean;
  errorMessage?: string;
  selectedTenant?: Tenant;
}

const initialState: TenantsState = {
  tenants: [],
  isLoading: false,
  errorMessage: undefined,
  selectedTenant: undefined,
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
    setSelectedTenant: (state, action: PayloadAction<Tenant>) => {
      state.selectedTenant = action.payload;
    },
  },
});

export const { startLoadingTenants, setTenants, setTenantsError, setSelectedTenant } = tenantsSlice.actions;
