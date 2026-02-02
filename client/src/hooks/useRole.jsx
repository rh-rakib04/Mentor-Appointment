import React from "react";
import useAuth from "./useAuth";
import useAxios from "./useAxios";
import { useQuery } from "@tanstack/react-query";

const useRole = () => {
  const { user } = useAuth();
  const axios = useAxios();
  const { isLoading: roleLoading, data: role = [] } = useQuery({
    queryKey: ["role", user?.email],
    queryFn: async () => {
      const result = await axios.get(`/users/role?email=${user?.email}`);
      return result.data.role;
    },
  });
  return { role, roleLoading };
};

export default useRole;
