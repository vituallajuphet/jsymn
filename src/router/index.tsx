import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import Loading from "../components/Loading/Loading";
import {useRecoilState} from 'recoil'
import { appstate } from "../Atoms/AppState";


const AppRoutes = () => {

  const [state] = useRecoilState(appstate);

  if(state === 'loading') {
    return <Loading />
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default AppRoutes
