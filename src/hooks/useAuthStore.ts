import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  onChecking,
  onLogin,
  onLogout,
  RootState,
  clearErrorMessage,
} from "../store";
import { clashesApi } from "../api";
import { User } from "../types";

interface LoginCredentials {
  username: string;
  password: string;
}

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(
    (state: RootState) => state.auth
  ) as {
    status: string;
    user: User | null;
    errorMessage: string | undefined;
  };
  const dispatch: AppDispatch = useDispatch();

  const startLogin = async ({ username, password }: LoginCredentials) => {
    dispatch(onChecking());
    try {
      const response = await clashesApi.post("/user/login", {
        username,
        password
      });
      const { data } = response.data;
      localStorage.setItem("token", data.token);
      dispatch(onLogin({ name: data.user.name, role: data.user.role, email: data.user.email }));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(onLogout(error.message || "Credenciales incorrectas"));
      } else {
        dispatch(onLogout("Credenciales incorrectas"));
      }

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(onLogout("Token expired"));
      return;
    }
    try {
      const resp = await clashesApi.get("/user/profile"); //podriamos meter un endpoint de renew
      const { data } = resp.data;
      dispatch(onLogin({ name: data.name, email: data.email, role: data.role }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogout(""));
    }
  };

  const startLogout = async () => {
    localStorage.clear();
    dispatch(onLogout(""));
  };

  return {
    status,
    user,
    errorMessage,

    startLogin,
    checkAuthToken,
    startLogout,
  };
};
