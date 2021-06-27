import React, { Fragment, FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Style from './styles/Home.module.css'
import Logo from '../../public/vercel.svg'

interface Props {
    children: any;
}

const WebLayout: FC<Props> = ({ children }) => {
    return (
        <>
            <body data-spy="scroll" data-target=".fixed-top">
                <nav className="navbar navbar-expand-lg fixed-top navbar-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand logo-image">
                                <Image
                                    src={Logo}
                                    alt="alternative"
                                    width={100}
                                />
                            </a>
                        </Link>

                        <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link page-scroll" href="#header">Home</a>
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

            <style jsx>
        { `
            @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap');

            body,html {
                    width: 100%;
                height: 100%;
},

                body, p {
                    color: #6b747b;
                font-family: 'Poppins', sans-serif;
}

                h1 {
                    color: #252c38;
                font-weight: 700;
                font-size: 2.5rem;
                line-height: 3.125rem;
                letter-spacing: -0.5px;
}

                h2 {
                    color: #252c38;
                font-weight: 700;
                font-size: 2.125rem;
                line-height: 2.625rem;
                letter-spacing: -0.4px;
}

                h3 {
                    color: #252c38;
                font-weight: 700;
                font-size: 1.75rem;
                line-height: 2.25rem;
                letter-spacing: -0.3px;
}

                h4 {
                    color: #252c38;
                font-weight: 700;
                font-size: 1.5rem;
                line-height: 2rem;
                letter-spacing: -0.2px;
}

                h5 {
                    color: #252c38;
                font-weight: 700;
                font-size: 1.25rem;
                line-height: 1.625rem;
}

                h6 {
                    color: #252c38;
                font-weight: 700;
                font-size: 1rem;
                line-height: 1.375rem;
}

                .h1-large {
                    font - size: 2.875rem;
                line-height: 3.5rem;
}

                .p-large {
                    font - size: 1.125rem;
                line-height: 1.75rem;
}

                .p-small {
                    font - size: 0.875rem;
                line-height: 1.5rem;
}

                .testimonial-text {
                    font - style: italic;
}

                .testimonial-author {
                    font - weight: 700;
                font-size: 1rem;
                line-height: 1.5rem;
}

                .li-space-lg li {
                    margin - bottom: 0.5rem;
}

                a {
                    color: #6b747b;
                text-decoration: underline;
}

                a:hover {
                    color: #6b747b;
                text-decoration: underline;
}

                .no-line {
                    text - decoration: none;
}

                .no-line:hover {
                    text - decoration: none;
}

                .purple {
                    color: #594cda;
}

                .bg-gray {
                    background - color: #f1f9fc;
}

                .btn-solid-reg {
                    display: inline-block;
                padding: 1.375rem 2.25rem 1.375rem 2.25rem;
                border: 1px solid #594cda;
                border-radius: 32px;
                background-color: #594cda;
                color: #ffffff;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                text-decoration: none;
                transition: all 0.2s;
}

                .btn-solid-reg:hover {
                    border: 1px solid #594cda;
                background-color: transparent;
                color: #594cda; /* needs to stay here because of the color property of a tag */
                text-decoration: none;
}

                .btn-solid-lg {
                    display: inline-block;
                padding: 1.625rem 2.75rem 1.625rem 2.75rem;
                border: 1px solid #594cda;
                border-radius: 32px;
                background-color: #594cda;
                color: #ffffff;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                text-decoration: none;
                transition: all 0.2s;
}

                .btn-solid-lg:hover {
                    border: 1px solid #594cda;
                background-color: transparent;
                color: #594cda; /* needs to stay here because of the color property of a tag */
                text-decoration: none;
}

                .btn-solid-lg .fab {
                    margin - right: 0.5rem;
                font-size: 1.25rem;
                line-height: 0;
                vertical-align: top;
}

                .btn-solid-lg .fab.fa-google-play {
                    font - size: 1rem;
}

                .btn-solid-lg.secondary {
                    border: 1px solid #eb427e;
                background-color: #eb427e;
}

                .btn-solid-lg.secondary:hover {
                    border: 1px solid #eb427e;
                background: transparent;
                color: #eb427e; /* needs to stay here because of the color property of a tag */
}

                .btn-outline-reg {
                    display: inline-block;
                padding: 1.375rem 2.25rem 1.375rem 2.25rem;
                border: 1px solid #252c38;
                border-radius: 32px;
                background-color: transparent;
                color: #252c38;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                text-decoration: none;
                transition: all 0.2s;
}

                .btn-outline-reg:hover {
                    background - color: #252c38;
                color: #ffffff;
                text-decoration: none;
}

                .btn-outline-lg {
                    display: inline-block;
                padding: 1.625rem 2.75rem 1.625rem 2.75rem;
                border: 1px solid #252c38;
                border-radius: 32px;
                background-color: transparent;
                color: #252c38;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                text-decoration: none;
                transition: all 0.2s;
}

                .btn-outline-lg:hover {
                    background - color: #252c38;
                color: #ffffff;
                text-decoration: none;
}

                .btn-outline-sm {
                    display: inline-block;
                padding: 1rem 1.5rem 1rem 1.5rem;
                border: 1px solid #252c38;
                border-radius: 32px;
                background-color: transparent;
                color: #252c38;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                text-decoration: none;
                transition: all 0.2s;
}

                .btn-outline-sm:hover {
                    background - color: #252c38;
                color: #ffffff;
                text-decoration: none;
}

                .form-group {
                    position: relative;
                margin-bottom: 1.25rem;
}

                .label-control {
                    position: absolute;
                top: 0.875rem;
                left: 1.875rem;
                color: #7d838a;
                opacity: 1;
                font-size: 0.875rem;
                line-height: 1.5rem;
                cursor: text;
                transition: all 0.2s ease;
}

                .form-control-input:focus + .label-control,
                .form-control-input.notEmpty + .label-control,
                .form-control-textarea:focus + .label-control,
                .form-control-textarea.notEmpty + .label-control {
                    top: 0.125rem;
                color: #6b747b;
                opacity: 1;
                font-size: 0.75rem;
                font-weight: 700;
}

                .form-control-input,
                .form-control-select {
                    display: block; /* needed for proper display of the label in Firefox, IE, Edge */
                width: 100%;
                padding-top: 1.125rem;
                padding-bottom: 0.125rem;
                padding-left: 1.8125rem;
                border: 1px solid #d0d5e2;
                border-radius: 25px;
                background-color: #ffffff;
                color: #6b747b;
                font-size: 0.875rem;
                line-height: 1.875rem;
                transition: all 0.2s;
                -webkit-appearance: none; /* removes inner shadow on form inputs on ios safari */
}

                .form-control-select {
                    padding - top: 0.5rem;
                padding-bottom: 0.5rem;
                height: 3.25rem;
                color: #7d838a;
}

                select {
                    /* you should keep these first rules in place to maintain cross-browser behavior */
                    -webkit - appearance: none;
                -moz-appearance: none;
                -ms-appearance: none;
                -o-appearance: none;
                appearance: none;
                background-image: url('../images/down-arrow.png');
                background-position: 96% 50%;
                background-repeat: no-repeat;
                outline: none;
}

                .form-control-textarea {
                    display: block; /* used to eliminate a bottom gap difference between Chrome and IE/FF */
                width: 100%;
                height: 14rem; /* used instead of html rows to normalize height between Chrome and IE/FF */
                padding-top: 1.5rem;
                padding-left: 1.3125rem;
                border: 1px solid #d0d5e2;
                border-radius: 4px;
                background-color: #ffffff;
                color: #6b747b;
                font-size: 0.875rem;
                line-height: 1.5rem;
                transition: all 0.2s;
}

                .form-control-input:focus,
                .form-control-select:focus,
                .form-control-textarea:focus {
                    border: 1px solid #a1a1a1;
                outline: none; /* Removes blue border on focus */
}

                .form-control-input:hover,
                .form-control-select:hover,
                .form-control-textarea:hover {
                    border: 1px solid #a1a1a1;
}

                .checkbox {
                    font - size: 0.75rem;
                line-height: 1.25rem;
}

                input[type='checkbox'] {
                    vertical - align: -10%;
                margin-right: 0.5rem;
}

                .form-control-submit-button {
                    display: inline-block;
                width: 100%;
                height: 3.25rem;
                border: 1px solid #594cda;
                border-radius: 32px;
                background-color: #594cda;
                color: #252c38;
                font-weight: 600;
                font-size: 0.875rem;
                line-height: 0;
                cursor: pointer;
                transition: all 0.2s;
}

                .form-control-submit-button:hover {
                    border: 1px solid #252c38;
                background-color: transparent;
                color: #252c38;
}

                /* Fade-move Animation For Details Lightbox - Magnific Popup */
                /* at start */
                .my-mfp-slide-bottom .zoom-anim-dialog {
                    opacity: 0;
                transition: all 0.2s ease-out;
                -webkit-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
                -ms-transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
                transform: translateY(-1.25rem) perspective(37.5rem) rotateX(10deg);
}

                /* animate in */
                .my-mfp-slide-bottom.mfp-ready .zoom-anim-dialog {
                    opacity: 1;
                -webkit-transform: translateY(0) perspective(37.5rem) rotateX(0);
                -ms-transform: translateY(0) perspective(37.5rem) rotateX(0);
                transform: translateY(0) perspective(37.5rem) rotateX(0); 
}

                /* animate out */
                .my-mfp-slide-bottom.mfp-removing .zoom-anim-dialog {
                    opacity: 0;
                -webkit-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg);
                -ms-transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg);
                transform: translateY(-0.625rem) perspective(37.5rem) rotateX(10deg); 
}

                /* dark overlay, start state */
                .my-mfp-slide-bottom.mfp-bg {
                    opacity: 0;
                transition: opacity 0.2s ease-out;
}

                /* animate in */
                .my-mfp-slide-bottom.mfp-ready.mfp-bg {
                    opacity: 0.8;
}
                /* animate out */
                .my-mfp-slide-bottom.mfp-removing.mfp-bg {
                    opacity: 0;
}
/* end of fade-move animation for details lightbox - magnific popup */


.navbar {
	background-color: #f1f9fc;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 0.875rem;
}

.navbar .navbar-brand {
	padding-top: 0.125rem;
	padding-bottom: 0.125rem;
}

.navbar .logo-image img {
    width: 133px;
	height: 32px;
}

.navbar .logo-text {
	color: #fff;
	font-weight: 600;
	font-size: 2rem;
	line-height: 1rem;
	text-decoration: none;
}

@media (max-width: 990px) {
	.navbar .logo-text {
		color: #000;
	}
}

.offcanvas-collapse {
	position: fixed;
	top: 3.25rem; /* adjusts the height between the top of the page and the offcanvas menu */
	bottom: 0;
	left: 100%;
	width: 100%;
	padding-right: 1rem;
	padding-left: 1rem;
	overflow-y: auto;
	visibility: hidden;
	background-color: #f1f9fc;
	transition: visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;
	transition: transform .3s ease-in-out, visibility .3s ease-in-out;
	transition: transform .3s ease-in-out, visibility .3s ease-in-out, -webkit-transform .3s ease-in-out;
}

.offcanvas-collapse.open {
	visibility: visible;
	-webkit-transform: translateX(-100%);
	transform: translateX(-100%);
}

.navbar .navbar-nav {
	margin-top: 0.75rem;
	margin-bottom: 0.5rem;
}

.navbar .nav-item .nav-link {
	padding-top: 0.625rem;
	padding-bottom: 0.625rem;
	color: #eee;
	font-size: 1.05rem;
	font-weight: 450;
	text-decoration: none;
	transition: all 0.2s ease;
}

@media (max-width: 990px) {
	.navbar .nav-item .nav-link {
		color: #555;
	}
}

.navbar .nav-item.dropdown.show .nav-link,
.navbar .nav-item .nav-link:hover,
.navbar .nav-item .nav-link.active {
	color: #ff6e84;
}

/* Dropdown Menu */
.navbar .dropdown .dropdown-menu {
	animation: fadeDropdown 0.2s; /* required for the fade animation */
}

@keyframes fadeDropdown {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
	}
}

.navbar .dropdown-menu {
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	border: none;
	background-color: #f1f9fc;
}

.navbar .dropdown-item {
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;
	color: #6b747b;
	font-weight: 600;
	font-size: 0.875rem;
	line-height: 0.875rem;
	text-decoration: none;
}

.navbar .dropdown-item:hover {
	background-color: #f1f9fc;
	color: #ff6e84;
}

.navbar .dropdown-divider {
	width: 100%;
	height: 1px;
	margin: 0.5rem auto 0.5rem auto;
	border: none;
	background-color: #d4dce2;
}
/* end of dropdown menu */

.navbar .app-store-icons {
	display: block;
}

.navbar .app-store-icons a {
	text-decoration: none;
}

.navbar .fab {
	color: #594cda;
	font-size: 1.25rem;
	transition: all 0.2s ease;
}

.navbar .fab:hover {
	color: #eb427e;
}

.navbar .fa-apple {
	margin-right: 0.375rem;
}

.navbar .navbar-toggler {
	padding: 0;
	border: none;
	font-size: 1.25rem;
}
`}
            </style>
        </>
    )
}

export default WebLayout
