/* import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; */
import {
  Flex,
  Heading,
  SimpleGrid,
  Spinner /* , useToast  */,
} from "@chakra-ui/react";
import { MOVIEDB_IMAGES_URL } from "src/common/constants";
import MovieCard from "./MovieCard";
import {
  /* fetchMovies,
  selectAllMovies,
  selectMoviesError,
  selectMoviesStatus, */
  useGetMoviesQuery,
} from "./moviesSlice";

function MoviesList() {
  /* const dispatch = useDispatch();
  const toast = useToast();
  const movies = useSelector(selectAllMovies);
  const moviesStatus = useSelector(selectMoviesStatus);
  const moviesError = useSelector(selectMoviesError); */

  /*   console.log(movies);
  console.log(moviesStatus); */

  /* useEffect(() => {
    const fetchData = async () => {
      try {
        await dispatch(fetchMovies()).unwrap();
      } catch (err) {
        toast({
          title: "Failed to load movies",
          description:
            "Please refresh the page and check your internet connection!",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    };

    fetchData();
  }, [dispatch, toast]); */

  const { data, isError, error, isLoading, isSuccess } = useGetMoviesQuery();

  let content;
  if (isSuccess) {
    content = (
      <SimpleGrid spacing={4} columns={{ sm: 1, md: 3, lg: 4 }}>
        {data.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={`${MOVIEDB_IMAGES_URL}/${movie.poster_path}`}
            overview={movie.overview}
          />
        ))}
      </SimpleGrid>
    );
  } else if (isLoading) {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        <Spinner text="Loading..." />
      </Flex>
    );
  } else if (isError) {
    content = (
      <Flex alignItems="center" justifyContent="center" minH="100vh">
        {error}
      </Flex>
    );
  }
  return (
    <>
      <Heading textAlign="center" size="xl" mb={4}>
        Trending Movies
      </Heading>
      {content}
    </>
  );
}

export default MoviesList;
