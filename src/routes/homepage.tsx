import { useNavigate } from "react-router-dom";
import "../css/homepage.css";

function homepage() {
    const navigate = useNavigate();
    return(
        <main>
            <h1>Welcome to the TajmTrackR</h1>
            <section>
            <button className="mainButton" >Login</button>
                <button className="mainButton" onClick={() => navigate(`/register`)}>Register</button>
            </section>
        </main>
    )
}

export default homepage;