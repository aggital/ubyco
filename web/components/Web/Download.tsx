import React from 'react'
import Image from 'next/image'
import DownloadImage from '../../public/images/conclusion-smartphone.png'
import ImageContainer from './ImageContainer'
import TextContainer from './TextContainer'

export default function Download() {
    return (
        <>
            <div id="download" className="basic-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageContainer src={DownloadImage} />
                        </div>
                        <div className="col-lg-6">
                            <TextContainer>
                                <p>Team management mobile applications don’t get much better than Ubyco. Download it today</p>
                                <a className="btn-solid-lg" href="#your-link"><i className="fab fa-apple"></i>Download</a>
                                <a className="btn-solid-lg secondary" href="#your-link"><i className="fab fa-google-play"></i>Download</a>
                            </TextContainer>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {
                    `
                .basic-5 {
                    padding-top: 4.5rem;
                    padding-bottom: 7.5rem;
                    background: url('../images/conclusion-background.jpg') center center no-repeat;
                    background-size: cover;
                    text-align: center;
                }
                
                .basic-5 .image-container {
                    margin-bottom: 4rem;
                }
                
                .basic-5 p {
                    margin-bottom: 2.25rem;
                    color: #252c38;
                    font-size: 1.875rem;
                    line-height: 2.625rem;
                }
                
                .basic-5 .btn-solid-lg {
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
