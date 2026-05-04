import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/homepage.css";
import type { newUser, user } from "../types/types";

function login() {
    const navigate = useNavigate();
    const [newUser, setNewUser] = useState<newUser>()

    const saveUser = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`https://seashell-backend-m5vt7.ondigitalocean.app/api/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newUser,
            }),
        })
        .then((response: Response) => response.json())
        .then((createdUser: user) => {
            setNewUser
        })

    }

    return(
        <main>
            <h1>Happy to see you want to join us</h1>
            <section>
                <form onSubmit={saveUser}>
                    <input type="text" required name="username" placeholder="enter your username" value={newUser?.username} />
                </form>
                <button type="submit" className="mainButton" onClick={() => navigate("/")}>Complete Registration</button>
            </section>
        </main>
    )
}

export default login;