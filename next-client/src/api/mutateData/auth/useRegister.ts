"use client";
import { postData } from "@/api";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { redirect } from "next/navigation";

const register = async (data: Record<string, any>) => {
  try {
    return await postData("/auth/register", data);
  } catch (error) {
    throw error;
  }
};

export const useRegister = () => {
  return useMutation(register, {
    onSuccess: () => {
      toast({
        description: "Success, being redirected...",
      });
      setTimeout(() => redirect("/login"), 500);
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
