import React, { useEffect, useState } from "react";
import OrderCard from "../cards/OrderCard";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { useCartStore } from "../stores/cart.store";
import Cart from "../components/Cart";
import { useNavigate } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { userStore } from "../stores/user.store";

function CartPage() {
  const navigate = useNavigate();

  const { user, setUser } = userStore();
  const [voucherReduction, setVoucherReduction] = useState(69);
  const [deliveryAddress, setDeliveryAddress] = useState(
    user.userAddress || "",
  );
  const [district, setDistrict] = useState("Inside Dhaka");
  const deliveryCharge = district === "Inside Dhaka" ? 50 : 100;

  const {
    cartProducts,
    fetchAllInCart,
    cartTotal,
    addToCart,
    updateCart,
    deleteFromCart,
    loading,
    checkoutCart,
  } = useCartStore();

  useEffect(() => {
    fetchAllInCart(user);
  }, []);

  const finalPayable = cartTotal - voucherReduction + deliveryCharge;

  function handleGoToShopping() {
    navigate("/prodpage");
  }

  function handleClearCart() {
    cartProducts.forEach((order) => {
      deleteFromCart(order);
    });
    toast.success(`cleared cart`);
  }

  async function handleProceed() {
    try {
      await checkoutCart();
    } catch (error) {
      console.error("Checkout failed:", error);
    }
  }

  return cartProducts.length > 0 ? (
    <div className="basic-page-container">
      <div
        className="basic-container"
        style={{ display: "flex", width: "95vw", gap: "1rem", padding: "1rem" }}
      >
        <div
          style={{
            flex: "2.5",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <button
            style={{
              alignSelf: "end",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              backgroundColor: "#02D749",
            }}
          >
            {" "}
            <FaGift />
            Apply a voucher
          </button>

          {cartProducts.length > 0 ? (
            cartProducts.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))
          ) : (
            <p style={{ fontSize: "1.2rem", fontStyle: "italic" }}>
              Your cart is empty
            </p>
          )}

          <button
            onClick={handleGoToShopping}
            style={{
              alignSelf: "start",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {" "}
            <FaArrowLeftLong />
            Continue Shopping
          </button>
        </div>

        <div
          style={{
            width: "5px",
            alignSelf: "stretch",
            backgroundColor: "black",
            margin: "0 1.5rem",
          }}
        ></div>

        <div style={{ flex: "1" }}>
          <div
            className="basic-container"
            style={{
              backgroundColor: "#FBD288",
              alignSelf: "start",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "1rem", fontWeight: "bold" }}>Cart Total</p>
              <p>{cartTotal}$</p>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Voucher reduction
              </p>
              <p>{voucherReduction ? `-${voucherReduction}$` : "--"}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  textAlign: "start",
                  lineHeight: "1rem",
                }}
              >
                Delivery location
              </p>
              <input
                type="text"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                style={{ height: "2rem" }}
              />
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  name="district"
                  value="Inside Dhaka"
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    lineHeight: "1rem",
                  }}
                >
                  Inside Dhaka
                </p>
              </label>
              <label
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: "0.3rem",
                }}
              >
                <input
                  type="radio"
                  name="district"
                  value="Outside Dhaka"
                  onChange={(e) => setDistrict(e.target.value)}
                />
                <p
                  style={{
                    fontSize: "1rem",
                    fontWeight: "bold",
                    lineHeight: "1rem",
                  }}
                >
                  Outside Dhaka
                </p>
              </label>
            </div>

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <p style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Delivery charge
              </p>
              <p>{deliveryCharge}</p>
            </div>

            {/* a div that creates an underline */}
            <div
              style={{ borderBottom: "1px solid black", margin: "0.5rem 0" }}
            ></div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  textDecoration: "underline",
                }}
              >
                Final payable
              </p>
              <p style={{ fontWeight: "bold" }}>{finalPayable}$</p>
            </div>

            <button
              onClick={handleProceed}
              style={{
                alignSelf: "end",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginTop: "1rem",
              }}
            >
              {" "}
              Procced to Checkout <FaArrowRightLong />
            </button>
          </div>
          <button
            onClick={handleClearCart}
            style={{
              marginTop: "1rem",
              backgroundColor: "red",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            {" "}
            <MdDelete style={{ fontSize: "1.4rem" }} /> Clear Cart
          </button>
        </div>
      </div>
      <Cart />
    </div>
  ) : (
    <p
      className="basic-page-container"
      style={{ fontSize: "1.5rem", fontWeight: "bold" }}
    >
      Nothing in cart yet.
    </p>
  );
}

export default CartPage;
