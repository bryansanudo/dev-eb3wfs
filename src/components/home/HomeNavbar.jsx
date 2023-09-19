import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <div>
        <ul>
          <Link to="/home/about">
            <li>About</li>
          </Link>
          <Link to="/home/services">
            <li>Services</li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default HomeNavbar;
