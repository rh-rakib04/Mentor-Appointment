import React from "react";
import { Link } from "react-router";

const MentorCard = ({ mentor }) => {
  return (
    <div className="card bg-main shadow-sm border border-primary/20 hover:shadow-xl transition-all font-sans">
      <div className="card-body p-6">
        <div className="flex items-start gap-4">
          <div className="avatar">
            <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100">
              {/* Fallback to photoURL if image is missing, then to a placeholder */}
              <img 
                src={mentor?.photoURL || mentor?.image || "https://i.pravatar.cc/150"} 
                alt={mentor?.displayName || "mentor"} 
                onError={(e) => { e.target.src = "https://i.pravatar.cc/150"; }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold">{mentor?.displayName || "Anonymous Mentor"}</h2>
            <div className="flex items-center text-accent mt-1">
              <span>★ {mentor?.rating || 4.5} </span>{" "}
              <span className="text-muted text-xs ml-1">
                ({mentor?.reviewCount || 120} reviews)
              </span>
            </div>
          </div>
        </div>

        <p className="text-sm text-muted mt-4 line-clamp-2">
          {mentor?.bio || "No bio available for this mentor."}
        </p>

        <div className="flex flex-wrap gap-2 mt-4">
          {/* Check if expertise exists and has items before mapping */}
          {mentor?.expertise && mentor.expertise.length > 0 ? (
            mentor.expertise.map((exp, index) => (
              <span
                key={index}
                className="badge badge-accent badge-sm text-primary border-none"
              >
                {exp}
              </span>
            ))
          ) : (
            <span className="text-xs text-slate-400 italic">No expertise listed</span>
          )}
        </div>

        <div className="card-actions justify-between items-center mt-6 pt-4 border-t border-soft">
          <span className="text-lg font-bold">
            ${mentor?.price || 0}
            <span className="text-xs text-muted">/session</span>
          </span>
          <Link to={`/mentor/${mentor?._id}`} className="btn btn-sm">
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;