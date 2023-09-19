import { Link } from "react-router-dom";

const HomeNavbar = () => {
  return (
    <>
      <div className="mt-40">
        <ul className="flex items-center justify-center gap-6">
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
