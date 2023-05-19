import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [error, setError] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const confirm = form.confirm.value;

    if (password !== confirm) {
      setError("Passwords do not match");
    }
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log(createdUser);
        if (createdUser) {
          Swal.fire({
            title: "Done!",
            text: "Sign Up Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });

    updateUserProfile(name, photo)
      .then(() =>
        Swal.fire({
          title: "Done!",
          text: "Profile Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        })
      )
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className=" p-10 min-h-screen bg-base-200 my-4">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">
              Please Register To get access to all over the our website! It has
              some really cool functionality!! Have Funnnn!!!!!!!
            </p>
          </div>

          <div className=" flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input bg-base-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  name="photo"
                  className="input bg-base-200"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input bg-base-200"
                  required
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
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="confirm"
                  className="input bg-base-200"
                  required
                />
              </div>
              <p className="text-red-500 font-bold">{error}</p>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Register
                </button>
                <label className="label">
                  <p className="label-text-alt text-lg">
                    Already Have an Account!{" "}
                    <Link
                      className="text-blue-500 font-semibold link-hover"
                      to="/login"
                    >
                      login
                    </Link>
                  </p>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
