import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../hooks/useAxios";
import useAuth from "../hooks/useAuth";
import Loading from "./Loading";
import { toast } from "react-hot-toast";
import {
  Briefcase,
  Clock,
  Star,
  ShieldCheck,
  Check,
  Users,
  MessageCircle,
  TrendingUp,
  Award,
} from "lucide-react";

const MentorDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axios = useAxios();
  const navigate = useNavigate();
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isBooking, setIsBooking] = useState(false);

  // 1. Fetch Mentor Profile
  const { data: mentor, isLoading: mentorLoading } = useQuery({
    queryKey: ["mentorDetails", id],
    queryFn: async () => {
      const res = await axios.get(`/mentors/${id}`);
      return res.data;
    },
  });

  // 2. Fetch Live Slots for this Mentor
  const { data: liveSlots = [], isLoading: slotsLoading } = useQuery({
    queryKey: ["mentorSlots", id],
    queryFn: async () => {
      const res = await axios.get(`/slots/${id}`);
      return res.data;
    },
  });

  // 3. Handle Booking & Payment Redirect
  const handleBooking = async () => {
    if (!user) {
      toast.error("Please login to book a session");
      return navigate("/login");
    }

    setIsBooking(true);
    const bookingData = {
      mentorId: id,
      mentorEmail: mentor?.email,
      mentorName: mentor?.displayName || mentor?.name,
      studentEmail: user?.email,
      studentName: user?.displayName,
      slotId: selectedSlot._id,
      slotTime: `${selectedSlot.date} at ${selectedSlot.startTime}`,
      price: parseFloat(mentor?.price || 0),
      status: "pending",
      bookedAt: new Date(),
    };

    try {
      const res = await axios.post("/bookings", bookingData);
      if (res.data.insertedId) {
        toast.success("Redirecting to secure payment...");
        // This is where you would call your SSLCommerz backend route
        window.location.replace(`http://localhost:5000/payment/init?bookingId=${res.data.insertedId}`);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Booking failed. Try again.");
    } finally {
      setIsBooking(false);
    }
  };

  if (mentorLoading || slotsLoading) return <Loading />;

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LEFT SIDE: Content */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Header Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <img
                src={mentor?.photoURL || mentor?.image || "https://i.pravatar.cc/150"}
                className="w-32 h-32 rounded-2xl object-cover ring-4 ring-primary/5 shadow-lg"
                alt={mentor?.displayName}
              />
              <div className="flex-1">
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h1 className="text-3xl font-bold text-slate-900">
                    {mentor?.displayName || mentor?.name || "Premium Mentor"}
                  </h1>
                  {mentor?.isApproved && <ShieldCheck className="text-blue-500" size={24} />}
                </div>
                <p className="text-primary font-semibold text-lg flex items-center justify-center md:justify-start gap-2">
                  <Briefcase size={18} /> {mentor?.company || "Tech Industry Expert"}
                </p>

                <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                  <span className="flex items-center gap-1 text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    <Star className="text-amber-400 fill-amber-400" size={16} />
                    {mentor?.rating || 4.8} ({mentor?.reviewCount || 12} reviews)
                  </span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm font-medium bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                    <Clock size={16} /> 60 Min Session
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Bio</h3>
              <p className="text-slate-600 leading-relaxed whitespace-pre-line text-lg">
                {mentor?.bio || "No biography provided yet. This mentor is currently updating their profile details."}
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Expertise</h3>
              <div className="flex flex-wrap gap-2">
                {mentor?.expertise?.length > 0 ? (
                  mentor.expertise.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-primary/5 text-primary font-bold rounded-xl text-sm border border-primary/10">
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-slate-400 italic">No expertise listed</span>
                )}
              </div>
            </div>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 bg-white rounded-3xl border border-slate-100 text-center shadow-sm">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="text-emerald-600" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-900">50+</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Students Helped</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 text-center shadow-sm">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="text-blue-600" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-900">99%</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Response Rate</p>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-slate-100 text-center shadow-sm">
              <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="text-purple-600" size={20} />
              </div>
              <p className="text-2xl font-bold text-slate-900">Top 5%</p>
              <p className="text-xs text-slate-500 uppercase font-bold tracking-wider">Mentor Rank</p>
            </div>
          </div>

          {/* Value Propositions */}
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-primary" size={24} /> Session Deliverables
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "1-on-1 Personalized Coaching",
                "Code Review & Practical Feedback",
                "Actionable Career Roadmap",
                "Unlimited Q&A within Session",
                "Exclusive Learning Resources",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <Check size={18} className="text-emerald-500" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Booking Card */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-6">
            <div>
              <p className="text-slate-400 font-bold uppercase text-[10px] tracking-widest mb-1">Total Investment</p>
              <h2 className="text-5xl font-black text-slate-900">
                ${mentor?.price || 0}<span className="text-lg text-slate-400 font-normal">/hr</span>
              </h2>
            </div>

            <div className="space-y-4">
              <p className="font-bold text-slate-800 flex items-center gap-2">
                <Clock size={18} className="text-primary" /> Pick a Time Slot
              </p>

              <div className="max-h-72 overflow-y-auto space-y-2 pr-2 scrollbar-hide">
                {liveSlots.length > 0 ? (
                  liveSlots.map((slot) => (
                    <button
                      key={slot._id}
                      onClick={() => setSelectedSlot(slot)}
                      className={`w-full p-4 rounded-2xl border-2 font-bold text-left transition-all duration-300 ${
                        selectedSlot?._id === slot._id
                          ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]"
                          : "border-slate-100 bg-slate-50 text-slate-600 hover:border-primary/40"
                      }`}
                    >
                      <div className="text-sm">{slot.date}</div>
                      <div className="text-xs opacity-70 font-medium">{slot.startTime} - {slot.endTime}</div>
                    </button>
                  ))
                ) : (
                  <div className="py-12 text-center bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                    <p className="text-slate-400 text-sm italic">No slots available currently</p>
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={handleBooking}
              disabled={!selectedSlot || isBooking}
              className={`w-full h-16 rounded-2xl font-bold text-lg transition-all shadow-xl active:scale-95 flex items-center justify-center gap-2 ${
                !selectedSlot || isBooking
                  ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
              }`}
            >
              {isBooking ? <span className="loading loading-spinner"></span> : "Confirm & Book Now"}
            </button>
            
            <div className="pt-4 border-t border-slate-100">
              <p className="text-center text-[10px] text-slate-400 font-bold uppercase tracking-tighter">
                🔒 Secure SSL Encryption • Instant Confirmation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;