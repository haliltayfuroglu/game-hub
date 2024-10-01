import { GameQuery } from "../App";
import useData from "./useData";
import { Platform } from "./usePlatforms";

export interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    rating: number;
    rating_top: number;
    genres: Array<{ id: number; name: string }>;
    platforms: Array<{ id: number; name: string }>;
    description_raw: string;
    esrb_rating: string;
    developers: Array<{ id: number; name: string }>;
    publishers: Array<{ id: number; name: string }>;
    website: string;
    metacritic: number;
    genres_count: number;
    platforms_count: number;
    developers_count: number;
    publishers_count: number;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    playtime: number;
    background_image_additional: string;
    videos: Array<{
      id: number;
      name: string;
      description: string;
      size: string;
    }>;
  }

const useGames = ( gameQuery:GameQuery) => 
  useData<Game>('/games',
  {params: {
    genres:gameQuery.genre?.id, 
    platforms: gameQuery.platform?.id,
    ordering:gameQuery.sortOrder,
    search: gameQuery.search
  }}, 
  [gameQuery]);


export default useGames;