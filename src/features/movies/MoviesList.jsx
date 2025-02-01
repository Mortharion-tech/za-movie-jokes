import { Link } from "react-router-dom";
import { data } from "./data";

function MoviesList() {
  return (
    <div>
      {data.results.map((movie) => (
        <Link key={movie.id} to={`/movies/${movie.id}`}>
          {movie.title}
        </Link>
      ))}
    </div>
  );
}

export default MoviesList;
