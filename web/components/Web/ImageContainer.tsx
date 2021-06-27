import React,{FC} from 'react'
import Image from 'next/image'


interface Props{
    src:any;
  }
const ImageContainer:FC<Props> = ({src}) => {
    return (
        <div className="image-container">
            <Image className="img-fluid" src={src} alt="alternative"/>
        </div> 
    )
}

export default ImageContainer
