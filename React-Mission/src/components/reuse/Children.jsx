import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Children({ props }) {
  const { isDark } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#333",
  };
  if (props % 2 === 0) {
    return <div style={style}>{props}번째 Children 컴포넌트입니다.</div>;
  }
  return <div>{props}번째 Children 컴포넌트입니다.</div>;
}
