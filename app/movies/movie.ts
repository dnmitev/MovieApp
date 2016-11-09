export interface IMovie {
    poster_path: string;
    overview: string;
    release_date: Date;
    genre_ids: number[];
    id: number;
    title: string;
    popularity: number;
    vote_average: number;
}