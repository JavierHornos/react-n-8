import React, {useState, useEffect} from 'react'
import './UltimoProducto.scss'


const UltimoProducto = () => {
    const [ Productos, setProductos ] = useState([])
    
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/products/ultima' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        // console.log(data)
        setProductos(data.ultima)
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        

            <div className="row" >
                 


                <div className="card-body">
                <div className="text-center">
                <div key={Productos.id}><div/>
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '15rem' }} src={Productos.imagen} alt={Productos.nombre} />
                </div>
                <p> {Productos.descripcion}</p>
                <a target="_blank" rel="nofollow" href="/">View product detail</a>
              </div>
              </div>  
             
            </div>
        
    )
}
 
export default UltimoProducto