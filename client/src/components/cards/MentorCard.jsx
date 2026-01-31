import React from 'react';

const MentorCard = () => {
    return (
        <div className="card bg-main shadow-sm border border-primary/20 hover:shadow-xl transition-all font-sans">
    <div className="card-body p-6">
      <div className="flex items-start gap-4">
        <div className="avatar">
          <div className="w-16 h-16 rounded-xl">
            <img src="https://i.pravatar.cc/150?u=dev" alt="mentor" />
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold">Alex Rivera</h2>
          <p className="text-primary text-xs font-medium">
            Senior Product Designer
          </p>
          <div className="flex items-center text-accent mt-1">
            <span>★ 4.9</span>{" "}
            <span className="text-muted text-xs ml-1">(120 reviews)</span>
          </div>
        </div>
      </div>

      <p className="text-sm text-muted mt-4 line-clamp-2">
        Helping early-career designers master Figma and land their first role at
        top tech companies.
      </p>

      <div className="flex flex-wrap gap-2 mt-4">
        <span className="badge badge-accent badge-sm text-primary border-none">
          UI/UX
        </span>
        <span className="badge badge-accent badge-sm text-primary border-none">
          Figma
        </span>
      </div>

      <div className="card-actions justify-between items-center mt-6 pt-4 border-t border-soft">
        <span className="text-lg font-bold">
          $40<span className="text-xs text-muted">/session</span>
        </span>
        <button className="btn btn-sm">View Profile</button>
      </div>
    </div>
  </div>
    );
};

export default MentorCard;