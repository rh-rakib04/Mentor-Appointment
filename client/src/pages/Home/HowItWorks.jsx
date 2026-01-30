import React from "react";

const steps = [
  {
    id: 1,
    title: "Choose a Mentor",
    description: "Pick a mentor based on your learning goal.",
  },
  {
    id: 2,
    title: "Book a Time Slot",
    description: "Select a date and time that works for you.",
  },
  {
    id: 3,
    title: "Join 1:1 Session",
    description: "Get personalized guidance via video or chat.",
  },
];

function HowItWorks() {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
        <p className="text-gray-600 mt-2">
          Follow 3 simple steps to start learning
        </p>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-8">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-400 flex-1"
            >
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center  mx-auto">
                {step.id}
              </div>
              <h3 className="mt-4 font-semibold text-xl text-gray-800">
                {step.title}
              </h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
