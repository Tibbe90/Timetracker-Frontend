import { useNavigate } from "react-router-dom";
import { url } from "../data.tsx";
import { useEffect, useState } from "react";
import type { UserDurations } from "../types/types.tsx";

function useAdminData() {
  const navigate = useNavigate();
  const [adminData, setAdminData] = useState<UserDurations[]>([])

  useEffect(() => {


    const getData = async () => {
      const response = await fetch(
      `${url}api/user/admin`,
      {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
    if (response.ok) {
      const data = await response.json()
      setAdminData(data)
    } else {
        alert("it looks like you're not an admin");
      navigate(`/UserDashboard`);
    }
  };
    getData()
  }, [])
return adminData
}
export default useAdminData;
