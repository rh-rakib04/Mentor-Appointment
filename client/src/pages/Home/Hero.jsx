import React from "react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative bg-[var(--bg-soft)] overflow-hidden">
      {/* Subtle decorative blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-40 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* LEFT IMAGE */}
          <div className="relative lg:w-1/3">
            <div className="absolute -inset-6 bg-primary/10 rounded-[40px] rotate-3"></div>
            <div className="relative bg-white rounded-[32px] p-2 shadow-xl">
              <img
                src="/Img1.jpg"
                alt="Mentor"
                className="rounded-[24px] object-cover"
              />
            </div>

            {/* Rating Card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
              <div className="font-bold text-primary">4.9★</div>
              <div className="text-xs text-muted">2k+ Reviews</div>
            </div>
          </div>

          {/* CENTER CONTENT */}
          <div className="text-center lg:w-1/3 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight text-[var(--text-main)]">
              Empower Your Growth with{" "}
              <span className="text-primary">
                Personalized Mentorship
              </span>
            </h1>

            <p className="text-muted text-lg leading-relaxed max-w-md mx-auto">
              Connect with experienced mentors for 1:1 guidance, real-world
              insights, and clear direction to achieve your goals faster.
            </p>

            <Link to="/mentors" className="bg-primary text-white px-8 py-4 rounded-full shadow-md hover:shadow-lg transition">
              Get Started
            </Link >
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:w-1/3">
            <div className="absolute -inset-6 bg-primary/10 rounded-[40px] -rotate-3"></div>
            <div className="relative bg-white rounded-[32px] p-2 shadow-xl">
              <img
                src="/img2.jpg"
                alt="Mentee"
                className="rounded-[24px] object-cover"
              />
            </div>

            {/* Status Card */}
            <div className="absolute -top-6 right-6 bg-white rounded-lg shadow-md px-4 py-2">
              <div className="text-xs font-semibold text-primary">New Match</div>
              <div className="text-xs text-muted">2 min ago</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
