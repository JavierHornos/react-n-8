import React, {useState, useEffect} from 'react'

const Categoriasa = () => {
    const [ categorias, setCategorias ] = useState([])
    
    
    
    const URL = 'https://digitaldrinks.onrender.com/api/categorias' 
    const URLCANTIDADES = 'https://digitaldrinks.onrender.com/api/products' 
    const showData = async () => {
        const response = await fetch(URL, {mode:'cors'})
        const data = await response.json()
        const responseCantidades = await fetch (URLCANTIDADES, {mode:'cors'} )
        const dataCantidades =  await responseCantidades.json()
        const categorias = {
            1: 'vinos',
            2: 'espumantes',
            3: 'whiskies',
            4: 'gin',
            5: 'licores',
            6: 'vodka',
            7: 'ron',
            8: 'aperitivos',
            9: 'cervezas',
            10: 'accesorios'
          }
    
          const contadorProductosPorCategoria = {
            vinos: 0,
            espumantes: 0,
            whiskies: 0,
            gin: 0,
            licores: 0,
            vodka: 0,
            ron: 0,
            aperitivos: 0,
            cervezas: 0,
            accesorios: 0
          }
    
         dataCantidades.data.forEach(element => {
            
            for (let key in categorias) {
              if (element.Categoria_FK.toString() === key) {
                contadorProductosPorCategoria[categorias[key]]++
              }
            }
          });
  
        
        
        data.data.map(categoria =>{
            for(let key in contadorProductosPorCategoria){
                if(categoria.nombre.toLowerCase().includes(key)){
                    categoria.cant = contadorProductosPorCategoria[key]
                }
            }
            return categoria
        })
  
        setCategorias(data.data)
    }

    useEffect ( () => {
        showData()
    }, [])
    
    return (
        <div className='container-fluid caja-padre' >


            <tbody className="text-center" >
                { categorias.map( (cate) => ( 
                
                <tr key={cate.nombre}>
                    <td >{cate.nombre}</td> 
                </tr>
                
             ))}
            </tbody>
        </div>
    )
}


export default Categoriasa