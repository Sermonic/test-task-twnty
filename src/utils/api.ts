import { apiUrl, headers } from "@/constants";

import { delay } from "@/utils/helpers";

export async function getMovies(
  time: number = 0,
  shouldError: boolean = false,
) {
  await delay(time);
  const response = await fetch(
    `${apiUrl}/movie/popular?language=en-US&page=1`,
    {
      headers,
    },
  );
  if (!response.ok || shouldError) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return response.json();
}

export async function getMovie(id: string) {
  const response = await fetch(`${apiUrl}/movie/${id}`, {
    headers,
  });
  if (!response.ok) {
    throw new Error(`An error has occurred: ${response.status}`);
  }

  return response.json();
}
