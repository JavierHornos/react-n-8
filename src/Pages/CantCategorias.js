//import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import { FaWpforms } from 'react-icons/fa';

function BodyOnlyExample() {


  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("https://digitaldrinks.onrender.com/api/categorias");
      const data = await response.json();
      setProductos(data.total);
    }

    fetchdata();
  }, []);

  return (
    <div>
    <div class="text-xs font-weight-bold text-success text-uppercase mb-1"> Cantidad de Categorias <div className= 'icon'><FaWpforms /></div>
      
    </div>
    <h4>{productos}</h4>
    </div>
    
  );
}

export default BodyOnlyExample;