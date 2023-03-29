// import { useState } from 'react';
import data from './MovieData.json';

const movies = data.MovieData;

function MovieList() {
  //   const [listOfMovies, setMovies] = useState(movies);
  //   const addMovie = () => {
  //     setMovies([...movies, {}]);
  //   };
  return (
    <>
      <div>
        <h1>Joel Hilton's Movie Collection</h1>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Edited</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr>
              <td>{m.Category}</td>
              <td>{m.Title}</td>
              <td>{m.Year}</td>
              <td>{m.Director}</td>
              <td>{m.Rating}</td>
              <td>{m.Edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button className="btn btn-primary" onClick={addMovie}>
        Add New Movie
      </button> */}
    </>
  );
}

export default MovieList;
