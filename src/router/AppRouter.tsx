import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login/LoginPage";
import { AdminDashboard } from "../pages/admin/AdminDashboard";
import { Home } from "../pages/home/Home";
import { Header, Sidebar } from "../components";
import { useEffect, useState } from "react";
import { useAuthStore } from "../hooks";
import { Footer } from "../components/footer/Footer";

export const AppRouter = () => {
  const [isBlurred, setIsBlurred] = useState(false);
  const { status, checkAuthToken } = useAuthStore();

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === "checking") {
    return (
      <div className="flex items-center justify-center h-screen w-screen">
        <div
          className="inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-[#16E8E1] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        ></div>
      </div>
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          
          <div className="h-screen">
            <Header setBlur={setIsBlurred} rightContentType="navigation" />
            <main
              className={`
                ${isBlurred
                  ? "blur-sm transition-all duration-300"
                  : "transition-all duration-300"} mb-auto
              `}
            >
              <Home />
            </main>
            <Footer/>
          </div>
        }
      />
      {status === "not-authenticated" ? (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<Navigate to="/login" />} />
        </>
      ) : (
        <>
          <Route
            path="/admin"
            element={
              <>
                <Header setBlur={setIsBlurred} rightContentType="userMenu" />
                <div className="flex h-screen min-h-[calc(100vh-60px)] w-screen overflow-auto">
                  <Sidebar />
                  <main
                    className={
                      isBlurred
                        ? "backdrop-blur-md backdrop-brightness-150 bg-white/80 transition-all duration-300 h-full flex-1"
                        : "transition-all duration-300 mt-14 flex-1 overflow-auto"
                    }
                  >
                    <AdminDashboard />
                  </main>
                </div>
              </>
            }
          />
          <Route path="/*" element={<Navigate to="/admin" />} />
        </>
      )}
    </Routes>
  );
};
