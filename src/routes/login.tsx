import { useNavigate } from "react-router-dom";
import type { Credentials } from "../types/types";
import { useState } from "react";

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
    
    //Update to also check password
    const response = await fetch(`http://localhost:8080/api/user/login/${credentials.username}`,
      {
        method: "POST",headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify(credentials.username)
      },
    )
    if (response.ok) {
      const user = await response.json()
      console.log(user.id);
      localStorage.setItem('user', JSON.stringify(user))
      navigate(`/UserDashboard`)
        
    } else {
        const error = await response.text()
        console.log("error: ", error);
        alert("something went wrong");
    }
  };

  return (
    <main>
      <h1>Glad to see you back</h1>
      <h1>Lets take your time</h1>
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