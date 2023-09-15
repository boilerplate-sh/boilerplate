import { postData } from "@/api";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const upload = async (file: File) => {
  try {
    return postData("/media/upload", file);
  } catch (error) {
    throw error;
  }
};

export const useUploadMedia = () => {
  return useMutation(upload, {
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
