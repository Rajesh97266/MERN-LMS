import AuthPage from "./pages/auth";
import React from "react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AuthPage />} />
    </Routes>
  );
}

export default App;
