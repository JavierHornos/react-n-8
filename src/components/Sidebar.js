import { NavLink} from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { FaProductHunt } from "react-icons/fa";
import { FaPiedPiperPp } from "react-icons/fa";
import { FaContao } from "react-icons/fa";







const Sidebar = () => {
    return (
        <div className="Sidebar">
            <ul>
                <li>
                    <NavLink to="/" className='text-dark me-2'><FaHome/> Inicio</NavLink>
                </li>

                <li>
                    <NavLink to="/Productos" className='text-dark me-2'><FaProductHunt/> Productos</NavLink>
                </li>

                <li>
                    <NavLink to="/CantProd" className='text-dark me-2'><FaPiedPiperPp/> Cant de Productos</NavLink>
                </li>

                <li>
                    <NavLink to="/Usuarios" className='text-dark me-2'><FaUserFriends/> Usuarios</NavLink>
                </li>

                <li>
                    <NavLink to="/CantUser" className='text-dark me-2'><FaUserFriends/> Cant de Usuarios</NavLink>
                </li>

                <li>
                    <NavLink to="/Categorias" className='text-dark me-2'><FaContao/> Categorias</NavLink>
                </li>

                <li>
                    <NavLink to="/CantCategorias" className='text-dark me-2'><FaContao/> Cant de Categorias</NavLink>
                </li>

                

            </ul>
        </div>
    )
}

export default Sidebar;