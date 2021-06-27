import React, {FC} from 'react'
import Image from 'next/image'
 
interface Props{
    image:any;
    title: string;
    text: string
  }


const Card: FC<Props> = ({image, title, text}) => {
    return (
        <div className="card">
        <div className="card-image">
            <Image className="img-fluid" src={image} alt="alternative"/>
        </div>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p>{text}</p>
        </div>
    </div>
    )
}

export default Card
