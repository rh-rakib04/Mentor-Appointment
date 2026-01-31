import React from "react";
import MentorCard from "../components/cards/MentorCard";

const MentorList = () => {
  return (
    <div className="bg-soft min-h-screen">
      {/* Search Header */}
      <div className="bg-primary py-12 px-6 text-white text-center">
        <h1 className="text-3xl font-bold font-merienda">
          Find Your Ideal Mentor
        </h1>
        <div className="mt-6 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by expertise (React, UX, Marketing...)"
            className="input input-bordered w-full  font-sans"
          />
        </div>
      </div>

      <div className="container mx-auto px-6 py-10 flex flex-col lg:flex-row gap-8 ">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-64 space-y-6 ">
          <div className="p-6 bg-main rounded-2xl shadow-sm border border-secondary/20">
            <h3 className="font-bold mb-4">Category</h3>
            <div className="space-y-2 text-sm">
              {["Tech", "Design", "Business"].map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <span>{cat}</span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Mentor Grid */}
        <div className="flex-1 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
          <MentorCard />
        </div>
      </div>
    </div>
  );
};

export default MentorList;
