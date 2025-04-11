import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import postType from "./types/postType";


export default function usePost<T = postType>(url: string) {
    
    const mutation = useMutation<T, unknown, any>({
        mutationFn: async(data) => {
            if(!data) return;
            const response = await axiosInstance.post(url, data);
            return response.data;
        },
    })

  return mutation;
}