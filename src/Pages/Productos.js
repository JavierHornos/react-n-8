import ListaProductos from "../components/ListaProductos";


function Productos() {
   return (
    <div className="bg-white text-black text-center" >
      <h1 className="text-center display-3 py-4 " >Productos</h1>
      <ListaProductos />
    </div>
  );
}

export default Productos;
