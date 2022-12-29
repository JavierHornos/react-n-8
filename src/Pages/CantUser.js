import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

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
    <Card>
      <Card.Body><h3>Cantidad de Usuarios</h3></Card.Body>
      <Card.Body className='text-center'><h4>{productos}</h4></Card.Body>
    </Card>
    
  );
}

export default CantUsuarios;