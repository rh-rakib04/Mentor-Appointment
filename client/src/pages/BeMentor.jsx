import React from "react";
import { useForm } from "react-hook-form";
import useAxios from "../hooks/useAxios";
import { toast } from "react-hot-toast";

const BecomeAMentor = () => {
  const { register, handleSubmit, reset } = useForm();
  const axios = useAxios();

  const onSubmit = async (data) => {
    const mentorData = {
      ...data,
      expertise: data.expertise.split(",").map((s) => s.trim()), // Convert string to array
      price: parseFloat(data.price),
      role: "mentor",
      isApproved: false, // Must be false by default!
      status: "pending",
      createdAt: new Date(),
    };

    try {
      const res = await axios.post("/users", mentorData);
      if (res.data.insertedId || res.data.modifiedCount) {
        toast.success("Application submitted! Waiting for Admin approval.");
        reset();
      }
    } catch (err) {
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="min-h-[80vh] bg-slate-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 border border-slate-100">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-2">
            Apply as a Mentor
          </h1>
          <p className="text-slate-500 font-medium">
            Share your knowledge and earn by helping others grow.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-primary">Full Name</label>
              <input
                {...register("name")}
                type="text"
                placeholder="John Doe"
                className="input input-bordered bg-accent/10 rounded-xl focus:border-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-primary">
                Company / Current Role
              </label>
              <input
                {...register("company")}
                type="text"
                placeholder="Senior Engineer @ Google"
                className="input input-bordered bg-accent/10 rounded-xl"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-bold text-primary">Expertise</label>{" "}
            <br />
            <input
              {...register("expertise")}
              type="text"
              placeholder="React, Node.js, System Design"
              className="input input-bordered bg-accent/10 w-full rounded-xl"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label font-bold text-primary">
                Hourly Rate ($)
              </label>
              <input
                {...register("price")}
                type="number"
                placeholder="50"
                className="input input-bordered bg-accent/10 rounded-xl"
                required
              />
            </div>
            <div className="form-control">
              <label className="label font-bold text-primary">
                Profile Image URL
              </label>
              <input
                {...register("image")}
                type="url"
                placeholder="https://..."
                className="input input-bordered bg-accent/10 rounded-xl"
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label font-bold text-primary">Detailed Bio</label>{" "}
            <br />
            <textarea
              {...register("bio")}
              className="textarea textarea-bordered bg-accent/10 w-full rounded-xl h-32"
              placeholder="Tell students about your journey and how you can help them..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn bg-accent text-black w-full h-14 rounded-2xl text-lg border-none font-bold shadow-lg shadow-primary/20"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default BecomeAMentor;
