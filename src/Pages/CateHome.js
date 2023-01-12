import React, { useState, useEffect } from 'react'
import './CateHome.scss'


const CateHome = () => {
  const [categorias, setCategorias] = useState([])



  const URL = 'https://digitaldrinks.onrender.com/api/categorias'
  const showData = async () => {
    const response = await fetch(URL, { mode: 'cors' })
    const data = await response.json()
    // console.log(data)
    setCategorias(data.data)
  }

  useEffect(() => {
    showData()
  }, [])

  return (
    <div class="content">
      <div class="container-fluid">
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 className="m-0 font-weight-bold text-primary">Categorias en Base de Datos</h6>
            </div>
            <div className="row" >
              {categorias.map((cate) => (

                <div className="card-body" key={cate.id} >
                  <div className="row">
                    <div className="col-lg-6 mb-4">
                      <div className="card bg-info text-white shadow">
                        <div className="card-body" >


                          <div >{cate.nombre}</div>
                        </div>


                      </div>
                    </div>
                  </div>
                </div>


              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CateHome