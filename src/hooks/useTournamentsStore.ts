import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
  setTournaments,
  setTournamentsError,
  startLoadingTournaments,
} from "../store";
import { clashesApi } from "../api";
import { useEffect } from "react";

export const useTournamentsStore = () => {
  const { tournaments, isLoading, errorMessage } = useSelector(
    (state: RootState) => state.tournaments
  );
  const { selectedTenant } = useSelector((state: RootState) => state.tenants);
  const dispatch: AppDispatch = useDispatch();

  const getTournaments = async () => {
    if (!selectedTenant) return;

    dispatch(startLoadingTournaments());
    try {
      const response = await clashesApi.get("/tournament", {
        headers: {
          tenant: selectedTenant.name,
        },
    });
      dispatch(setTournaments(response.data.data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setTournamentsError(error.message));
      } else {
        dispatch(setTournamentsError("Error al obtener los torneos"));
      }
    }
  };

  useEffect(() => {
    getTournaments();
  }, [selectedTenant]);

  return {
    tournaments,
    isLoading,
    errorMessage,
    getTournaments,
  };
};
