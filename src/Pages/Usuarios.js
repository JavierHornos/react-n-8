import './Usuarios.scss'
import React, {useState, useEffect} from 'react'


const Usuarios = () => {
    const [ users, setUsers ] = useState([])
    
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/users' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        console.log(data)
        setUsers(data.data)
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        <div className='container-fluid caja-padre' >
           <table className='table table-striped table-hover mt-4 shadow-lg'>
            <thead>
                <tr className='bg-danger text-white text-center'>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Dirección</th>
                    <th>Imagen</th>
                </tr>
            </thead>


            <tbody className="text-center" >
                { users.map( (user) => ( 
                
                <tr key={user.Id}>

                    <td >{user.Nombre}</td>
                    <td>{user.Apellido}</td>
                    <td>{user.Email}</td>
                    <td>{user.Direccion}</td>
                    <td ><img className='foto' src={user.Imagen} alt={user.Nombre}/></td>
                    <td>{console.log(user.Imagen)}</td>
                    
                    
                </tr>
                
             ))}
            </tbody>

           </table>
        </div>
    )
}
 
export default Usuarios
