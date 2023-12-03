"use client";

import { FunctionComponent, useEffect, useState } from "react";

export const Ball: FunctionComponent = () => {
  const [mouse, setmouse] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setmouse({ x: e.clientX, y: e.clientY });
    });
  }, []);

  return (
    <div className="fixed h-screen w-screen blur-md overflow-hidden top-0 left-0 z-0">
      <div className="balls relative h-screen w-screen overflow-hidden">
        <div
          className="w-40 h-40 backdrop-blur-sm bg-background2 rounded-full absolute -translate-x-1/2 -translate-y-1/2"
          style={{
            top: `${mouse.y}px`,
            left: `${mouse.x}px`,
            transition: "top 0.3s linear, left 0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};
