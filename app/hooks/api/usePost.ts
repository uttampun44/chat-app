import axiosInstance from "@/lib/axiosGet";
import { useEffect, useState } from "react";

export default function usePost(url: string, data: any){
    const [postData, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axiosInstance.post(url, data);
            setData(response.data);
        };
        fetchData();
    }, [url, data, postData]);

    return { data, postData};
}