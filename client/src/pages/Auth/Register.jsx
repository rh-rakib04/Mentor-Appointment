import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import Logo from "../../components/Logo";
import GoogleSignIn from "./GoogleSignIn";
import { Link, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setLoading } = useAuth();
  const navigate = useNavigate();
  const axios = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const result = await createUser(data.email, data.password);
      const user = result.user;

      const userInfo = {
        name: data.name,
        email: user.email,
        role: data.role,
        uid: user.uid,
        createdAt: new Date(),
      };

      await axios.post("/users", userInfo);
      console.log("UserInfo sending:", userInfo);

      Swal.fire({
        toast: true,
        position: "top-end",
        timer: 2000,
        showConfirmButton: false,
        icon: "success",
        title: "Registration Successful!",
        text: `Welcome, ${data.name}!`,
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text:
          error.response?.data?.message ||
          error.message ||
          "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  py-12 px-4">
      {/* Container Card */}
      <div className="card bg-main w-full max-w-md shadow-2xl p-8 border border-secondary/20 rounded-3xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold font-merienda text-primary">
            Create Account
          </h1>
          <p className="text-muted text-sm mt-2">
            Join the MentorConnect community
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Role Selection - CRITICAL for your PRD */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Join as
            </label>
            <br />
            <select
              className="select w-full select-bordered text-white border-none focus:ring-2 focus:ring-primary font-sans"
              {...register("role", { required: true })}
            >
              <option value="student">Student</option>
              <option value="mentor">Mentor</option>
            </select>
          </div>

          {/* Name Field */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className={`input input-bordered w-full text-white border-none focus:ring-2 focus:ring-primary focus:outline-none ${errors.name ? "ring-2 ring-error" : ""}`}
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <span className="text-error text-xs mt-1">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Email Address
            </label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className={`input input-bordered w-full text-white border-none focus:ring-2 focus:ring-primary focus:outline-none ${errors.email ? "ring-2 ring-error" : ""}`}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-error text-xs mt-1">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className={`input input-bordered w-full text-white border-none focus:ring-2 focus:ring-primary focus:outline-none ${errors.password ? "ring-2 ring-error" : ""}`}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
            />
            {errors.password && (
              <span className="text-error text-xs mt-1">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              className="btn btn-primary btn-block text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all"
              type="submit"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="divider text-muted text-xs uppercase tracking-widest my-6">
          OR
        </div>

        <GoogleSignIn />

        <p className="text-center text-sm text-muted mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-bold hover:underline">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
