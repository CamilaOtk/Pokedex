// declare module namespace {
//     export interface RootObject {
//         abilities: string[];
//         detailPageURL: string;
//         weight: number;
//         weakness: string[];
//         number: string;
//         height: number;
//         collectibles_slug: string;
//         featured: string;
//         slug: string;
//         name: string;
//         ThumbnailAltText: string;
//         ThumbnailImage: string;
//         id: number;
//         type: string[];
//     }
// }

export interface IPokemon {
  abilities: string[];
  detailPageURL: string;
  weight: number;
  weakness: string[];
  number: string;
  height: number;
  collectibles_slug: string;
  featured: string;
  slug: string;
  name: string;
  ThumbnailAltText: string;
  ThumbnailImage: string;
  id: number;
  type: string[];
}
