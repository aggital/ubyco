import React, { FC } from 'react'
import Image from 'next/image'
import Testimony from '../../public/images/testimonial-2.jpg'



interface Slide {
    src: any;
    children: any
}
const Slide: FC<Slide> = ({ src, children }) => {
    return (
        <div className="swiper-slide">
            <div className="card">
                <Image className="card-image" src={src} alt="alternative" />
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default function Slider(){
    return (
        <>
        <div className="slider-1 bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2 className="h2-heading">What do users think about Ubyco</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="slider-container">
                            <div className="swiper-container card-slider">
                                <div className="swiper-wrapper">
                                    <Slide src= {Testimony} >
                                        <p className="testimonial-text">We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers</p>
                                        <p className="testimonial-author">Roy Smith - Developer</p>
                                    </Slide>

                                    <Slide src= {Testimony} >
                                        <p className="testimonial-text">We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers</p>
                                        <p className="testimonial-author">Roy Smith - Developer</p>
                                    </Slide>

                                    <Slide src= {Testimony} >
                                        <p className="testimonial-text">We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers</p>
                                        <p className="testimonial-author">Roy Smith - Developer</p>
                                    </Slide>

                                    <Slide src= {Testimony} >
                                        <p className="testimonial-text">We were so focused on launching as many campaigns as possible that we've forgotten to target our loyal customers</p>
                                        <p className="testimonial-author">Roy Smith - Developer</p>
                                    </Slide>
                                </div>
                                <div className="swiper-button-next"></div>
                                <div className="swiper-button-prev"></div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            {`
            .slider-1 {
                padding-top: 8.25rem;
                padding-bottom: 8.5rem;
            }
            
            .slider-1 .section-title {
                text-align: center;
            }
            
            .slider-1 .h2-heading {
                margin-bottom: 3rem;
                text-align: center;
            }
            
            .slider-1 .slider-container {
                position: relative;
            }
            
            .slider-1 .swiper-container {
                position: static;
                width: 86%;
                text-align: center;
            }
            
            .slider-1 .swiper-button-prev:focus,
            .slider-1 .swiper-button-next:focus {
                /* even if you can't see it chrome you can see it on mobile device */
                outline: none;
            }
            
            .slider-1 .swiper-button-prev {
                left: -14px;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23707375'%2F%3E%3C%2Fsvg%3E");
                background-size: 18px 28px;
            }
            
            .slider-1 .swiper-button-next {
                right: -14px;
                background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2028%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23707375'%2F%3E%3C%2Fsvg%3E");
                background-size: 18px 28px;
            }
            
            .slider-1 .card {
                position: relative;
                border: none;
                background-color: transparent;
            }
            
            .slider-1 .card-image {
                width: 80px;
                height: 80px;
                margin-right: auto;
                margin-bottom: 1.25rem;
                margin-left: auto;
                border-radius: 50%;
            }
            
            .slider-1 .card-body {
                padding: 0;
            }
            
            .slider-1 .testimonial-text {
                margin-bottom: 0.75rem;
            }
            
            .slider-1 .testimonial-author {
                margin-bottom: 0;
                color: #252c38;
            }
            
            `}
        </style>
        </>
    )
}

