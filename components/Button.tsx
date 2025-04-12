"use client";

import { useRef, useState, useEffect } from "react";

export default function RunawayButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ top: "55%", left: "55%" });

  const moveButton = () => {
    if (!buttonRef.current) return;

    const buttonWidth = buttonRef.current.offsetWidth;
    const buttonHeight = buttonRef.current.offsetHeight;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const padding = 20;

    const maxLeft = screenWidth - buttonWidth - padding;
    const maxTop = screenHeight - buttonHeight - padding;

    const newLeft = Math.random() * maxLeft;
    const newTop = Math.random() * maxTop;

    setPosition({
      top: `${newTop}px`,
      left: `${newLeft}px`,
    });
  };

  // Optional: Recalculate position on resize
  useEffect(() => {
    const handleResize = () => moveButton();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <button
        ref={buttonRef}
        onMouseEnter={moveButton}
        onTouchStart={moveButton}
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
        }}
        className="transition-all duration-300 ease-in-out text-lg bg-pink-500 text-white font-bold py-2 px-4 rounded"
      >
        No
      </button>
    </div>
  );
}
