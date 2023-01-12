//import Carousel from 'react-bootstrap/Carousel';
import CantProd from './CantProd'
import CantUser from './CantUser'
import CantCategorias from './CantCategorias'
import CateHome from './CateHome'
import './home.scss'
import UltimoProducto from './UltimoProducto'
import UltimoUsuario from './UltimoUsuario'

function Home() {

  return (
    <div id="content">
      <div id="wrapper">
        {/* Begin Page Content */}
        <div className="container-fluid">
          {/* Page Heading */}
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
          </div>
          {/* Content Row */}
          <div className="row">
            {/* Amount of Products in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-primary shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800">
                        <CantProd /> </div>
                    </div>
                    <div className="col-auto">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* $$$ of all products in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-success shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800"><CantCategorias /></div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Amount of users in DB */}
            <div className="col-md-4 mb-4">
              <div className="card border-left-warning shadow h-100 py-2">
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="h5 mb-0 font-weight-bold text-gray-800"><CantUser /></div>
                    </div>
                    <div className="col-auto">
                      <i className="fas fa-user-check fa-2x text-gray-300"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* Content Row */}
          <div className="row">
            {/* Last Product in DB */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Ultimo Producto en Base de Datos</h6>
                </div>
                <div>
                  <UltimoProducto />
                </div>

              </div>
            </div>





            {/* Last Product in DB */}
            <div className="col-lg-6 mb-4">
              <div className="card shadow mb-4">
                <div className="card-header py-3">
                  <h6 className="m-0 font-weight-bold text-primary">Ultimo Usuario en Base de Datos</h6>
                </div>

                <div>
                  <UltimoUsuario />
                </div>



              </div>
            </div>




            {/* Categories in DB */}
                <div>
                  <CateHome />
                </div>










          </div>
        </div>
        {/* /.container-fluid */}
      </div>
    </div>

  );
}




//export default Home;

export default Home;
