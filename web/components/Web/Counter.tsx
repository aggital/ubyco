import React, { FC } from 'react'


interface Counting {
    data: number,
    info: string,
}

const Counting: FC<Counting> = ({ data, info }) => {
    return (
        <div className="cell">
            <div className="counter-value number-count" data-count={data}>1</div>
            <p className="counter-info">{info}</p>
        </div>
    )
}

const Counter = () => {
    return (
        <>
        <div className="counter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div id="counter">
                            <Counting data={300} info="Happy Custommer" />
                            <Counting data={280} info="Issue Solved" />
                            <Counting data={250} info="Good Reviews" />
                            <Counting data={180} info="Case Study" />
                            <Counting data={210} info="Order Recieved" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <style>
            {`
            .counter {
                padding-top: 2rem;
                padding-bottom: 4.5rem;
                text-align: center;
            }
            
            .counter #counter {
                margin-bottom: 0.75rem;
            }
            
            .counter #counter .cell {
                display: inline-block;
                width: 124px;
                margin-right: 1.5rem;
                margin-bottom: 3.5rem;
                margin-left: 1.5rem;
                vertical-align: top;
            }
            
            .counter #counter .counter-value {
                color: #252c38;
                font-weight: 700;
                font-size: 3.25rem;
                line-height: 3.75rem;
                vertical-align: middle;
            }
            
            .counter #counter .counter-info {
                margin-bottom: 0;
                font-size: 0.875rem;
                vertical-align: middle;
            }
            
            `}
        </style>
        </>
    )
}

export default Counter
