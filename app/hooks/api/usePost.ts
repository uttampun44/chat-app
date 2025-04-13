import axiosInstance from "@/lib/axiosInstance";
import { useMutation } from "@tanstack/react-query";

interface RequestConfig {
    headers?: Record<string, string>;
    [key: string]: any;
}

export default function usePost<T = any>(url: string,) {
    
    const mutation = useMutation<T, unknown, RequestConfig>({
        mutationFn: async({headers, ...data}) => {
            const response = await axiosInstance.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    ...headers
                }
            });
            return response.data;
        },   
    })

  return mutation;
}