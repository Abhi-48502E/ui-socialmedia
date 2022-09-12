import Home from './Pages/Home';
import './App.css';
import Profile from './Components/Profile/Profile';
import Login from './Pages/login/Login';
import Register from './Pages/Register/Register';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Midd from './Components/Midd/Midd';



function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}>
          </Route>
          <Route path="/login" element={<Login />} >
          </Route>
          <Route path="/register" element={<Register />} >
          </Route>
          <Route path="/profile/:username" element={<Profile />} >
          </Route>
          <Route path="/connectmovies" element={<Midd/>} >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
