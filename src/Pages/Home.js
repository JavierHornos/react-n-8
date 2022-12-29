import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://res.cloudinary.com/df4wfmkk1/image/upload/v1672209038/botellas_tgeguh.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Digital Drinks</h3>
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
          <h3>Digital Drinks</h3>
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
          <h3>Digital Drinks</h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Home;