import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./router";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { RecoilRoot } from "recoil";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <RecoilRoot>
      <React.StrictMode>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </React.StrictMode>
    </RecoilRoot>
  );
}

export default App;
