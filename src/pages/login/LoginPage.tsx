import { FC, FormEvent, useEffect } from "react";
import Swal from 'sweetalert2'
import logo from "../../assets/logo.png";
import { useAuthStore, useForm } from "../../hooks";

const loginFormFields = {
  loginUsername: '',
  loginPassword: ''
}

export const LoginPage: FC = () => {
  const { startLogin, errorMessage } = useAuthStore();

  const { loginUsername, loginPassword, onInputChange } = useForm( loginFormFields );

  const loginSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    startLogin({username: loginUsername, password: loginPassword});
  }

  useEffect(() => {
    if (errorMessage && errorMessage !== 'Token expired') {
      Swal.fire('Error en la autenticación', errorMessage, 'error');
    }

  }, [errorMessage])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md mx-3">
        <div className="flex justify-center items-center mb-5">
          <img src={logo} alt="logo" />
        </div>
        <form onSubmit={loginSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Usuario
            </label>
            <input
              type="text"
              name="loginUsername"
              value={loginUsername}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#16E8E1] sm:text-sm"
              placeholder="Ingresa tu usuario"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <input
              type="password"
              name="loginPassword"
              value={loginPassword}
              onChange={onInputChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-[#16E8E1] sm:text-sm"
              placeholder="Ingresa tu contraseña"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#16E8E1] hover:bg-black text-white font-bold rounded-md focus:outline-none"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
