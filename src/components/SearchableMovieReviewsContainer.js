import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ZGkEAm9fha8AdC9FzAYlM02wv3AGYgcT';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;


class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ''
    }

    handleSubmit = (event) => {
        event.preventDefault()

        fetch(URL + `${this.state.searchTerm}`)
            .then(res => res.json())
            .then(data => this.setState({reviews: data.results}))
    }

    handleSearchInput = (event) => {
        this.setState({ searchTerm: event.target.value })
    }

    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Enter search term:</label>
                    <input
                        id="search-input"
                        type="text"
                        style={{ width: 300 }}
                        onChange={this.handleSearchInput}
                        value={this.state.searchTerm}
                    />
                </form>
                {typeof this.state.reviews === 'object' &&
                     this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        );
    }
}

export default SearchableMovieReviewsContainer;

