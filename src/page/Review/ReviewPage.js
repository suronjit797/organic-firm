import React from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard'

import useReview from '../../Hooks/useReview';

import './ReviewPage.css'

const ReviewPage = () => {
    // dynamic title
    document.title = 'Organic Farm || Reivew';

    const [reviews] = useReview();

    let reviewTotal = 0
    reviews.map(review => (reviewTotal += (review.ratings)))
    let reviewSum = (reviewTotal / (reviews.length)).toFixed(2)



    return (
        <div className='review_page'>
            <h1 className="text-center"> Review: ({reviews.length}) </h1>
            <h3 className="text-center mb-4">
                Rating: <small className='text-secondary'>{reviewSum} / {reviewTotal}</small>
            </h3>
            {
                reviews.length > 0 ? (
                    reviews.map((review, ind) => <ReviewCard key={review.id} reviewItem={review} />)
                ) : (
                    <p className="text-center text-danger"> No Review found</p>
                )
            }
        </div>
    );
};

export default ReviewPage;