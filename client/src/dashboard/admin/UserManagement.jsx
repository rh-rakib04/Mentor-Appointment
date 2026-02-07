import React from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import { UserCheck, ShieldCheck, Trash2 } from "lucide-react";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();


  // 1. Fetch all users
  const { data: users = [], isLoading } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

 

  if (isLoading) return <Loading />;

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center">
        <h2 className="text-xl font-bold text-slate-800">User Management</h2>
        <span className="badge badge-primary font-bold">
          {users.length} Total Users
        </span>
      </div>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* Table Head */}
          <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
            <tr>
              <th className="py-4">User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-slate-600">
            {users.map((user) => (
              <tr
                key={user._id}
                className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors"
              >
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10">
                        <img src={user.photoURL} alt={user.displayName} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">
                        {user.displayName}
                      </div>
                      <div className="text-xs opacity-50">{user.email}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                      user.role === "admin"
                        ? "bg-purple-100 text-purple-600"
                        : user.role === "mentor"
                          ? "bg-emerald-100 text-emerald-600"
                          : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>

                <td>
                  {user.role === "mentor" ? (
                    <div
                      className={`flex items-center gap-1 font-medium ${user.isApproved ? "text-emerald-500" : "text-amber-500"}`}
                    >
                      {user.isApproved ? "Approved" : "Pending"}
                    </div>
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>

                <td>
                  <div className="flex gap-2">
                    {/* Approve Button (Only for Pending Mentors) */}
                    {user.role === "mentor" && !user.isApproved && (
                      <button
                        onClick={() => approveMutation.mutate(user._id)}
                        className="btn btn-sm bg-emerald-500 hover:bg-emerald-600 border-none text-white tooltip"
                        data-tip="Approve Mentor"
                      >
                        <UserCheck size={16} />
                      </button>
                    )}

                    {/* Make Admin Button */}
                    <button
                      className="btn btn-sm btn-ghost text-slate-400 hover:text-primary tooltip"
                      data-tip="Make Admin"
                    >
                      <ShieldCheck size={16} />
                    </button>

                    {/* Delete Button */}
                    <button
                      className="btn btn-sm btn-ghost text-slate-400 hover:text-rose-500 tooltip"
                      data-tip="Delete User"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManagement;
