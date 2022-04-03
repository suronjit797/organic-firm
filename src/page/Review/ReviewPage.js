import React from 'react';
import ReviewCard from '../../components/ReviewCard/ReviewCard'

import useReview from '../../Hooks/useReview';

import './ReviewPage.css'

const ReviewPage = () => {
    // dynamic title
    document.title = 'Organic Farm || Reivew';
    
    const [reviews, setReviews] = useReview();


    console.log(reviews);

    return (
        <div className='review_page'>
            {
                reviews.map((review, ind) =>  <ReviewCard key={review.id} reviewItem={review} /> )
            }
        </div>
    );
};

export default ReviewPage;