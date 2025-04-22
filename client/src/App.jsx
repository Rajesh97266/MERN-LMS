import AuthPage from "./pages/auth";
import React, { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import RouteGuard from "./components/route-gaurd";
import { AuthContext } from "./context/auth-context";
import InstructorDashboardPage from "./pages/instructor";

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/auth"
        element={<RouteGuard element={<AuthPage />} />}
        authenticated={auth?.authenticate}
        user={auth?.user}
      />
      <Route
        path="/instructor"
        element={<RouteGuard element={<InstructorDashboardPage />} />}
        authenticated={auth?.authenticate}
        user={auth?.user}
      />
      <Route
        path="/"
        element={<RouteGuard element={<InstructorDashboardPage />} />}
        authenticated={auth?.authenticate}
        user={auth?.user}
      />
    </Routes>
  );
}

export default App;
