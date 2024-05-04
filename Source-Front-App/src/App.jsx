

import { Route, Routes } from "react-router-dom";
import { Login } from "./authentication/Login";
import { Register } from "./components/Register";
import { Home } from "./layout/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Mobiliario from "./app/Mobiliario";
import Laboratorios from "./app/Laboratorios";
import Aplicaciones from "./app/Aplicaciones";
import Soporte from "./app/Soporte";
import './App.css'

function App() {

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          >
            <Route path="laboratorios" element={<Laboratorios />}></Route>
            <Route path="mobiliario" element={<Mobiliario />}></Route>
            <Route path="aplicaciones" element={<Aplicaciones />}></Route>
            <Route path="soporte" element={<Soporte />}></Route>
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  )
}

export default App