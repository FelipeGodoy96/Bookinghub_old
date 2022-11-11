import 'photoswipe/dist/photoswipe.css'
import React from 'react'


import { Gallery, Item } from 'react-photoswipe-gallery'

export default function MyGallery() {
  const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
    borderRadius: '5px'
  }
  return (
    <Gallery>
      <Grid container spacing={1} direction={'row'}>
        <Grid item xs={12} sx={{width: '50%'}}>
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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/-i---i-_%286288971321%29.jpg/1280px--i---i-_%286288971321%29.jpg"
              />
            )}
          </Item>
        </Grid>       
          <Grid item xs={3}>
            <Item
              original="https://picsum.photos/id/1015/1000/600/"
              thumbnail="https://picsum.photos/id/1015/1000/600/"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  ref={ref}
                  onClick={open}
                  src="https://picsum.photos/id/1015/1000/600/"
                />
              )}
            </Item>
          </Grid>
          <Grid item xs={3}>
            <Item
              original="https://picsum.photos/id/1019/1000/600/"
              thumbnail="https://picsum.photos/id/1019/1000/600/"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  ref={ref}
                  onClick={open}
                  src="https://picsum.photos/id/1019/1000/600/"
                />
              )}
            </Item>
          </Grid>
         
      </Grid>
    </Gallery>
  )
}
