"use client";

import { ReactNode, useState } from "react";

import MovieList from "@/components/MovieList";
import Loader from "@/components/Loader";
import ErrorScreen from "@/components/ErrorScreen";

import { getMovies } from "@/utils/api";

import { IMovie } from "@/types";

import { Button } from "./styled";

export default function Movies(): ReactNode {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  async function fetchMovies() {
    try {
      setLoading(true);
      const response = await getMovies(1000);
      setMovies(response.results);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  }

  if (isLoading) return <Loader />;
  if (error) return <ErrorScreen error={error} />;
  if (!movies) return <div>No data</div>;

  return (
    <main>
      <h1>Movies Page</h1>
      <Button onClick={() => fetchMovies()}>Fetch Popular Movies</Button>
      <MovieList movies={movies} />
    </main>
  );
}
