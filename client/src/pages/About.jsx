import React from "react";

const About = () => {
  return (
    <div className="">
      {/* 1. Hero Section: The Mission */}
      <section className=" py-20 px-6">
        <div className="container mx-auto max-w-5xl text-center">
          <h1 className="text-4xl lg:text-6xl font-bold font-merienda text-primary mb-6">
            Bridging the Gap Between <br /> Learning and Doing.
          </h1>
          <p className="text-lg lg:text-xl text-muted max-w-3xl mx-auto leading-relaxed font-light">
            MentorConnect was born out of a simple observation: the most
            valuable knowledge isn't found in textbooks, but in the lived
            experiences of those who have already walked the path.
          </p>
        </div>
      </section>

      {/* 2. Impact Stats: Professional Trust */}
      <section className="py-12 bg-main border-y border-secondary/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary italic">
                10k+
              </div>
              <div className="text-sm uppercase tracking-widest text-muted mt-2">
                Sessions Booked
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary italic">
                500+
              </div>
              <div className="text-sm uppercase tracking-widest text-muted mt-2">
                Verified Mentors
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary italic">
                95%
              </div>
              <div className="text-sm uppercase tracking-widest text-muted mt-2">
                Success Rate
              </div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-primary italic">
                4.9/5
              </div>
              <div className="text-sm uppercase tracking-widest text-muted mt-2">
                Avg. Rating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Problem & Solution (Two-Column) */}
      <section className="py-20 px-6 container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold font-merienda mb-6 text-neutral">
              Why MentorConnect?
            </h2>
            <p className="text-muted mb-4">
              Traditional education often leaves a "practicality gap." Students
              graduate with theory but lack the industry-specific nuances that
              only a veteran professional can provide.
            </p>
            <p className="text-muted">
              We provide a structured, secure, and intuitive environment where
              curiosity meets experience. Our platform handles the scheduling,
              payments, and discovery, so you can focus on the conversation.
            </p>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-secondary/20 p-8 rounded-2xl h-48 flex items-end">
              <span className="font-bold text-primary text-xl font-merienda">
                Curated Experts
              </span>
            </div>
            <div className="bg-accent/20 p-8 rounded-2xl h-48 flex items-end translate-y-8">
              <span className="font-bold text-neutral text-xl font-merienda">
                1:1 Focus
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Our Core Values */}
      <section className=" py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold font-merienda text-center mb-16">
            Values that Drive Us
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Radical Transparency",
                desc: "No hidden fees. Verified reviews. Real identities.",
              },
              {
                title: "Knowledge Equity",
                desc: "Making high-level industry insights accessible to everyone, everywhere.",
              },
              {
                title: "Continuous Growth",
                desc: "For both mentees and mentors. We never stop learning.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="card bg-main p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-1 bg-accent mb-6"></div>
                <h3 className="text-xl font-bold mb-4 font-merienda">
                  {value.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: Join the Community */}
      <section className="py-20 px-6 text-center bg-primary text-white">
        <h2 className="text-3xl lg:text-5xl font-bold font-merienda mb-8">
          Ready to start your journey?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="btn bg-accent border-none text-neutral btn-lg px-10">
            Find a Mentor
          </button>
          <button className="btn btn-outline btn-secondary btn-lg px-10 border-white text-white">
            Become a Mentor
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;
