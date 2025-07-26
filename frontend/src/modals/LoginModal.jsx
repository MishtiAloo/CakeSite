import axios from "axios";
import { set } from "mongoose";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { userStore } from "../stores/user.store";
import { useCartStore } from "../stores/cart.store";
import { useNavigate } from "react-router-dom";

function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const navigate = useNavigate();

  const [signInAttempted, setSignInAttempted] = useState(false);
  const [inpUsername, setInpUsername] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { setUser } = userStore();
  const { fetchAllInCart } = useCartStore();

  const myelm = useRef(null);
  useEffect(() => {
    const el = myelm.current;
    if (el) {
      requestAnimationFrame(() => {
        el.style.transform = "translateX(0)";
      });
    }
  }, []);

  function handleCancel() {
    const el = myelm.current;
    if (el) {
      el.style.transform = "translateX(100%)";
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  }

  async function handleSignIn() {
    setSignInAttempted(true);

    if (inpUsername === "") {
      setUsernameError("*Username is required");
      return;
    }
    if (inpPassword === "") {
      setPasswordError("*Password is required");
      return;
    }

    try {
      const response = await axios.post("/api/users/login", {
        userName: inpUsername,
        userPassword: inpPassword,
      });

      setUsernameError("");
      setPasswordError("");
      toast.success("Login successful");

      setUser(response.data.data);
      fetchAllInCart(response.data.data); // Fetch cart orders after login
      handleCancel();

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    } catch (error) {
      const status = error.response?.status;

      if (status === 404) {
        setUsernameError("*User not found");
        toast.error("User not found, please sign up first");
      } else if (status === 401) {
        setPasswordError("*Password didn't match");
        toast.error("Password didn't match");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <div ref={myelm} className="modal-container">
      <div className="modal-overlay">
        <div className="modal-content clickables basic-container">
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              marginBottom: "1rem",
            }}
          >
            SignIn
          </h2>

          <div style={{ marginBottom: "0.35rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Username</p>
              {signInAttempted && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.72rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {usernameError}
                </p>
              )}
            </div>
            <input
              value={inpUsername}
              type="text"
              placeholder="Your username"
              onChange={(e) => setInpUsername(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "0.35rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Password</p>
              {signInAttempted && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.72rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {passwordError}
                </p>
              )}
            </div>
            <input
              value={inpPassword}
              type="text"
              placeholder="Your password"
              onChange={(e) => setInpPassword(e.target.value)}
            />
          </div>

          <div
            style={{
              margin: "1rem 0",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <button onClick={handleCancel} style={{ backgroundColor: "gray" }}>
              Cancel
            </button>
            <button onClick={handleSignIn}>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
