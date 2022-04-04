import React from 'react';

import './ReviewCard.css'
import noUser from '../../images/no_user.png'

let defaultReview = {
    picture: noUser,
    name: "Unknown",
    review: "",
    ratings: 0
}

const ReviewCard = ({ reviewItem }) => {
    const { picture, name, review, ratings } = (reviewItem ? reviewItem : defaultReview)
    return (
        <>
            <div className=" review_card mb-4 px-4">
                <img src={picture ? picture : noUser} className="img-fluid me-3" alt={picture ? picture : noUser} />
                <div className="card-body">
                    <h5 className="card-title"> {name ? name : 'unknown'} </h5>
                    <p className="card-text text_justify"> {review ? review : 'no review found'} </p>
                    <b>Ratings:  {ratings ? ratings : 0}</b>
                </div>
            </div>
        </>

    );
};

export default ReviewCard;