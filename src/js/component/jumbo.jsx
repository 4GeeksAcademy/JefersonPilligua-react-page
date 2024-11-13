import React from 'react';
import paisaje from "../../img/paisaje.jpg"

export const Jumbo = () => {
    return (
        <div className="container mt-4">
            <div className="card">
                <img src={paisaje} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h5 className="card-title mt-5 p-4">A WARM WELCOME!</h5>
                    <p className="card-text p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis consequuntur voluptatum, nemo neque quod est nulla eveniet, nisi modi sint minima excepturi recusandae quas illo omnis voluptate ab magni doloribus?</p>
                    <button type="button" className="btn btn-primary bt-img">Call to action!</button>
                </div>
            </div>
        </div>
    )

};