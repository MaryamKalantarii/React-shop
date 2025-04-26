import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";

const Product = (props) => {
  const { id, productName, productImage, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const itemInCart = cartItems?.find((item) => item.id === id);
  const count = itemInCart?.count || 0;

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div
        className="card h-100 text-center p-3"
        style={{
          borderRadius: "20px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          transition: "transform 0.3s",
        }}
      >
        <img
          src={productImage}
          alt={productName}
          className="card-img-top mx-auto"
          style={{
            width: "150px",
            height: "150px",
            objectFit: "contain",
            marginBottom: "10px",
          }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold" style={{ color: "#4a00e0" }}>
            {productName}
          </h5>
          <p className="card-text" style={{ color: "#28a745", fontWeight: "bold" }}>
            Price: {price}$
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <button
              className="btn mx-1"
              style={{
                background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
                color: "white",
                border: "none",
                borderRadius: "50%",
                width: "35px",
                height: "35px",
                fontWeight: "bold",
              }}
              onClick={() => addToCart(id)}
            >
              +
            </button>
            <span className="mx-2 fw-bold">{count}</span>
            {count > 0 && (
              <button
                className="btn mx-1"
                style={{
                  background: "linear-gradient(135deg, #b993d6, #8ca6db)",
                  color: "white",
                  border: "none",
                  borderRadius: "50%",
                  width: "35px",
                  height: "35px",
                  fontWeight: "bold",
                }}
                onClick={() => removeFromCart(id)}
              >
                -
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;