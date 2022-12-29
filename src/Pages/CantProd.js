import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";

function BodyOnlyExample() {


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
    <Card>
      <Card.Body><h3>Cantidad de Productos</h3></Card.Body>
      <Card.Body className='text-center'><h4>{productos}</h4></Card.Body>
    </Card>
    
  );
}

export default BodyOnlyExample;