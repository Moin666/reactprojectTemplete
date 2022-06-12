import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "../../pages/login";
import SignUp from "../../pages/singup";
import Home from "../../pages/home";
import Dashboard from "../../pages/dashboar";


function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        {/* <Route path="/home/:id" element={<Home />}></Route> */}
        <Route path="/dash/:id" element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default Routing;
