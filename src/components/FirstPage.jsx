import React from 'react'
import { Link } from 'react-router-dom'
// CSS includes
import "../CSS/Banner.css"

//images includes
import b1 from "../Images/b1.png"
import b2 from "../Images/b2.png"
import b3 from "../Images/b3.png"

//components
import Body from "../Home/Body"

function FirstPage() {
    var handleClick = e => {
        alert()
        console.log(1212312);

    }
    return (
        <div>
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2000">
                            <Link to="/register">
                                <img src={b1} className="d-block w-100" />
                            </Link>
                        </div>
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={b2} className="d-block w-100" />
                        </div>
                        <div className="carousel-item active" data-bs-interval="2000">
                            <img src={b3} className="d-block w-100" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            {/* including the body, below the carousel */}
            <Body></Body>
        </div>
    )
}

export default FirstPage
