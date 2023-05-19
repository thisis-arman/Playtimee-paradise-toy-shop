import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import useTitle from "../../Hook/useTitle";

const Login = () => {
  useTitle('Sign In')
  const { signIn, handleGoogleLogin } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const userInfo = { email, password };
    console.log(userInfo);
    form.reset();
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className=" p-10 min-h-screen bg-base-200 my-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Please Login To get access to all over the our website! It has
              some really cool functionality!! Have Funnnn!!!!!!!
            </p>
          </div>

          <div className=" flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input bg-base-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input bg-base-200"
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <label className="label">
                  <p className="label-text-alt text-lg">
                    Create Account!{" "}
                    <Link
                      className="text-blue-500 font-semibold link-hover"
                      to="/register"
                    >
                      Register
                    </Link>
                  </p>
                </label>
              </div>
              <div className="divider">OR</div>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  className="btn btn-ghost btn-circle "
                >
                  <FcGoogle className="h-8 w-8 " />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
