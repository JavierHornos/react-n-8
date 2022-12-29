import { useEffect, useState } from "react";
import Producto from "./Producto";

function ListaProductos() {

    const [productos, setProductos] = useState([]);
    const [Cargando, setCargando] = useState(true)

  useEffect(() => {
    async function fetchdata() {
      const response = await fetch("https://digitaldrinks.onrender.com/api/products");
      const data = await response.json();
      setCargando(false)
      setProductos(data.data);
    }

    fetchdata();
  }, []);

 
  return (
    <div className="container" >
      {
        Cargando ? <h1>Cargando...</h1> :   // condicional ternario , si Cargando es false, mostrar h1 Cargando, caso contrario el resto de codigo
        
        <div className="row" >
        {productos.map((producto) => {
          return (
            <div className="col-md-4" key={producto.id} >
                <Producto producto={producto} />
            </div>
        );
      })}
      </div>
      }
      
    </div>
  );
}

export default ListaProductos;
