import React, { useEffect, useState } from "react";
import OrderCard from "../cards/OrderCard.jsx";
import { userStore } from "../stores/user.store";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  const { user, setUser, userOrders } = userStore();
  const navigate = useNavigate();

  const [inpUsername, setInpUsername] = useState(user.userName);
  const [inpEmail, setInpEmail] = useState(user.userEmail);
  const [inpAddress, setInpAddress] = useState(user.userAddress);
  const [inpPhone, setInpPhone] = useState(user.userPhoneNumber);
  const [isEditMode, setIsEditMode] = useState(false);

  async function handleUpdate() {
    if (
      isEditMode &&
      (inpUsername !== user.userName ||
        inpEmail !== user.userEmail ||
        inpAddress !== user.userAddress ||
        inpPhone !== user.userPhoneNumber)
    ) {
      if (inpUsername === "") {
        toast.error("Username cannot be empty");
        return;
      }
      if (inpEmail === "") {
        toast.error("Email cannot be empty");
        return;
      }

      const updatedUser = {
        _id: user._id,
        userName: inpUsername,
        userEmail: inpEmail,
        userAddress: inpAddress,
        userPhoneNumber: inpPhone,
      };

      try {
        const response = await axios.put("/api/users", updatedUser);
        toast.success("User info updated");
        setIsEditMode(false);
      } catch (error) {
        const status = error.response?.status;
        if (status === 409) {
          toast.error(error.response.data.message);
        } else {
          toast.error("Server er bhitre jhamela front");
        }
      }
    } else {
      toast.error("No changes made to update");
    }
  }

  async function handleDelete() {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone.",
      )
    ) {
      try {
        await axios.delete("/api/users", { data: user });
        navigate("/home");
        setUser(null);
        toast.success("User account deleted successfully");
      } catch (error) {
        toast.error("Server er bhitre jhamela while deleting user");
      }
    }
  }

  function handleLogout() {
    if (window.confirm("Are you sure you want to log out?")) {
      setUser(null);
      navigate("/home");
      toast.success("Logged out successfully");
    }
  }

  function tester() {
    console.log("tester called");
    console.log(userOrders);
  }

  return (
    <div className="basic-page-container" style={{ width: "100%" }}>
      <div className="basic-container" style={{ width: "100%" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>Profile Page</h2>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "orangered",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        ></div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            padding: "1rem",
            gap: "1rem",
          }}
        >
          <div
            className="basic-image-container"
            style={{ flex: "1", backgroundColor: "aqua" }}
          >
            <img
              src={user.userProfileImage}
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>

          <div
            className="basic-container"
            style={{
              flex: "2",
              backgroundColor: "wheat",
              padding: "1rem",
              gap: "1rem",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Username</p>
              <input
                value={inpUsername}
                type="text"
                style={{ border: "1.5px solid black", width: "25rem" }}
                onChange={(e) => {
                  setInpUsername(e.target.value);
                  setIsEditMode(true);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Email</p>
              <input
                value={inpEmail}
                type="text"
                style={{ border: "1.5px solid black", width: "25rem" }}
                onChange={(e) => {
                  setInpEmail(e.target.value);
                  setIsEditMode(true);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Address</p>
              <input
                value={inpAddress}
                type="text"
                style={{ border: "1.5px solid black", width: "25rem" }}
                onChange={(e) => {
                  setInpAddress(e.target.value);
                  setIsEditMode(true);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Phone No</p>
              <input
                value={inpPhone}
                type="text"
                style={{ border: "1.5px solid black", width: "25rem" }}
                onChange={(e) => {
                  setInpPhone(e.target.value);
                  setIsEditMode(true);
                }}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "0.5rem",
                justifyContent: "end",
              }}
            >
              <button style={{ backgroundColor: "" }} onClick={handleLogout}>
                Log Out
              </button>
              <button style={{ backgroundColor: "red" }} onClick={handleDelete}>
                Delete Account
              </button>
              <button
                style={{ backgroundColor: isEditMode ? "green" : "gray" }}
                onClick={handleUpdate}
              >
                Update Info
              </button>
              <button onClick={tester}>tester</button>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-container" style={{ width: "100%" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
          Orders on the way
        </h2>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "orangered",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        ></div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {userOrders ? (
            userOrders.map((order, index) => {
              if (order.state === "checked out") {
                return <OrderCard key={index} order={order} />;
              }
              return null;
            })
          ) : (
            <p
              style={{ textAlign: "center", fontSize: "1.2rem", color: "gray" }}
            >
              No orders found
            </p>
          )}
        </div>
      </div>

      <div className="basic-container" style={{ width: "100%" }}>
        <h2 style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
          Order history
        </h2>
        <div
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "orangered",
            marginTop: "0.5rem",
            marginBottom: "1rem",
          }}
        ></div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {userOrders ? (
            userOrders.map((order, index) => {
              if (order.state === "delivered") {
                return <OrderCard key={index} order={order} />;
              }
              return null;
            })
          ) : (
            <p
              style={{ textAlign: "center", fontSize: "1.2rem", color: "gray" }}
            >
              No orders found
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
