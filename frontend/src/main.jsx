//DEPENDENCIES
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

//JSX IMPORTS
import router from "./router.jsx";

//CSS IMPORTS
import "./index.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "bootstrap/dist/css/bootstrap.min.css";

//PROVIDER IMPORTS
import { PrimeReactProvider } from "primereact/api";
import { ContextProvider } from "./contexts/ContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PrimeReactProvider>
      <ContextProvider>
        <RouterProvider router={router} />
      </ContextProvider>
    </PrimeReactProvider>
  </React.StrictMode>
);
