import { Link, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import CustomLink from "./components/CustomLink";
import Layout1 from "./components/Layout-1/Layout1";
import Layout2 from "./components/Layout-2/Layout2";
import Layout3 from "./components/Layout-3/Layout3";

function App() {
  return (
    <div className="container">
      <div className="navbar">
        <CustomLink className="layout-btn btn1" to='/'>Layout 1</CustomLink>
        <CustomLink className="layout-btn btn2" to='/layout2'>Layout 2</CustomLink>
        <CustomLink className="layout-btn btn3" to='/layout3'>Layout 3</CustomLink>
      </div>
      <Routes >
        <Route path="/" element={<Layout1></Layout1>}></Route>
        <Route path="/layout2" element={<Layout2></Layout2>}></Route>
        <Route path="/layout3" element={<Layout3></Layout3>}></Route>
      </Routes>
    </div>
  );
}

export default App;
