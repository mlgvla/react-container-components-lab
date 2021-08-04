import React from 'react';

const Review = ({
    headline,
    summary_short,
    link
}) => {
    return (
        <div className='review'>      
            <a href={link.url}><h2>{headline}</h2></a>
            <h3>{summary_short}</h3>            
        </div>
    )
}

const MovieReviews = ({reviews}) => <div className='review-list'>{reviews.map(Review)}</div>

MovieReviews.defaultProps = {
    reviews: []
  };

export default MovieReviews;

