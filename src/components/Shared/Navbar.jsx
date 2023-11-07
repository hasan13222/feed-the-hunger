import { NavLink } from "react-router-dom";
import { images } from "../../assets";
import { navlinks } from "../../utils/navlinks";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, handleSignOut } = useContext(AuthContext);
  
  const notify = () => toast("You Logged out successfully");

    const handleLogout = () => {
        handleSignOut()
          .then(() => {
            notify();
          })
          .catch((error) => {
            console.log(error);
          });
      };
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
            <li>{!user && <NavLink className="font-bold hover:text-green-500" to={"/login"}>Login</NavLink>}</li>
            <li>{user && <img className="w-10 h-10 object-contain" src={user?.photoURL} alt="profile" />}</li>
            <li>{user && <span>{user?.displayName}</span>}</li>
            <li>{user && <button onClick={handleLogout}>Logout</button>}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
