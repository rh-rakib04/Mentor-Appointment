import React, { useState } from "react";
import { useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import Loading from "./Loading";
import { 
  GraduationCap, Briefcase, Languages, Target, 
  FileCheck, Video, MessageSquare, Award 
} from "lucide-react";

const MentorDetails = () => {
  const { id } = useParams();
  const axios = useAxios();
  const [selectedSlot, setSelectedSlot] = useState(null);

  const { data: mentor, isLoading } = useQuery({
    queryKey: ["mentorDetails", id],
    queryFn: async () => {
      const res = await axios.get(`/mentors/${id}`);
      return res.data;
    },
  });

  const slots = ["Mon, 10:00 AM", "Mon, 02:00 PM", "Tue, 09:30 AM"];

  if (isLoading) return <Loading />;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 font-ubuntu">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT: Deep Details (8 Columns) */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Main Info Card */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 flex gap-6 items-center">
            <img src={mentor?.image} className="w-32 h-32 rounded-full ring-4 ring-primary/10" alt="" />
            <div>
               <h1 className="text-3xl font-bold text-slate-900">{mentor?.name}</h1>
               <p className="text-primary font-bold flex items-center gap-2 mt-1">
                 <Briefcase size={18}/> {mentor?.role} @ {mentor?.company}
               </p>
               <div className="flex gap-4 mt-4 text-sm text-slate-500 font-medium">
                  <span className="flex items-center gap-1"><Languages size={16}/> English, Bengali</span>
                  <span className="flex items-center gap-1"><Target size={16}/> 5+ Yrs Exp</span>
               </div>
            </div>
          </div>

          {/* Deliverables Section - Crucial for Student Decision */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
               <Award className="text-secondary" /> What we'll achieve together
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: <Video size={20}/>, text: "1-on-1 Live Video Call" },
                { icon: <FileCheck size={20}/>, text: "Personalized Roadmap" },
                { icon: <MessageSquare size={20}/>, text: "Post-session Q&A support" },
                { icon: <Award size={20}/>, text: "Certificate of completion" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Bio */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-3">About the Mentor</h3>
              <p className="text-slate-600 leading-relaxed text-lg">{mentor?.bio}</p>
            </div>
            
            <div className="pt-6 border-t">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <GraduationCap className="text-secondary" /> Education & Background
              </h3>
              <ul className="space-y-3">
                <li className="flex justify-between items-center text-slate-700">
                   <span className="font-bold">B.Sc. in Computer Science</span>
                   <span className="text-slate-400">Dhaka University</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT: Pricing & Payment (4 Columns) */}
        <div className="lg:col-span-4">
          <div className="sticky top-20 bg-white p-8 rounded-2xl border-2 border-primary/20 shadow-xl space-y-6">
            <div>
               <p className="text-slate-400 font-bold uppercase text-xs tracking-widest mb-1">Price per session</p>
               <h2 className="text-5xl font-black text-slate-900">${mentor?.price}</h2>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-slate-800">Pick a starting time:</p>
              {slots.map(slot => (
                <button 
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`w-full p-4 rounded-xl border-2 font-bold text-left transition-all ${
                    selectedSlot === slot ? "bg-primary text-white border-primary" : "border-slate-100 bg-slate-50 text-slate-600"
                  }`}
                >
                  {slot}
                </button>
              ))}
            </div>

            <button 
              disabled={!selectedSlot}
              className="w-full h-16 bg-slate-900 text-white rounded-xl font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all disabled:bg-slate-200"
            >
              Confirm & Pay Now
            </button>
            <p className="text-center text-[10px] text-slate-400 font-bold uppercase">Safe & Secure Payment via SSLCommerz</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MentorDetails;