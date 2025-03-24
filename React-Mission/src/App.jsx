import React from "react";
import { Route, Routes } from "react-router";
import AsyncFetch from "./components/AsyncFetch";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AsyncFetch />}></Route>
      </Routes>
    </>
  );
}

export default App;
