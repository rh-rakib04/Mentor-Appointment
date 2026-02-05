import React from "react";
import { Mail, MapPin, Phone, Send, Clock } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      {/* 1. Header Section */}
      <section className="bg-primary py-20 px-6 text-center text-white">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-4xl lg:text-5xl font-bold font-merienda mb-4 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-lg opacity-90 font-light max-w-2xl mx-auto">
            Have questions about mentorship? Our team is here to help you
            navigate your journey toward professional growth.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Area */}
      <section className="py-16 px-6 container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="text-2xl font-bold font-merienda text-primary mb-4">
                Contact Details
              </h2>
              <p className="text-muted mb-8">
                Reach out via any of these channels. We typically respond within
                24 hours.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-secondary p-3 rounded-xl text-primary shadow-sm">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral">
                    Visit Our Office
                  </h4>
                  <p className="text-muted text-sm mt-1 leading-relaxed">
                    123 Mentor St, Innovation District
                    <br />
                    Tech City, TC 5678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-secondary p-3 rounded-xl text-primary shadow-sm">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral">
                    Email Support
                  </h4>
                  <p className="text-muted text-sm mt-1">
                    support@mentorconnect.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-secondary p-3 rounded-xl text-primary shadow-sm">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-neutral">Call Us</h4>
                  <p className="text-muted text-sm mt-1">+1 (555) 000-MENTOR</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-10 border-t border-primary/30">
              <h4 className="font-bold text-xs mb-5 uppercase tracking-[0.2em] text-muted">
                Join the Community
              </h4>
              <div className="flex gap-3">
                <button className="btn btn-square btn-outline btn-accent hover:bg-accent hover:text-white transition-all">
                  <FaLinkedinIn size={18} />
                </button>
                <button className="btn btn-square btn-outline btn-accent hover:bg-accent hover:text-white transition-all">
                  <FaTwitter size={18} />
                </button>
                <button className="btn btn-square btn-outline btn-accent hover:bg-accent hover:text-white transition-all">
                  <FaInstagram size={18} />
                </button>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="lg:col-span-2">
            <div className="card bg-base shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-accent/20 p-8 md:p-12 rounded-3xl">
              <form className="grid md:grid-cols-2 gap-8 text-white">
                <div className="form-control">
                  <label className="label font-semibold text-xs uppercase text-muted tracking-wider">
                    First Name
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="John"
                    className="input input-bordered bg-accent/10 text-black  border-none focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="form-control">
                  <label className="label font-semibold text-xs uppercase text-muted tracking-wider">
                    Last Name
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="Doe"
                    className="input input-bordered bg-accent/10 text-black  border-none focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>
                <div className="form-control md:col-span-2">
                  <label className="label font-semibold text-xs uppercase text-muted tracking-wider">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="input input-bordered bg-accent/10 text-black  border-none focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div className="form-control md:col-span-2">
                  <label className="label font-semibold text-xs uppercase text-muted tracking-wider">
                    Message
                  </label>{" "}
                  <br />
                  <textarea
                    className="textarea textarea-bordered text-black bg-accent/10 border-none focus:ring-2 focus:ring-primary focus:outline-none h-40"
                    placeholder="Describe how we can help you..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="btn bg-accent text-black btn-block border-none font-bold h-14 rounded-xl flex gap-2">
                    <Send size={18} /> Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ Section */}
      <section className=" py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-merienda text-primary mb-4">
              Common Questions
            </h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="collapse collapse-plus bg-main border border-secondary/20 rounded-2xl"
              >
                <input
                  type="radio"
                  name="faq-accordion"
                  defaultChecked={index === 0}
                />
                <div className="collapse-title text-lg font-bold py-5 px-8">
                  {item.q}
                </div>
                <div className="collapse-content px-8 pb-5">
                  <p className="text-muted leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const faqItems = [
  {
    q: "How do I start as a mentee?",
    a: "Simply browse our mentors list, find an expert that matches your needs, and use the 'Book Session' button on their profile to see available times.",
  },
  {
    q: "Is there a free trial session?",
    a: "Many mentors offer a 15-minute introductory call for free. Look for the 'Introductory Session' tag on mentor profiles.",
  },
  {
    q: "Can I cancel a booking?",
    a: "Yes, you can cancel or reschedule through your dashboard. Full refunds are available if you cancel at least 24 hours before the session.",
  },
];

export default Contact;
