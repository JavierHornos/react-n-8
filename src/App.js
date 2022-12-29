import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Productos from "./Pages/Productos";
import CantProd from "./Pages/CantProd";
import Usuarios from "./Pages/Usuarios";
import CantUser from "./Pages/CantUser";

function App() {
  return (

    // <div className="container-fluid" >
    //   <h2 className="text-center" >Lista de Usuarios</h2>
    //   <Usuarios/>
    //   <Productos/>
    // </div>

    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />

        <div className="content" >
          <Routes>
          <Route path="/" exact={true} element={<Home/>} />
          <Route path="/productos" exact={true} element={<Productos/>} />
          <Route path="/cantProd" exact={true} element={<CantProd/>} />
          <Route path="/Usuarios" exact={true} element={<Usuarios/>} />
          <Route path="/cantUser" exact={true} element={<CantUser/>} />
          </Routes>
        </div>
        
      </div>
    </Router>

   
  );
}

export default App;
