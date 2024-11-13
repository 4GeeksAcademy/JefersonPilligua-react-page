import React from "react";
import card1 from "../../img/paisaje2.jpg"
import card2 from "../../img/paisaje3.jpg"
import card3 from "../../img/paisaje1.jpg"
import card4 from "../../img/paisaje4.jpg"

export const Card = () => {
    return (
        <div className="container mb-4 mt-5 text-center containe-cards">
            <div className="row row-cols-1 row-cols-md-4 g-3">
                <div className="col">
                    <div className="card h-100 cards">
                        <img src={card1} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title m-0">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary">Call to action!</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 cards">
                        <img src={card2} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title m-0">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary">Call to action!</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 cards">
                        <img src={card3} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title m-0">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary">Call to action!</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 cards">
                        <img src={card4} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title m-0">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary">Call to action!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}
