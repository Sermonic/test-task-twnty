"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Loader from "@/components/Loader";
import ErrorScreen from "@/components/ErrorScreen";

import { getMovie } from "@/utils/api";

import { IMovie } from "@/types";

export default function MovieDetail() {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const [movie, setMovie] = useState<IMovie | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchMovie = async (id: string) => {
    try {
      setLoading(true);
      const response = await getMovie(id);
      setMovie(response);
    } catch (error) {
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchMovie(id as string);
    }
  }, [id]);

  if (isLoading) return <Loader />;
  if (error) return <ErrorScreen error={error} />;
  if (!movie) return <div>No data</div>;

  return (
    <main>
      <h1>Movie Detail</h1>
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        width={200}
        height={200}
        alt={movie.title}
      />
      <p>Name: {movie.title}</p>
      <p>Release Date: {movie.release_date}</p>
      <p>Overview: {movie.overview}</p>
    </main>
  );
}
