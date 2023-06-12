import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const UseAdmin = () => {
    const {user} = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const {data: isAdmin} = useQuery({
        queryKey: ['isAdmin', user?.email],
        queryFn: async () =>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            console.log('is admin response', res);
            return res.data.admin
        }
    })

    return [isAdmin]
};

export default UseAdmin;