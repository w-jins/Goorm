import React, { useContext, useEffect, useState } from "react";
import axiosAPI from "../api/axios";
import request from "../api/requests";
import { ThemeContext } from "./context/ThemeContext";

export default function AsyncFetch() {
  const [movie, setMovie] = useState([]);
  const { isDark } = useContext(ThemeContext);
  const style = {
    backgroundColor: isDark ? "#333" : "#fff",
    color: isDark ? "#fff" : "#333",
  };
  // ** Async Await 비동기 처리 학습
  // const AsyncAwait = async () => {
  //   try {
  //     const data = await axiosAPI.get(request.fetchNetflixOriginals);
  //     setMovie(data.data.results);
  //   } catch (e) {
  //     throw Error(e.message);
  //   }
  // };
  // AsyncAwait();

  // ** useEffect 를 이용한 마운트 언마운트 확인하기
  useEffect(() => {
    const res = async () => {
      try {
        const data = await axiosAPI.get(request.fetchNetflixOriginals);
        setMovie(data.data.results);
      } catch (e) {
        throw Error(e.message);
      }
    };
    res();
  }, []);
  return (
    <div>
      <div className='grid grid-cols-3 gap-4' style={style}>
        {movie.map((item) => (
          <div key={item.id} className='p-4 border-2 border-gray-200'>
            <p className='text-center text-xs mb-2'>{item.name}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
