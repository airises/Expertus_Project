import React from 'react';
import { ArraiMain } from './Arr';
const Main = () => {
    return (
        <div>
            {
                ArraiMain.map((el)=>{
                    return(
                        <div>
                            <h1>{el.text}</h1>
                            <div>
                                <img src={el.img} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Main;