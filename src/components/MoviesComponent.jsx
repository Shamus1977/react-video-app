import React, { Component } from 'react';
import MovieComponent from './MovieComponent';
import {getMovies} from '../services/fakeMovieService';

class MoviesComponent extends Component {
    state = {
        movies:getMovies(),//is array;
    }

    handleDelete = (movieId) => {
        const movies = this.state.movies.filter(m => m._id !== movieId);
        this.setState({movies});
    }

    handleFavorite = (movieId) => {
        const movies = this.state.movies.map( m => {
            if(m._id === movieId){
                m.favorite === false ? m.favorite = true : m.favorite = false;
            }
            return m;
        })
        this.setState({movies})
    }

    render() { 
        let {length: count} = this.state.movies
        return (
            <React.Fragment>
                {count > 0 && `There Are: ${count} Great Movies In The Database!`}<br/>
                {count > 0?
                    <table style={{maxWidth:"800px"}}  className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>Title</th>
                            <th scope='col'>Genre</th>
                            <th scope='col'>Stock</th>
                            <th scope='col'>Rating</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movies.map(m => {
                            return (
                                <tr key={m._id}>
                                    <MovieComponent 
                                        title={m.title}
                                        genre={m.genre.name}
                                        stock={m.numberInStock}
                                        rate={m.dailyRentalRate}
                                        id={m._id}
                                        onDelete={this.handleDelete}
                                        onFavorite={this.handleFavorite}
                                        fav={m.favorite}
                                    />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>:'There Are No Movies!'}
            </React.Fragment>
        );
    }
}

export default MoviesComponent;