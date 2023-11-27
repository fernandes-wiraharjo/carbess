import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import './ProductImages.css';

function ProductImages({images}) {
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
