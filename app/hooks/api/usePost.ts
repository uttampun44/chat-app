import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export default function usePost<T = any>(url: string) {
    
    const mutation = useMutation<T, unknown, any>({
        mutationFn: async(data) => {
            const response = await axiosInstance.post(url, data);
            return response.data;
        },
        onSuccess: (data) => {
            toast.success("Data posted successfully");
        },
        onError: (error) => {
            toast.error("Something went wrong");
        },
    })

  return mutation;
}