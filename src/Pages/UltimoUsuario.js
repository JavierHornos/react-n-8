import React, {useState, useEffect} from 'react'
import './UltimoUsuario.scss'


const UltimoUsuario = () => {
    const [ Usuario, setUsuario ] = useState([])
    
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/users/ultimo' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        // console.log(data)
        setUsuario(data.ultimo)
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        

            <div className="row" >
                 


                <div className="card-body">
                <div className="text-center">
                <div key={Usuario.Id}><div/>
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '15rem' }} src={Usuario.Imagen} alt={Usuario.Nombre} />
                </div>
                <p> {Usuario.Email}{}</p>
                <a target="_blank" rel="nofollow" href="/">View product detail</a>
              </div>
              </div>  
             
            </div>
        
    )
}
 
export default UltimoUsuario