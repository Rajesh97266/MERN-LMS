import AuthPage from "./pages/auth";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
