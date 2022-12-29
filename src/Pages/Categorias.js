import React, {useState, useEffect} from 'react'


const Categorias = () => {
    const [ categorias, setCategorias ] = useState([])
    
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/categorias' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        // console.log(data)
        setCategorias(data.data)
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        <div className='container-fluid caja-padre' >
           <table className='table table-striped table-hover mt-4 shadow-lg'>
            <thead>
                <tr className='bg-danger text-white text-center'>
                    <th>Id</th>
                    <th>Nombre</th>
                </tr>
            </thead>


            <tbody className="text-center" >
                { categorias.map( (cate) => ( 
                
                <tr key={cate.id}>

                    <td >{cate.id}</td>
                    <td >{cate.nombre}</td>
                    
                    
                </tr>
                
             ))}
            </tbody>

           </table>
        </div>
    )
}
 
export default Categorias