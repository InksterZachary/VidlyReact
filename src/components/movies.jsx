import React, { Component } from "react";
import { getMovies } from "../services/services/fakeMovieService";

class Movies extends Component {
    state = { 
        movies: getMovies()
     };

     deleteMovie = (movie) =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies});
     };

    render() { 
        const {length: mCount} = this.state.movies;

        if(mCount === 0) 
            return <p>There are no movies in the database.</p>;

        return (
        <div>
        <p>Showing {mCount} movies in the database.</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th />
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie => (
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={() => this.deleteMovie(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
                ))}
            </tbody>
        </table>
        </div>
        );
    }
}
 
export default Movies;