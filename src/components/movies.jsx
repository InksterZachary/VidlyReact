import React, { Component } from "react";
import { getMovies } from "../services/services/fakeMovieService";

class Movies extends Component {
    state = { 
        movie: getMovies()
     };

    render() { 
        return (<table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {this.state.movie.map(movie => (
                <tr>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                </tr>
                ))}
            </tbody>
        </table>
        );
    }
}
 
export default Movies;