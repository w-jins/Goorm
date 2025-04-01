import React, { useContext } from "react";
import { Link, Outlet } from "react-router";
import { ThemeContext } from "./context/ThemeContext";

export default function Main() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#333",
  };

  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <>
      <header style={style} className='flex justify-center gap-5'>
        <Link to='/'>Main</Link>
        <Link to='/api'>API</Link>
        <Link to='/reuse'>REUSE</Link>
        <button style={{ cursor: "pointer" }} onClick={handleClick}>
          {isDark ? "WHITE" : "DARK"}
        </button>
      </header>

      <Outlet />
    </>
  );
}
