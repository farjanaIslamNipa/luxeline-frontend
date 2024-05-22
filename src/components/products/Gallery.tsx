'use client'
import ImageGallery from "react-image-gallery";
import 'react-image-gallery/styles/css/image-gallery.css'; 

type TProdImage = {
  original: string;
  thumbnail: string;
}


const Gallery = ({images} : {images: string[]}) => {

  const prodImages : TProdImage[] = []
  images.map((image) => {
    prodImages.push({original: image, thumbnail: image})
  })


  return (
    <>
      <ImageGallery
      showFullscreenButton={false}
      showPlayButton={false}
      showNav={false}
      thumbnailPosition='left'
      items={prodImages} />
    </>
  );
};

export default Gallery;