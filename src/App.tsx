import './App.css'
import Homepage from "./routes/homepage";
import Login from "./routes/login";
import Register from "./routes/register";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/" element={<Login />} />
    <Route path="/" element={<Register />} />
  <Route path="*" element={<h1>404 Not found</h1>}/>
  </Routes>
    </BrowserRouter>
  )
}

export default App;
