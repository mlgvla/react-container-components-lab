import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZGkEAm9fha8AdC9FzAYlM02wv3AGYgcT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews = [],
        searchTerm: ''
    }

    handleSubmit = (event) => {
        //finish
    }

    handleSearchInput = (event) => {
        //finish
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Enter search term:</label>
                    <input type="text" id='search-input' onChange={this.handleSearchInput}>
                        <button type='submit'>Submit</button>
                    </input>
                </form>
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;

