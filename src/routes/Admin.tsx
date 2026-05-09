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
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Time spent the last 30 days: Hr:Min:Sec</th>
            </tr>
          </thead>
          <tbody>
            {userDurations.map((user) => (
              <tr>
                <td>{user.username}</td>
                <td>{calculateTime(user.totalDuration)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
