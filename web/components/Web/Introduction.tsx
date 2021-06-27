import React from "react";

export default function Introduction() {
    return (
        <>
            <div className="basic-1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <p>
                                Ubycohub is the best gift card trading platforms in Nigeria. We
                                have been in existence since 2013 trading gift cards and
                                cryptocurrencies and offering mind blowing services to customers
                                in Nigeria and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <style>
                { `
              .basic-1 {
                padding-top: 1rem;
                padding-bottom: 3.5rem;
                text-align: center;
            }
            
            .basic-1 p {
                color: #252c38;
                font-size: 1.875rem;
                line-height: 2.625rem;
            }
            
            @media(max-width: 550px) {
                .basic-1 p {
                    font-size: 1.1rem;
                    line-height: 30px;
                }
            }
            
              `
                }
            </style>
        </>
    );
}
