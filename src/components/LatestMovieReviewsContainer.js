import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZGkEAm9fha8AdC9FzAYlM02wv3AGYgcT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;


class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }
        
    }
    

    componentDidMount() {
        fetch(URL)
            .then(res => res.json())
            .then(data => this.setState({reviews: data.results}))
    }


    render() {
        return (
            <div className='latest-movie-reviews'>
                <h2>Reviews</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        );
    }
}

export default LatestMovieReviewsContainer;

