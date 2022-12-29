import "./Producto.scss";

function Producto({producto}) {
    return (
        <div className="text-center card card-body p-5" >
            
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre} />
            
          </div>
    )
}

export default Producto