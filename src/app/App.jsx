import { ChakraProvider } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Layout from "src/common/ui/Layout";
import MovieDetails from "src/features/movies/MovieDetails";
import MoviesList from "src/features/movies/MoviesList";

export default function App() {
  return (
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MoviesList />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
        </Route>
        <Route path="/contact" element={<Layout />}>
          <Route index element={<h1>Contact Page</h1>} />
        </Route>
      </Routes>
    </ChakraProvider>
  );
}
