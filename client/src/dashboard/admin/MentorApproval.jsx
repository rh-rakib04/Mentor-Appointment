import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import { CheckCircle, XCircle, Eye } from "lucide-react";

const MentorApprovals = () => {
  const axiosSecure = useAxios();

  // 1. Fetch only pending mentors
  const {
    data: pendingMentors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["pending-mentors"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/pending-mentors");
      console.log(res.data);
      return res.data;
    },
  });

  // 2.  approve
  const approveMentor = async (id) => {
    try {
      const res = await axiosSecure.patch(`/users/approve/${id}`);
      Swal.fire("Success", "Mentor has been approved!", "success");
      refetch();
    } catch (error) {
      Swal.fire("Error", "Failed to approve mentor.", "error");
    }
  };
  if (isLoading) return <Loading />;

  return (
    <div className="p-4 sm:p-8 bg-white rounded-3xl shadow-sm border border-slate-100">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800">
          Mentor Applications
        </h2>
        <p className="text-slate-500">
          Review and approve industry experts joining the platform.
        </p>
      </div>

      {pendingMentors.length === 0 ? (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200">
          <p className="text-slate-400 font-medium italic">
            No pending applications at the moment.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {pendingMentors.map((mentor) => (
            <div
              key={mentor._id}
              className="card bg-white border border-slate-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="card-body p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="avatar">
                    <div className="w-16 h-16 rounded-2xl ring ring-emerald-100 ring-offset-2">
                      <img src={mentor.photoURL} alt={mentor.displayName} />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-900">
                      {mentor.displayName}
                    </h3>
                    <p className="text-xs text-slate-500">{mentor.email}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-medium">Role:</span>
                    <span className="badge badge-outline badge-sm text-emerald-600 font-bold uppercase">
                      {mentor.role}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400 font-medium">Joined:</span>
                    <span className="text-slate-600">
                      {new Date(mentor.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2 mt-auto">
                  <button
                    onClick={() => approveMentor(mentor._id)}
                    className="btn btn-primary flex-1 gap-2 rounded-xl text-white"
                  >
                    <CheckCircle size={18} /> Approve
                  </button>
                  <button className="btn btn-ghost border-slate-200 flex-1 gap-2 rounded-xl text-rose-500 hover:bg-rose-50">
                    <XCircle size={18} /> Reject
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MentorApprovals;
