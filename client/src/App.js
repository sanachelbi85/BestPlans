import './App.css';
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";



function App() {
  return (
    <div className="App">
<Register />
     

      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login"  element={<Login />} />
      </Routes>
        
     
    </div>
  );
}

export default App;
