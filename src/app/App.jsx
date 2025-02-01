import { Route, Routes } from "react-router-dom";
import MoviesList from "src/features/MoviesList";

export default function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<MoviesList />} />
      </Route>
    </Routes>
  );
}
