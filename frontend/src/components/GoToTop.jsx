import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp } from "react-icons/fa";

function GoToTop() {
  const gotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = window.innerHeight * 0.12;
      setIsFixed(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        fontSize: "4rem",
        bottom: "120px",
        right: "20px",
        color: "orange",
        backgroundColor: "black",
        backdropFilter: "blur(10px)",
        borderRadius: "50%",
        border: "1px solid black",
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        transform: isFixed ? "translateX(0)" : "translateX(100px)",
        transition: "transform 0.25s ease-in-out",
      }}
    >
      <FaArrowAltCircleUp onClick={gotoTop} className="clickables gotop" />
    </div>
  );
}

export default GoToTop;
