import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

export default function usePost<T = any>(url: string, config?: Record<string, string>) {
    
    const mutation = useMutation<T, unknown, any>({
        mutationFn: async(data) => {
            const response = await axiosInstance.post(url, data, config);
            return response.data;
        },   
    })

  return mutation;
}