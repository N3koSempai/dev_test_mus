/* eslint-disable react/prop-types */
import ImageUploading from 'react-images-uploading'
import { useState, useEffect } from 'react'
import { Button, Typography } from '@material-tailwind/react'
import useFlightInfo from '../../../stores/store'
export default function ImageLoader ({ getPhoto }) {
  const [images, setImages] = useState([])
  const { img, changeImg } = useFlightInfo()
  const [isMax, setIsMax] = useState(false)
  const maxNumber = 1

  useEffect(() => {
    changeImg(images)
    console.log(images[0])
  }, [images])
  const onChange = (imageList) => {
    // data for submit

    setImages(imageList)
    setIsMax(true)
  }

  const handleRemoveAll = () => {
    setIsMax(false)
    setImages([])
    getPhoto(true)
  }
  return (
    <div className='App'>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey='data_url'
        maxFileSize={102399}
        onImageRemoveAll={handleRemoveAll}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
          errors
        }) => (
          // write your building UI

          <div className='upload__image-wrapper flex flex-col items-center justify-center'>
            {isMax
              ? <></>
              : <Button
                  size='sm'
                  style={isDragging ? { color: 'red' } : { background: 'blue-light' }}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                Click or Drop here
                {/* eslint-disable-next-line */}
              </Button>}
            {imageList.map((image, index) => (
              <div key={index} className='image-item flex flex-col items-center justify-center '>
                <img src={image.data_url} alt='' width='100' />
                <div className='image-item__btn-wrapper flex flex-row gap-2 lg:gap-4 lg:mt-4 mt-2'>
                  <Button variant='outlined' size='sm' onClick={() => onImageUpdate(index)}>Update</Button>
                  <Button variant='outlined' size='sm' onClick={handleRemoveAll}>Remove</Button>
                </div>
              </div>
            ))}
            {errors ? <div>{errors.acceptType && <Typography variant='medium' color='orange' className='mt-4'>Your selected file type is not allowed</Typography>}</div> : <></>}
            {errors ? <div>{errors.maxFileSize && <Typography variant='medium' color='orange' className='mt-4'>The file exceed the limit of 100kb</Typography>}</div> : <></>}
          </div>
        )}
      </ImageUploading>
    </div>
  )
}
