import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Project from "./pages/Project";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/sign-in" element={<Signin/>}/>
          <Route path="/sign-up" element={<Signup/>}/>
          <Route path="/project" element={<Project/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;