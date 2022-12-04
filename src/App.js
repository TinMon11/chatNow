import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./styles/styles.scss"
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRout = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children;
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={
            <ProtectedRout>
              <HomePage />
            </ProtectedRout>} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

        </Route>
      </Routes>
    </BrowserRouter >
  );
}

export default App;
