import axiosInstance from "@/lib/axiosInstance";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { toast } from "sonner"

export default function useFetch<T = any>(url: string, token?:string) {

    const fetchData = async ():Promise<T> => {
        const config = token ? { headers: { Authorization: `Bearer ${token}` } } : undefined;
        const response = await axiosInstance.get(url, config);
        return response.data;
    };

    const { isPending, isSuccess, isError, data } = useQuery<T>({
        queryKey: ["fetchData"],
        queryFn: fetchData,
    })

    useEffect(() => {
        if (isError) {
            toast.error("Something went wrong");
        }
        if (isSuccess) {
            toast.success("Data fetched successfully");
        }
        if (isPending) {
            toast.loading("Loading data...");
        }
    }, [isError, isSuccess, isPending]);
    
    return { data, isError, isPending, isSuccess };
}