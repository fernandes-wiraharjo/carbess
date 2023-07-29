import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductImages.css';

const images = [
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690653457/carbess/1_iiog4x.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690652545/carbess/1_iiog4x.jpg'
  },
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690653376/carbess/2_hsf5z6.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690653376/carbess/2_hsf5z6.jpg',
  },
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690653575/carbess/3_ltllls.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690653149/carbess/3_ltllls.jpg',
  },
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690653969/carbess/4_pso98u.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690653890/carbess/4_pso98u.jpg'
  },
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690654135/carbess/5_wthiwe.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690654135/carbess/5_wthiwe.jpg',
  },
  {
    original: 'https://res.cloudinary.com/de7hcol74/image/upload/v1690654308/carbess/6_f3lxbu.jpg',
    thumbnail: 'https://res.cloudinary.com/de7hcol74/image/upload/c_thumb,w_200,g_face/v1690653146/carbess/6_f3lxbu.jpg',
  },
];

function ProductImages() {
  return (
    <section className='ProductImages'>
      <ImageGallery 
        items={images}
        showBullets={true}
      />
    </section>
  );
}

export default ProductImages;
