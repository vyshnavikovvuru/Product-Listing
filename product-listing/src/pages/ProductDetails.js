import { useParams, useNavigate } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import { useEffect } from "react";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <>
      <Navbar />

      <div className="details-container">
        <div className="details-card">
          <img src={product.images[0]} alt={product.title} />
          <h2>{product.title}</h2>
          <p className="details-price">₹{product.price}</p>
          <p className="details-desc">{product.description}</p>

          <button onClick={() => navigate("/products")}>
            Back to Products
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
