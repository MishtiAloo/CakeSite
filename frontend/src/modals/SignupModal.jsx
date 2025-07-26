import React, { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { userStore } from "../stores/user.store";
import axios from "axios";

function SignupModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const [signupAttempted, setSignupAttempted] = useState(false);
  const [inpUsername, setInpUsername] = useState("");
  const [inpEmail, setInpEmail] = useState("");
  const [inpPhoneNumber, setInpPhoneNumber] = useState("");
  const [inpPassword, setInpPassword] = useState("");
  const [inpConfirmPassword, setInpConfirmPassword] = useState("");

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const { setUser } = userStore();

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

  async function handleSignUp() {
    setSignupAttempted(true);

    if (inpUsername === "") {
      setUsernameError("*Username is required");
      return;
    } else setUsernameError("");

    if (inpEmail === "") {
      setEmailError("*Email is required");
      return;
    } else setEmailError("");

    if (inpPhoneNumber === "") {
      setPhoneNumberError("*Phone No. is required");
      return;
    } else setPhoneNumberError("");

    if (inpPassword === "") {
      setPasswordError("*Password is required");
      return;
    } else setPasswordError("");

    if (inpPassword !== inpConfirmPassword) {
      setConfirmPasswordError("*didnt match");
      return;
    } else setConfirmPasswordError("");

    const newUser = {
      userName: inpUsername,
      userEmail: inpEmail,
      userPassword: inpPassword,
      userPhoneNumber: inpPhoneNumber,
    };

    try {
      const response = await axios.post("/api/users", newUser);

      setUsernameError("");
      setEmailError("");
      setPasswordError("");
      setConfirmPasswordError("");
      setPhoneNumberError("");

      toast.success("Sign up successful");
      setUser(response.data.data);
      handleCancel();
    } catch (error) {
      const status = error.response?.status;

      if (status === 409) {
        toast.error(error.response.data.message);
        const field = error.response.data.field;

        if (field === "userPhoneNumber") {
          setPhoneNumberError("*Number already exists");
        } else if (field === "userEmail") {
          setEmailError("*Email already exists");
        }
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
            Sign Up
          </h2>

          <div style={{ marginBottom: "0.2rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Username</p>
              {signupAttempted && (
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

          <div style={{ marginBottom: "0.2rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Email</p>
              {signupAttempted && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.72rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {emailError}
                </p>
              )}
            </div>
            <input
              value={inpEmail}
              type="text"
              placeholder="Your email"
              onChange={(e) => setInpEmail(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "0.2rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Phone No</p>
              {signupAttempted && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.72rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {phoneNumberError}
                </p>
              )}
            </div>
            <input
              value={inpPhoneNumber}
              type="text"
              placeholder="Your Cell phone No."
              onChange={(e) => setInpPhoneNumber(e.target.value)}
            />
          </div>

          <div style={{ marginBottom: "0.2rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Password</p>
              {signupAttempted && (
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

          <div style={{ marginBottom: "0.2rem", padding: "0 0.2rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p>Confirm Password</p>
              {signupAttempted && (
                <p
                  style={{
                    color: "red",
                    fontSize: "0.72rem",
                    alignSelf: "flex-end",
                  }}
                >
                  {confirmPasswordError}
                </p>
              )}
            </div>
            <input
              value={inpConfirmPassword}
              type="text"
              placeholder="type your pass again"
              onChange={(e) => setInpConfirmPassword(e.target.value)}
            />
          </div>

          <div
            style={{
              margin: "1rem 0 0 0",
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <button onClick={handleCancel} style={{ backgroundColor: "gray" }}>
              Cancel
            </button>
            <button onClick={handleSignUp}>Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
