import '../../styles/Gallery.css'
import ImageGallery from 'react-image-gallery'

export default function CustomGallery (props) {
  return (
    <ImageGallery
    autoPlay={false}
    showThumbnails={true}
    showPlayButton={false}
    items={props.images}
    showIndex={true}
    showFullscreenButton={false}
    />    
  )
}