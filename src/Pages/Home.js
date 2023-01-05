//import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from "react";
import CantProd from './CantProd'
import CantUser from './CantUser'
import CantCategorias from './CantCategorias'
import Categorias from './Categorias'


//function Home() {
//return (
/*<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/df4wfmkk1/image/upload/v1672209038/botellas_tgeguh.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>Digital Drinks!!!</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/df4wfmkk1/image/upload/v1672209066/segunda_hmyopf.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Digital Drinks!!!</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://res.cloudinary.com/df4wfmkk1/image/upload/v1672209103/cerveza4_iicbxa.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Digital Drinks!!!</h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

 
);
}*/

function Home() {

  return (

    <div id="wrapper">
      {/* Begin Page Content */}
      <div className="container-fluid">
        {/* Page Heading */}
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
        </div>
        {/* Content Row */}
        <div className="row">
          {/* Amount of Products in DB */}
          <div className="col-md-4 mb-4">





            <div className="h5 mb-0 font-weight-bold text-gray-800">
              <CantProd />
            </div>

            <div className="col-auto">
              <i className="fas fa-clipboard-list fa-2x text-gray-300" />
            </div>



          </div>
          {/* $$$ of all products in DB */}
          <div className="col-md-4 mb-4">

            <div className="h5 mb-0 font-weight-bold text-gray-800">
              <CantCategorias />
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-dollar-sign fa-2x text-gray-300" />
          </div>

          {/* Amount of users in DB */}
          <div className="col-md-4 mb-4">

            <div className="h5 mb-0 font-weight-bold text-gray-800">
              <CantUser />
            </div>
          </div>
          <div className="col-auto">
            <i className="fas fa-user-check fa-2x text-gray-300" />
          </div>

        </div>
        {/* Content Row */}
        <div className="row">
          {/* Last Product in DB */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
              </div>
              <div className="card-body">
                <div className="text-center">
                  <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '25rem' }} src="assets/images/product_dummy.svg" alt="image dummy" />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
                <a target="_blank" rel="nofollow" href="/">View product detail</a>
              </div>
            </div>
          </div>
          {/* Categories in DB */}
          <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
              <div className="card-header py-3">
                <h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        <Categorias />
                      </div>

                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 02
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 03
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 04
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 05
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-info text-white shadow">
                      <div className="card-body">
                        Category 06
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /.container-fluid */}
    </div>

  );
}




//export default Home;

export default Home;
