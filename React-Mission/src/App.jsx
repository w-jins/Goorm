import React, { useState } from "react";
import { Route, Routes } from "react-router";
import AsyncFetch from "./components/AsyncFetch";
import "./App.css";
import Main from "./components/Main";
import Parent from "./components/reuse/Parent";
import { ThemeContext } from "./components/context/ThemeContext";

function App() {
  const [isDark, setIsDark] = useState(false);
  return (
    <>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='api' element={<AsyncFetch />} />
            <Route path='reuse' element={<Parent />} />
          </Route>
        </Routes>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
