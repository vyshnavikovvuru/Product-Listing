import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => navigate(`/products/${product.id}`)}>
        View Details
      </button>
    </div>
  );
}

export default ProductCard;
