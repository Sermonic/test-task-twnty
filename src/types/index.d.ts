export interface NavbarLink {
  id: number;
  route: string;
  label: string;
}

export interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
}
