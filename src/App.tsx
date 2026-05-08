import './App.css'
import Homepage from "./routes/homepage";
import History from "./routes/history";
import Login from "./routes/login";
import Register from "./routes/register";
import UserDashboard from './routes/userdashboard';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import TimerList from './routes/timerList';
import LoginAdmin from './routes/LoginAdmin';

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/LoginAdmin" element={<LoginAdmin />} />
    <Route path="/register" element={<Register />} />
    <Route path="/userdashboard" element={<UserDashboard />} />
    <Route path="/history" element={<History />} />
    <Route path='/timerList' element={<TimerList />} />
  <Route path="*" element={<h1>404 Not found</h1>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App;
