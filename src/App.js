import React from "react";
import { BrowserRouter } from "react-router-dom";

import Theme from "./css/Theme";

import GlobalStyles from "./css/GlobalStyles";
import Sidebar from "./components/Sidebar";
import Routes from "./routes";

function App() {
  return (
    <Theme>
      <GlobalStyles />
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes />
        </div>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
