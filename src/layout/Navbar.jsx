import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      
      <Link to="/">
        Counter
      </Link>

      <Link to="/task2">
        Array Operations
      </Link>

      <Link to="/task3">
        String Operations
      </Link>

      <Link to="/task4">
        Object Operations
      </Link>

      <Link to="/task5">
        Employee CRUD
      </Link>
    </nav>
  );
};

export default Navbar;