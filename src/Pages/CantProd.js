import { useEffect, useState } from "react";
import { IoMdBeer } from 'react-icons/io';
function CantProductos() {


  const [productos, setProductos] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("https://digitaldrinks.onrender.com/api/products");
      const data = await response.json();
      setProductos(data.total);
    }

    fetchdata();
  }, []);

  return (
    <div>
    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">Cantidad de Productos <div className= 'icon'><IoMdBeer /> </div>
      
    </div>
    <h4>{productos}</h4>
    </div>
  );
}

export default CantProductos;