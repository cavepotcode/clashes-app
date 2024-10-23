import { useDispatch, useSelector } from "react-redux";
import {
  startLoadingTenants,
  setTenants,
  setTenantsError,
  RootState,
  AppDispatch,
} from "../store";
import { Tenant } from "../types";
import { clashesApi } from "../api";

export const useTenantsStore = () => {
  const { tenants, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.tenants
  ) as {
    tenants: Tenant[];
    isLoading: boolean;
    errorMessage?: string;
  };

  const dispatch: AppDispatch = useDispatch();

  const getTenants = async () => {
    dispatch(startLoadingTenants());
    try {
      const response = await clashesApi.get("/tenant/user-tenant");
      dispatch(setTenants(response.data.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setTenantsError(error.message));
      } else {
        dispatch(setTenantsError("Error al obtener los tenants"));
      }
    }
  };

  return {
    tenants,
    isLoading,
    errorMessage,
    getTenants,
  };
};
