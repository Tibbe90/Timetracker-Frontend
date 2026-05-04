import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Credentials } from "../types/types";
const url = "http://localhost:8080/login"


function login() {
   const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleCredentials = () => {
    setCredentials({
      username,
      password,
    });
  };

  const loginUser = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const userData = new FormData
    userData.append('username', username)
    userData.append('password', password)
    
    const response = await fetch(`${url}`,
      {
        method: "POST",
        credentials:"include",
        body: new URLSearchParams({ username, password })
        // body: userData
      },
    )
    if (response.ok) {
        navigate(`/`)
    } else {
        const error = await response.text()
        console.log("error: ", error);
        console.log("userdata: ", userData)
        alert("something went wrong");
    }
  };

  return (
    <main>
      <h1>Glad to see you back</h1>
      <h1>Take your time</h1>
      <section>
        <form onSubmit={loginUser}>
          <input
            type="text"
            required
            placeholder="enter your username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="mainButton" onClick={handleCredentials}>
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
export default login