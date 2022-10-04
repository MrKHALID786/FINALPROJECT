import React from 'react'
import { Link } from 'react-router-dom'

//images includes
import b1 from "../Images/Acne.png"
import b2 from "../Images/coughing.png"
import b3 from "../Images/period.png"

function Body() {
    return (
        <div className='container  py-5 px-5' >

            <div className='row justify-content-evenly'>

                <div className='card col-3 p-0 mx-1 mb-4'>
                    {/* importing {b1} the photo from above imports  */}
                    <a  href="https://www.webmd.com/skin-problems-and-treatments/acne/10-tips-for-preventing-pimples/">
                    <img src={b1} style={{}} className="card-img-top" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-text">Acne, Pimples and Skin issue</h5>
                    </div>
                </div>

                <div className='card col-3 p-0 mx-1 mb-4'>
                <a  href="https://my.clevelandclinic.org/health/diseases/13756--colds-and-flu-symptoms-treatment-prevention-when-to-call/">
                    <img src={b2} style={{}} className="card-img-top" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-text">Cold ,Cough or Fever</h5>
                    </div>
                </div>

        
                <div className='card col-3 p-0 mx-1 mb-4'>
                <a  href="https://www.healthshots.com/intimate-health/menstruation/believe-or-not-tiger-balm-made-my-period-pain-disappear-in-just-30-minutes/">
                    <img src={b3} style={{}} className="card-img-top" />
                    </a>
                    <div className="card-body">
                        <h5 className="card-text">Periods, doubts or Pregenancy</h5>
                    </div>
                
                </div>
            

                {/* <div className='card col-3 p-0 mx-1 mb-4'>
                    <img src={b1} className="card-img-top" />
                    <div className="card-body">
                    <h5 className="card-text">Acne, Pimples and Skin issue</h5>
                    </div>
                </div>
                <div className='card col-3 p-0 mx-1 mb-4'>
                    <img src={b2} className="card-img-top" />
                    <div className="card-body">
                    <h5 className="card-text">Cold ,Cough or Fever</h5>
                    </div>
                </div>
                <div className='card col-3 p-0 mx-1 mb-4'>
                    <img src={b3} className="card-img-top" />
                    <div className="card-body">
                    <h5 className="card-text">Periods, doubts or Pregenancy</h5>
                    </div>
                </div> */}
            
            </div>

        </div>
    )
}

export default Body