import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Filter from "@/components/Filter";

import { IMovie } from "@/types";

import { MovieListWrapper, MovieItem, MovieInfo } from "./styled";

type IMovieListProps = {
  movies: IMovie[];
};

export default function MovieList({ movies }: IMovieListProps) {
  const [filter, setFilter] = useState<string>("");
  const [sort, setSort] = useState<string>("date");

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(filter.toLowerCase()),
  );

  const sortOptions: { [key: string]: (a: IMovie, b: IMovie) => number } = {
    date: (a, b) =>
      new Date(b.release_date).getTime() - new Date(a.release_date).getTime(),
    vote_average: (a, b) => b.vote_average - a.vote_average,
    popularity: (a, b) => b.popularity - a.popularity,
  };

  const sortedMovies = filteredMovies.sort(sortOptions[sort]);

  return (
    <>
      {movies && (
        <Filter
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          setSort={setSort}
        />
      )}
      <MovieListWrapper>
        {sortedMovies.map((movie: IMovie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <MovieItem>
              <MovieInfo>Name: {movie.title}</MovieInfo>
              <MovieInfo>Rating: {movie.vote_average}</MovieInfo>
              <MovieInfo>Popularity: {movie.popularity}</MovieInfo>
              <MovieInfo>Release Date: {movie.release_date}</MovieInfo>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                width={200}
                height={200}
                alt={movie.title}
              />
            </MovieItem>
          </Link>
        ))}
      </MovieListWrapper>
    </>
  );
}
