import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import "./App.css";
import "animate.css/animate.min.css";
import { RecoilRoot } from "recoil";
import { HelmetProvider } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
    <RecoilRoot>
      <React.StrictMode>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
    </RecoilRoot>
    </HelmetProvider>
  );
}

export default App;
