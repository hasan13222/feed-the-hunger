import { NavLink } from "react-router-dom";
import { images } from "../../assets";
import { navlinks } from "../../utils/navlinks";

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-200 border-blue-50 border-b">
        <div className="container flex items-center justify-between navbar mx-auto">
          <a href="/">
            <img
              className="object-contain w-20 h-20"
              src={images.logo}
              alt="logo"
            />
          </a>
          <ul className="flex gap-7">
            {navlinks.map((item) => (
              <>
                <li>
                  <NavLink
                    className="font-bold hover:text-green-500"
                    to={item.path}
                  >
                    {item.title}
                  </NavLink>
                </li>
              </>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
