import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AdminContextprovider from "./context/AdminContext.jsx";
import DoctorContextprovider from "./context/DoctorContext.jsx";
import AppContextprovider from "./context/Appcontext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextprovider>
      <DoctorContextprovider>
        <AppContextprovider>
          <App />
        </AppContextprovider>
      </DoctorContextprovider>
    </AdminContextprovider>
  </BrowserRouter>
);
