import React from 'react';

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
                    <h4 className='fs-3 text-capitalize'> welcome to <span className="primary_color"> Organic Farm </span> </h4>
                </div>
            </div>
            
        </section>
    );
};

export default Home;