import { Link } from "react-router-dom";
import { data } from "./data";
import MovieCard from "./MovieCard";
import { Heading, SimpleGrid } from "@chakra-ui/react";

function MoviesList() {
  return (
    <>
      <Heading textAlign="center" size="xl">
        Trending Movies
      </Heading>
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {data.results.map((movie) => (
          <Link key={movie.id} to={`/movies/${movie.id}`}>
            {movie.title}
            <MovieCard />
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
}

export default MoviesList;
