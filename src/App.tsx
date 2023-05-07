import React from 'react';
import { BrowserRouter } from "react-router-dom";
import AppRoutes from './router'
import './App.css'
import { RecoilRoot } from 'recoil';

function App() {
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
