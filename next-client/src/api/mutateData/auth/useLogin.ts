"use client";
import { postData } from "@/api";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const login = async (data: Record<string, any>) => {
  try {
    return await postData("/auth/login", data);
  } catch (error) {
    throw error;
  }
};

export const useLogin = () => {
  return useMutation(login, {
    onSuccess: () => {},
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
