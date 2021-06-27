import React from 'react'
import Image from 'next/image'
import Background from '../../public/images/header-smartphone.png'

export default function Header() {
    return (
        <>
           <header id="header" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="text-container">
                                <h1>Trade Btc and Gift Cards conveniently.</h1>
                                <p className="p-large">We buy all sort of Giftcards, Bitcoin and Rmb. All for amazing naira rates and payment is instant.</p>
                                <a className="btn-solid-lg popup-with-move-anim" href="#details-lightbox"><i className="fab fa-apple"></i>Download</a>
                                <a className="btn-solid-lg secondary popup-with-move-anim" href="#details-lightbox"><i className="fab fa-google-play"></i>Download</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="image-container">
                                <Image className="img-fluid" src={Background} alt="alternative"/>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>
                {
                    `
                    .header {
                        padding-top: 7rem;
                        padding-bottom: 7rem;
                        background: linear-gradient(#041953 50%, #041953 70%, #2c4588 100% );
                        text-align: center;
                    }
                    
                    .header .text-container {
                        margin-bottom: 4rem;
                    }
                    
                    .header .h1-large{
                        margin-bottom: 1.25rem;
                        font-size: 2.8rem;
                    }
                    .header h1 {
                        font-size: 2.4rem;
                        color: #fff;
                    }
                    @media (max-width: 650px) {
                        .header h1 {
                            font-size: 1.8rem;
                            line-height: 35px;
                        }
                    }
                    
                    .header .p-large {
                        margin-bottom: 2rem;
                        color: #ddd;
                    }
                    
                    .header .btn-solid-lg {
                        margin-right: 0.25rem;
                        margin-bottom: 1.25rem;
                        margin-left: 0.25rem;
                    }
                    `
                }

            </style>
        </>
    )
}
