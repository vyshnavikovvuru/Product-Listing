import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";

function Products() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("isLoggedIn")) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="products-container">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
