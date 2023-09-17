import { uploadFile } from "@/api";
import { toast } from "@/components/ui/use-toast";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const upload = async (file: File) => {
  try {
    console.log(file);
    return uploadFile(file);
  } catch (error) {
    throw error;
  }
};

export const useUpload = () => {
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
