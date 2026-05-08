import { useNavigate } from "react-router-dom";
import type { Credentials } from "../types/types.tsx";
import { useState } from "react";
import { url } from "../data.tsx";

function LoginAdmin() {
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
    const response = await fetch(
      `${url}api/user/login/${credentials.username}`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify( {username, password}),
      },
    );
    if (response.ok) {
      const user = await response.json();
      localStorage.setItem("user", JSON.stringify(user));
      navigate(`/UserDashboard`);
    } else {
      const error = await response.text();
      console.log("error: ", error);
      alert("something went wrong");
    }
  };

  return (
    <main>
      <h1>Welcome Admin</h1>
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

          <button
            type="submit"
            className="mainButton"
            onClick={handleCredentials}
          >
            Login
          </button>
        </form>
      </section>
    </main>
  );
}
export default LoginAdmin;
