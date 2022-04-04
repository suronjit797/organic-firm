import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import './Home.css'
import flatCabbage from '../../images/flatCabbage.png'

import ReviewCard from '../../components/ReviewCard/ReviewCard'
import useReview from '../../Hooks/useReview';

const Home = () => {
    // dynamic title
    document.title = 'Organic Farm || Home'

    const [reviews, setReviews] = useReview()

    const [userName, setUserName] = useState('')
    const [userReview, setuserReview] = useState('')
    const [userRating, setuserRating] = useState(0)

    const reviewHandler = event => {
        event.preventDefault()
        let id = new Date().getTime()

        const ratingObject = {
            id,
            name: userName,
            review: userReview,
            ratings: userRating,
            picture: "images/user1.png"
        }
        setReviews([ratingObject, ...reviews])

        console.log(reviews)
    }

    const ratingHandler = e => {
        let rating = e.target.value
        if (rating > 5){
            rating = 5
        }else if( rating < 0){
            rating = 0
        }
            setuserRating(rating)
    }


    return (
        <section>
            <div className="row gx-5 align-items-center">
                <div className="col-md-5 col-lg-3">
                    <img src={flatCabbage} alt="flatCabbage" />
                </div>
                <div className="col-md-7 col-lg-9">
                    <h1 className="text-capitalize home_header">
                        <span className='primary_color'>Flat </span> Cabbage
                    </h1>
                    <h4 className='fs-3 text-capitalize my-3'>
                        Buy full <span className="primary_color"> Fresh vagitable </span> form hare
                    </h4>
                    <p className='text_justif'>
                        Flat cabbage is large in size, averaging 20-30 centimeters in diameter, and has an unusual squat to oblate shape. The flat heads consist of loosely packed, thin layers that are protected by outer leaves ranging in color from dark green to purple. Beneath the top layer of leaves, the leaves comprising the head are smooth and broad, light green leaves with small, white to pale green veins.
                    </p>

                    <Link to="/buy-now" className='primary_button mt-3'> <span>Buy now</span> </Link>
                </div>
            </div>
            <hr className='my-5' />

            <div className="home_review mt-5">
                <h1 className="text-center fw-bold mb-4"> Cutomer Review ({reviews.length}) </h1>

                <div className="home_review-main">
                    {
                        !reviews.length ? (
                            <p className='text-danger'> No reivew found </p>
                        ) : (

                            reviews.map((review, ind) => (
                                ind < 3 && <ReviewCard key={review.id} reviewItem={review} />
                            ))
                        )
                    }
                    <p className="text-center">
                        {
                            reviews.length > 3 ?
                                <Link to='/review' className='mt-4 primary_button'> <span>See more</span> </Link>
                                : ''
                        }
                    </p>

                    <form onSubmit={reviewHandler}>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder='Name'
                            className="form-control mb-3"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                        <input
                            type="number"
                            name="rating"
                            id="rating"
                            placeholder='rating 1-5'
                            className="form-control mb-3"
                            value={userRating}
                            onChange={ratingHandler}
                        />
                        <textarea
                            placeholder='Provide Your Message'
                            name="reviewForm"
                            className='form-control mb-3'
                            id="reviewForm"
                            rows="5"
                            value={userReview}
                            onChange={e => setuserReview(e.target.value)}
                        ></textarea>

                        <button 
                        type="submit" 
                        className='mx-auto d-block primary_button border-0' 
                        disabled={!userName}
                        > <span>Submit</span></button>
                    </form>
                </div>
            </div>

        </section>
    );
};

export default Home;