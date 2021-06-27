import React from 'react'
import Image from 'next/image'
import Logo from '../../public/images/logo.png'
export default function Footer() {
    return (
        <>
            <footer id="footer" className="footer-area">
                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                                    <div className="footer-logo d-flex align-items-end">
                                        <a className="mt-30" href="index.html">
                                            <Image src={Logo} alt="Logo" width={150} />
                                        </a>

                                        <ul className="social mt-30">
                                            <li><a href="#"><i className="lni-facebook-filled"></i></a></li>
                                            <li><a href="#"><i className="lni-twitter-original"></i></a></li>
                                            <li><a href="#"><i className="lni-instagram-original"></i></a></li>
                                            <li><a href="#"><i className="lni-linkedin-original"></i></a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-link">
                                    <h6 className="footer-title">Company</h6>
                                    <ul>
                                        <li><a href="#">About</a></li>
                                        <li><a href="#">Contact</a></li>
                                        <li><a href="#">Career</a></li>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-link">
                                    <h6 className="footer-title">Product & Services</h6>
                                    <ul>
                                        <li><a href="#">Products</a></li>
                                        <li><a href="#">Business</a></li>
                                        <li><a href="#">Developer</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-5">
                                <div className="footer-link">
                                    <h6 className="footer-title">Help & Support</h6>
                                    <ul>
                                        <li><a href="#">Support Center</a></li>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Terms & Conditions</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="copyright text-center">
                                    <p className="text">Ubyco 2021 &copy;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


            <style>
                {
                    `
                    .footer-area {
                        background-color: #f4f6f7; 
                      }
                      footer li {
                          list-style: none;
                      }
                      
                      .footer-widget {
                        padding-top: 45px;
                        padding-bottom: 120px; }
                        @media only screen and (min-width: 768px) and (max-width: 991px) {
                          .footer-widget {
                            padding-top: 70px;
                            padding-bottom: 100px; } }
                        @media (max-width: 767px) {
                          .footer-widget {
                            padding-top: 50px;
                            padding-bottom: 80px; } }
                      
                      .footer-logo-support .footer-logo .social {
                        margin-left: 35px; }
                        .footer-logo-support .footer-logo .social li {
                          display: inline-block;
                          margin-right: 10px; 
                      }
                          .footer-logo-support .footer-logo .social li a {
                            font-size: 24px;
                            color: #6c6c6c;
                            -webkit-transition: all 0.3s ease-out 0s;
                            -moz-transition: all 0.3s ease-out 0s;
                            -ms-transition: all 0.3s ease-out 0s;
                            -o-transition: all 0.3s ease-out 0s;
                            transition: all 0.3s ease-out 0s; 
                          }
                            .footer-logo-support .footer-logo .social li a:hover {
                              color: #098ee7; }
                      
                      .footer-logo-support .footer-support span {
                        font-size: 20px;
                        line-height: 25px;
                        color: #6c6c6c;
                        font-weight: 600; }
                        @media (max-width: 767px) {
                          .footer-logo-support .footer-support span {
                            display: block; } }
                        .footer-logo-support .footer-support span.mail {
                          margin-left: 32px; }
                          @media (max-width: 767px) {
                            .footer-logo-support .footer-support span.mail {
                              margin-left: 0; } }
                      
                      .footer-title {
                        font-size: 14px;
                        font-weight: 700;
                        line-height: 18px;
                        color: #6c6c6c; }
                      
                      .footer-link {
                        margin-top: 32px; }
                        .footer-link ul {
                          margin-top: 8px; }
                          .footer-link ul li a {
                            font-size: 16px;
                            display: inline-block;
                            line-height: 24px;
                            color: #121212;
                            margin-top: 1rem;
                            text-decoration: none;
                            font-weight: 500;
                            -webkit-transition: all 0.3s ease-out 0s;
                            -moz-transition: all 0.3s ease-out 0s;
                            -ms-transition: all 0.3s ease-out 0s;
                            -o-transition: all 0.3s ease-out 0s;
                            transition: all 0.3s ease-out 0s; }
                            .footer-link ul li a:hover {
                              color: #098ee7; }
                      
                      .footer-newsletter {
                        margin-top: 32px; }
                        .footer-newsletter .newsletter {
                          margin-top: 24px;
                          position: relative; }
                          .footer-newsletter .newsletter input {
                            width: 100%;
                            height: 44px;
                            border-radius: 50px;
                            padding: 0 24px;
                            border: 0;
                            background-color: rgba(33, 33, 33, 0.12);
                            font-weight: 500; }
                            .footer-newsletter .newsletter input::placeholder {
                              opacity: 1;
                              color: #6c6c6c; }
                            .footer-newsletter .newsletter input::-moz-placeholder {
                              opacity: 1;
                              color: #6c6c6c; }
                            .footer-newsletter .newsletter input::-moz-placeholder {
                              opacity: 1;
                              color: #6c6c6c; }
                            .footer-newsletter .newsletter input::-webkit-input-placeholder {
                              opacity: 1;
                              color: #6c6c6c; }
                          .footer-newsletter .newsletter button {
                            position: absolute;
                            top: 0;
                            right: 0;
                            height: 44px;
                            width: 44px;
                            border-top-right-radius: 50px;
                            border-bottom-right-radius: 50px;
                            border: 0;
                            font-size: 20px;
                            color: #121212;
                            cursor: pointer;
                            background: none; }
                        .footer-newsletter .text {
                          margin-top: 16px; }
                      
                      .footer-copyright {
                        background-color: #2b354f;
                        padding: .5rem 0;
                      }
                      
                      .copyright .text {
                        color: #fff;
                      }
                      
                    `
                }
            </style>
        </>
    )
}
