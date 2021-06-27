import React, { FC } from "react";
import TextContainer from "./TextContainer";
import ImageContainer from "./ImageContainer";

interface Left {
    children: any;
    src: any;
}

const Left: FC<Left> = ({ children, src }) => {
    return (
        <>
            <div id="details" className="basic-2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <ImageContainer src={src} />
                        </div>
                        <div className="col-lg-7">
                            <TextContainer>{children}</TextContainer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

interface Right{
    children: any;
    src: any;
}
const Right: FC<Right> = ({ children, src }) => {
    return (
        <>
            <div className="basic-3">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <TextContainer>{children}</TextContainer>
                        </div>
                        <div className="col-lg-7">
                            <ImageContainer src={src} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

interface Props {
    children: any;
    src: any;
    type:string
}
const Detail: FC<Props> = ({ src, children, type }) => {
    return (
        <>
        <div id="details" className="basic-2">
            <div className="container">
                <div className="row">
                    {type === "right" ? (
                        <Right src={src}>{children}</Right>
                    ) : (
                        <Left src={src}>{children}</Left>
                    )}
                </div>
            </div>
        </div>

        <style>
            {
                `
                .basic-2 {
                    padding-top: 3rem;
                    padding-bottom: 4.5rem;
                }
                
                .basic-2 h2 {
                    margin-bottom: 1.5rem;
                }
                
                .basic-2 .text-container {
                    margin-bottom: 4rem;
                }
                
                .basic-3 .image-container {
                    margin-bottom: 3rem;
                }
                
                .basic-3 h2 {
                    margin-bottom: 1.5rem;
                }
                
                .basic-3 .list-unstyled {
                    margin-bottom: 1.75rem;
                }
                
                .basic-3 .list-unstyled .fas {
                    color: #594cda;
                    font-size: 0.75rem;
                    line-height: 1.625rem;
                }
                
                .basic-3 .list-unstyled .media-body {
                    margin-left: 0.375rem;
                }
                
                .basic-3 .btn-solid-reg {
                    margin-right: 0.375rem;
                }
                `
            }
        </style>
        </>
    );
};

export default Detail;
