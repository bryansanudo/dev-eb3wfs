import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/companies">Companies</Link>
          </li>
          <li>
            <Link to="/employees">Employees</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
