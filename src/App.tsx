import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './index.css';
import Header from "./tiles/header/Header";
import SideBar from "./tiles/slidebar/SideBar";
import Home from "./tiles/contents/Home";
import Brand from "./tiles/contents/Brand";


const App: React.FC = () => {
  return (
    <>
      <Header />
      <SideBar />
      <div>
        <Routes>
          {/* <Route path="/" element={<Shop />}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/brand" element={<Brand />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
