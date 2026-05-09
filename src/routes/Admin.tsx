import { useNavigate } from "react-router-dom";
import type { UserDurations } from "../types/types";
import useAdminData from "../hooks/useAdminData";

function Admin() {
  const navigate = useNavigate();
  const userDurations: UserDurations[] = useAdminData();

  const calculateTime = (duration: number) => {
    const totalHours = Math.floor(duration / 3600000);
    const totalMinutes = Math.floor((duration % 3600000) / 60000);
    const totalSeconds = Math.floor((duration % 60000) / 1000);
    return `${totalHours}:${totalMinutes}:${totalSeconds}`;
  };

  return (
    <div>
      <h1>Welcome Admin</h1>
      <h2>Statistics from the last 30 days are here</h2>
      <div>
        <button className="button" onClick={() => navigate("/userdashboard")}>
          Return to Dashboard
        </button>
      </div>
      <div style={{ textAlign: "center" }}>
        <table style={{ margin: "0 auto"}}>
          <thead>
            <tr style={{borderBottom: "1px solid #020070"}}>
              <th style={{ width: "200px" }}>Username</th>
              <th style={{ width: "200px" }}>Hr:Min:Sec</th>
            </tr>
          </thead>
          <tbody>
            {userDurations.map((user) => (
              <tr style={{ borderRight: "1px solid #020070",  borderLeft: "1px solid #020070", borderBottom: "1px solid #020070"}}>
                <td style={{ borderRight: "1px solid #020070"}}>{user.username}</td>
                <td style={{ padding: "8px 16px" }}>{calculateTime(user.totalDuration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
