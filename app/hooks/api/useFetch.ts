import axiosInstance from "@/lib/axiosGet";
import { useEffect, useState } from "react";

export default function useFetch(url: string){
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosInstance.get(url);
            setData(response.data);
        };
        fetchData();
    }, [url]);

    return { data};
}