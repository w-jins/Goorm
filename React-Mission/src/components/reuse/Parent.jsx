// 리액트에서 재사용 가능한 컴포넌트를 만들기 위해 props와 children을 활용한 컴포넌트를 설계하고,
// 여러 번 사용될 수 있는 형태로 구성합니다.
// 재사용 가능한 컴포넌트 코드와 실행 화면 스크린샷을 결과물로 제출합니다.

import React from "react";
import Children from "./Children";
import { ThemeContext } from "../context/ThemeContext";

export default function Parent() {
  return (
    <div>
      Parent 컴포넌트입니다.
      <div>
        <Children props={1} />
        <Children props={2} />
        <Children props={3} />
        <Children props={4} />
        <Children props={5} />
      </div>
    </div>
  );
}
