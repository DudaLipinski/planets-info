import React, { useState } from "react";
import Theme from "./css/Theme";
import GlobalStyles from "./css/GlobalStyles";

import Sidebar from "./components/Sidebar";

function App() {
  const [planets, setPlanets] = useState({});

  return (
    <Theme>
      <GlobalStyles />
      <div className="App">
        <Sidebar />
      </div>
    </Theme>
  );
}

export default App;
