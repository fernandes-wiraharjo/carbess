import Carousel from 'better-react-carousel';
import './ReactCarousel.css';

function ReactCarousel() {
  const MyDot = ({ isActive }) => (
    <span
      style={{
        display: 'inline-block',
        height: isActive ? '8px' : '5px',
        width: isActive ? '8px' : '5px',
        background: '#000'
      }}
    ></span>
  );

  return (
    <section className='ReactCarousel'>
      <Carousel 
        cols={3} 
        rows={1} 
        gap={0} 
        autoplay={3000} 
        loop
        showDots
        dot={MyDot}
      >
        <Carousel.Item>
          <img src="/images/carousel/1.png"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/carousel/3.png"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/carousel/4.png"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/carousel/5.png"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/carousel/6.png"/>
        </Carousel.Item>
        <Carousel.Item>
          <img src="/images/carousel/7.png"/>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default ReactCarousel;
