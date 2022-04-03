import React from 'react';
import { Link } from 'react-router-dom'

import './Home.css'

import flatCabbage from '../../images/flatCabbage.png'

const Home = () => {
    // dynamic title
    document.title = 'Organic Farm || Home'

    return (
        <section>
            <div className="row gx-5">
                <div className="col-md-5 col-lg-3">
                    <img src={flatCabbage} alt="flatCabbage" />
                </div>
                <div className="col-md-7 col-lg-9">
                    <h1 className="text-capitalize home_header">
                        <span className='primary_color'>Flat </span> Cabbage
                    </h1>
                    <h4 className='fs-3 text-capitalize'>
                        Buy full <span className="primary_color"> Fresh vagitable </span> form hare
                    </h4>
                    <p className='text_justify mt-4'>
                        Flat cabbage is large in size, averaging 20-30 centimeters in diameter, and has an unusual squat to oblate shape. The flat heads consist of loosely packed, thin layers that are protected by outer leaves ranging in color from dark green to purple. Beneath the top layer of leaves, the leaves comprising the head are smooth and broad, light green leaves with small, white to pale green veins.
                    </p>

                    <Link to="/buy-now" className='primary_button'> <span>Buy now</span> </Link>
                </div>
            </div>

        </section>
    );
};

export default Home;