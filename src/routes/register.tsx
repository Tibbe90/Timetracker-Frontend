import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/homepage.css";
import type { NewUser } from "../types/types";
const url = "http://localhost:8080/api/user/register";

function register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [validatePassword, setValidatePassword] = useState<string>("");
  const [newUser, setNewUser] = useState<NewUser>({
    username: "",
    email: "",
    password: "",
  });

  const handleNewUser = () => {
    setNewUser({
      username,
      email,
      password,
    });
  };

  const saveUser = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password != validatePassword) {
      alert("Passwords don't match");
    }
    fetch(
      `${url}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newUser,
        }),
      },
    )
      .then((response: Response) => response.json())
      .then(data => {
        console.log(data);
        
        navigate(`/`)
      })
      .catch((err) => {
        console.log(err);
        alert("something went wrong");
      });
  };

  return (
    <main>
      <h1>Happy to see that you want to join us</h1>
      <section>
        <form onSubmit={saveUser}>
          <input
            type="text"
            required
            placeholder="enter your username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="email"
            required
            placeholder="enter your email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="enter your password"
            name="password"
            value={validatePassword}
            onChange={(e) => setValidatePassword(e.target.value)}
          />

          <input
            type="password"
            required
            placeholder="re-enter your password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="mainButton" onClick={handleNewUser}>
            Complete Registration
          </button>
        </form>
      </section>
    </main>
  );
}

export default register;
