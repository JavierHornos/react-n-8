//import logo from '../../public/Imagenes/05.png'
const logoimg= require.context('../../public/Imagenes', true)

const Navbar = () => {
    return (
        <div className="Navbar ">
        <img  className="logo" src={ logoimg('./05.png') }/>
        </div>
    )
}

export default Navbar;