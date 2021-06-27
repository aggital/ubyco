import React, {Fragment, FC} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.css'
import Style from './styles/Home.module.css'

interface Props{
    children:any;
  }

const UserLayout: FC<Props> = ({children}) => {
    return (
        <>
           <body data-spy="scroll" data-target=".fixed-top">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                    <div className="container">
                        
                        <Link href="/">
                           <a className="navbar-brand logo-text page-scroll">Ubyco</a> 
                        </Link>
                        <Link href="/">
                            <a className="navbar-brand logo-image">
                                <Image 
                                src="images/logo.svg" 
                                alt="alternative"
                                width={24}
                                height={17}
                            />
                            </a>
                        </Link>

                        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#header">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#details">Details</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#download">Download</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="login.html">Login</a>
                                </li>
                            </ul>
                        </div> 
                    </div>
                </nav>
                {children}
            </body>
    </>
    )
}
