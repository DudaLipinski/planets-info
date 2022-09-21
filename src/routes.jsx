import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/Content";

const appRoutes = () => {
  return (
    <Routes>
      <Route path="/planet/:planetName" element={<Content />} />
    </Routes>
  );
};

export default appRoutes;
