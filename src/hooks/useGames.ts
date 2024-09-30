import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";


export interface Game {
    id: number;
    name: string;
    released: string;
    background_image: string;
    rating: number;
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
  
  interface FetchGamesResponse {
    count: number;
    results: Game[];
  }

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
  
    useEffect(() => {
        const controller = new AbortController();
        apiClient
            .get<FetchGamesResponse>("/games", {signal:controller.signal})
            .then((res) => setGames(res.data.results))
            .catch((err) => {
            if(err instanceof CanceledError) {return;}
            console.error(err);
            setError(err.message);
        });
        return () => controller.abort();
    }, []);

    return { games, error };
}


export default useGames;