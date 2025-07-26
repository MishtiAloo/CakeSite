import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  const handleStarted = () => {
    navigate("/home");
  };

  return (
    <div className="basic-page-container">
      <p style={{ fontSize: "3rem", fontWeight: "bold" }}>Welcum to keka</p>
      <p style={{}}>Where your wildest creampie fantasies cum true</p>
      <button
        onClick={handleStarted}
        style={{
          marginTop: "2rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          alignItems: "center",
        }}
      >
        Get started <FaArrowRight />
      </button>
    </div>
  );
}

export default LandingPage;
