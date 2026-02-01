import React, { useContext } from "react";
import { useForm } from "react-hook-form"; // Import this
import Logo from "../../components/Logo";
import GoogleSignIn from "./GoogleSignIn";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

const Login = () => {
  const { signInUser, setLoading } = useContext(AuthContext);
  const navigate = useNavigate();

  // 1. Initialize Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // 'data' contains { email, password }
    setLoading(true);
    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Welcome back to MentorConnect!");
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error:", error.message);
        toast.error("Invalid email or password.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center py-12 px-4 bg-base-200">
      <div className="card bg-main w-full max-w-md shadow-2xl p-8 border border-secondary/20 rounded-3xl">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Logo />
          </div>
          <h1 className="text-2xl font-bold font-merienda text-primary">
            Welcome Back
          </h1>
          <p className="text-muted text-sm mt-2">
            Continue your mentorship journey
          </p>
        </div>

        {/* 2. Use handleSubmit from hook-form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered border-none focus:ring-2 focus:ring-primary"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <span className="text-error text-xs mt-1">{errors.email.message}</span>}
          </div>

          <div className="form-control">
            <label className="label font-bold text-xs uppercase tracking-wider text-muted">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered border-none focus:ring-2 focus:ring-primary"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && <span className="text-error text-xs mt-1">{errors.password.message}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block text-white font-bold mt-4 shadow-lg"
          >
            Log In
          </button>
        </form>

        <div className="divider text-muted text-xs uppercase tracking-widest my-6">
          OR
        </div>

        <GoogleSignIn />

        <p className="text-center text-sm text-muted mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-bold hover:underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;