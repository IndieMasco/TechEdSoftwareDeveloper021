import { filmType } from "@/types/filmType";

// OR

// I can just put whats in my types folders in here

// export type filmType = {
//   id: number;
//   name: string;
//   director?: string;
//   releaseYear: number;
// };

export const filmsData: filmType[] = [
  {
    id: 1,
    name: "film1",
    director: "director1",
    releaseYear: 2025,
  },
  {
    id: 2,
    name: "film2",
    director: "director2",
    releaseYear: 1994,
  },
  {
    id: 3,
    name: "film3",
    director: "director3",
    releaseYear: 2001,
  },
  {
    id: 4,
    name: "film4",
    releaseYear: 2018,
  },
];
