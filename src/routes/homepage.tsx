import { useNavigate } from "react-router-dom";
import "../css/homepage.css";

function homepage() {
  const navigate = useNavigate();
  return (
    <main>
      <h1>Welcome to the TajmTrackR</h1>
      <section>
        <button className="mainButton" onClick={() => navigate(`/login`)}>
          Login
        </button>
        <button className="mainButton" onClick={() => navigate(`/register`)}>
          Register
        </button>
        <button className="mainButton" onClick={() => navigate(`/userdashboard`)}>
          Guest
        </button>
      </section>
    </main>
  );
}

export default homepage;
