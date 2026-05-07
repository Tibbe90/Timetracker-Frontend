import './App.css'
import Homepage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";
import UserDashboard from './routes/userdashboard';
import History from './routes/history';
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/history" element={<History />} />
  <Route path="*" element={<h1>404 Not found</h1>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App;
