import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="navbar">
      <h2>My Store</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Navbar;
