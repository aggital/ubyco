import React, {FC} from 'react'

interface Props{
    children:any;
  }

const TextContainer:FC<Props> = ({children}) =>{
    return (
        <div className="text-container">
            {children}
        </div> 
    )
}

export default TextContainer