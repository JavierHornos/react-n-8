//import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import './home.scss'
import { BsEmojiSmile } from 'react-icons/bs';
function CantUsuarios() {


  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("https://digitaldrinks.onrender.com/api/users");
      const data = await response.json();
      setProductos(data.total);
    }

    fetchdata();
  }, []);

  return (
    <div>
    <div class="text-xs font-weight-bold text-warning text-uppercase mb-1"> Cantidad de Usuarios <div className="icon"><BsEmojiSmile/></div></div>
    <h4>{productos}</h4>
    </div>

    
  );
}

export default CantUsuarios;