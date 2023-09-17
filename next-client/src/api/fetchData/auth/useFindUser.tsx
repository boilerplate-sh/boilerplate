import { fetchData } from "@/api";
import { User } from "@/types/user";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";

interface UserResponse {
  message: string;
  user: User;
  token: string;
}

const findUser = async () => {
  if (!localStorage.getItem("token")) return null;
  return await fetchData("/auth/user");
};

export const useFindUser = (): UseQueryResult<
  AxiosResponse<UserResponse, any>,
  unknown
> => {
  return useQuery(["user"], findUser, {
    retry: false,
    refetchOnWindowFocus: false,
  });
};
