import 'photoswipe/dist/photoswipe.css'
import React from 'react'

import { Gallery, Item } from 'react-photoswipe-gallery'

export default function MyGallery () {
  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
    borderRadius: '5px',

  }
  return (
    <Gallery>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '30vw 20vw 20vw',
        gridTemplateRows: '300px 0px',
        gap: 8        
      }}>
      <Item
        original="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg"
        thumbnail="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg"
        height="" // altura  da imagem original
        width="" //  largura  da imagem original
      >
        {({ ref, open }) => (
          <img 
          style={smallItemStyles}
          ref={ref} 
          onClick={open} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg" />
        )}
      </Item>
      <Item
        original="https://picsum.photos/id/1015/1000/600/"
        thumbnail="https://picsum.photos/id/1015/1000/600/"
        
      >
        {({ ref, open }) => (
          <img 
          style={smallItemStyles}
          ref={ref} 
          onClick={open} 
          src="https://picsum.photos/id/1015/1000/600/" />
        )}
      </Item>
      <Item
        original="https://picsum.photos/id/1019/1000/600/"
        thumbnail="https://picsum.photos/id/1019/1000/600/"
        
      >
        {({ ref, open }) => (
          <img 
          style={smallItemStyles}
          ref={ref} 
          onClick={open} 
          src="https://picsum.photos/id/1019/1000/600/" />
        )}
      </Item>
      </div>
    </Gallery>
  )
}