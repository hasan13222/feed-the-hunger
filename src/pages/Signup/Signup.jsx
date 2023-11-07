import { Link } from "react-router-dom";
import { getAuth, updateProfile } from "firebase/auth";
import "./Signup.css";
import { useContext, useState } from "react";
import app from "../../firebase/firebase.config";
import { AuthContext } from "../../contexts/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signupError, setSignupError] = useState("");
  const auth = getAuth(app);

  const { handleSignUp } = useContext(AuthContext);

  const notify = () => toast("You have Signed Up successfully");

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;
    const password = e.target.user_password.value;
    const userName = e.target.user_name.value;
    const userPhoto = e.target.photo_url.value;

    handleSignUp(email, password)
    .then( () => {
        setSignupError('');
        notify();

        updateProfile(auth.currentUser, {
          displayName: userName,
          photoURL: userPhoto
        })
        .then( (updateUser) => {
            // profile is updated
            console.log(updateUser);
        })
        .catch((error) => {
            console.log(error);
        })
    })
    .catch((error) => {
        setSignupError(error.message);
    })
  }

  return (
    <>
      <div className="signup">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="user_name"
              placeholder="Full Name"
            />
            <input type="email" name="user_email" placeholder="Email" />
            <input type="text" name="photo_url" placeholder="Photo Url" />
            <input
              pattern="^(?=.*[A-Z])(?=.*[\W_]).{7,}$"
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <small className="text-blue-400">
              Note: Your Password have to be more than 6 characters with a
              capital letter and a special character
            </small>
            <p className="warning">{signupError}</p>
            <input type="submit" value="Register" />
          </form>
          <p>
            Already Signed Up? Go to
            <Link
              style={{
                textDecoration: "underline",
                fontSize: "20px",
                fontWeight: "bold",
                color: "#1b71ac",
              }}
              to={"/login"}
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
