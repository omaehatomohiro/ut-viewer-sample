import React from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { TopPage } from "../components/pages/TopPage";
import { PlayerPage } from "../components/pages/PlayerPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage/>}/>
        <Route path="play" element={<PlayerPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}
