import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import "./Login.css";
import { AuthContext } from "../../contexts/AuthProvider";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Login = () => {
  const [loginError, setLoginError] = useState("");
  const [googleLoginError, setGoogleLoginError] = useState("");
  const notify = () => toast("You Logged In Successfully");
  const { handleSignIn, handleGoogleSignIn } = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.user_email.value;
    const password = e.target.user_password.value;
    handleSignIn(email, password)
      .then(() => {
        setLoginError("");
        notify();
        navigate(`${location?.state ? location?.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setLoginError(errorMessage);
      });
  };

  const handleGoogleSubmit = () => {
    handleGoogleSignIn()
      .then(() => {
        setGoogleLoginError("");
        notify();        
        navigate(`${location?.state ? location?.state : "/"}`);
      })
      .catch((error) => {
        const errorMessage = error.message;
        setGoogleLoginError(errorMessage);
      });
  };

  return (
    <>
      <Helmet>
        <title>FeedTheHunger | Login</title>
      </Helmet>
      <div className="login">
        <div className="container mx-auto px-20">
          <h2 className="text-3xl font-bold">Login</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="user_email" placeholder="Email" />
            <input
              type="password"
              name="user_password"
              placeholder="PassWord"
            />
            <p className="warning">{loginError}</p>
            <input type="submit" value="Login" />
          </form>
          <p>
            Didn&apos;t Signed Up? Go to{" "}
            <Link
              style={{
                textDecoration: "underline",
                fontSize: "20px",
                color: "#1b71ac",
                fontWeight: "bold",
              }}
              to={"/signup"}
            >
              SignUp
            </Link>
          </p>
          <button onClick={handleGoogleSubmit} className="google_signin">
            <FcGoogle />
            Continue With Google
          </button>
          <p className="warning">{googleLoginError}</p>
        </div>
      </div>
    </>
  );
};

export default Login;
