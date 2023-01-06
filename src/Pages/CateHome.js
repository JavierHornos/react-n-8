import React, {useState, useEffect} from 'react'
import './CateHome.scss'


const CateHome = () => {
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
        

            <div className="row" >
                { categorias.map( (cate) => ( 
                
                <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        
                            <div key={cate.id}>
                      			<div >{cate.nombre}</div> 
                     		</div>


                      </div>
                    </div>
                  </div>
                </div>
              </div>
                
             ))}
            </div>
        
    )
}
 
export default CateHome