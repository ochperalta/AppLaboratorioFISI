import { Route, Routes } from "react-router-dom";
import { Login } from "./authentication/Login";
import { Register } from "./components/Register";
import { Home } from "./layout/Home";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AuthProvider from "./context/AuthContext";
import Equipments from "./app/equipment/Equipments";
import Laboratories from "./app/laboratories/Laboratories";
import Applications from "./app/applications/Applications";
import Soporte from "./app/soporte/Soporte";
import "./App.css";
import LaboratoryDetail from "./app/laboratories/LaboratoryDetail";
import Computers from "./app/computers/Computers";

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
            <Route path="laboratorios/:id" element={<LaboratoryDetail />}></Route>
            <Route path="laboratorios" element={<Laboratories />}></Route>
            <Route path="mobiliarios" element={<Equipments />}></Route>
            <Route path="aplicaciones" element={<Applications />}></Route>
            <Route path="computadoras" element={<Computers />}></Route>
            <Route path="soporte" element={<Soporte />}></Route>
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
