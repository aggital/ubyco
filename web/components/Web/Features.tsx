import React from 'react'
import Card from './Card'
import Icon1 from '../../public/images/features-icon-1.svg'
import Icon2 from '../../public/images/features-icon-4.svg'
import Icon3 from '../../public/images/features-icon-6.svg'



export default function Features() {
    return (
        <>
            <div id="features" className="cards-1">
                <div className="container">
                    <h1 className="mb-4">Why we are the best</h1>
                    <div className="row">
                        <div className="col-lg-12">
                            <Card image={Icon1} title='Mobile App' text='Mobile app is presently under development. Watch out.' />

                            <Card image={Icon2} title='Safe And Secure' text='Your credentials which inludes banking info is safe with us.' />

                            <Card image={Icon3} title='Swift Transactions' text='Transactions are completed with payment in 7 minutes or less.' />
                        </div>
                    </div>
                </div>
            </div>

            <style>
                {
                    `
            cards-1 {
                padding-top: 4rem;
                padding-bottom: 1.5rem;
                text-align: center;
            }
            
            .cards-1 .card {
                margin-bottom: 3.5rem;
                padding: 3.125rem 1rem 2.125rem 1rem;
                border: none;
                border-radius: 16px;
                background-color: #f1f9fc;
            }
            
            .cards-1 .card-image {
                margin-bottom: 1.5rem;
            }
            
            .cards-1 .card-image img {
                width: 70px;
                height: 70px;
                margin-right: auto;
                margin-left: auto;
            }
            
            .cards-1 .card-body {
                padding: 0;
            }
            
            .cards-1 .card-title {
                margin-bottom: 0.375rem;
            }
            `
                }
            </style>
        </>

    )
}
