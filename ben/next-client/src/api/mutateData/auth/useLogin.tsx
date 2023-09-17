"use client";
import { postData } from "@/api";
import { toast } from "@/components/ui/use-toast";
import { AuthContext } from "@/context/AuthProvider";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";

const login = async (data: Record<string, any>) => {
  try {
    return await postData("/auth/login", data);
  } catch (error) {
    throw error;
  }
};

export const useLogin = () => {
  const { setUser } = useContext(AuthContext);
  const router = useRouter();

  return useMutation(login, {
    onSuccess: (res) => {
      localStorage.setItem("token", res.data?.token);
      setUser(res.data?.user);
      router.push("/");
    },
    onError: (error: Error | AxiosError) => {
      if (axios.isAxiosError(error)) {
        const errorMessage =
          error.response?.data?.message || "An error occurred";
        toast({
          description: errorMessage,
          variant: "destructive",
        });
      }
    },
  });
};
