import React, { useState, useEffect, Key, ReactNode } from "react";
import axios from "axios";

interface IMovie {
    id: number;
    title: string;
    year: number;
}

interface AxiosInterface {
    // id: Key | null | undefined;
    // title: ReactNode;
    // year: ReactNode;
    status: string;
    status_message: string;
    data: {
        movie_count: number;
        limit: number;
        page_number: number;
        movies: IMovie[];
    }
}

const AxiosFetchGet: React.FC = () => {
    const [dat, setData] = useState<AxiosInterface[] | null>(null);
    const [error, setErr] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://yts.mx/api/v2/list_movies.json/genre');
                console.log(response);
                setData(response.data.data.movies);
            } catch (error) {
                setErr("Failed to fetch");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [])

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: {error}</div>

    return (
        <div>
            <h3>Fetaching data using axios</h3>
            {/* <ul>
                {dat?.map((movie) => (
                    <li key={movie?.id}>
                        <h2>{movie?.title}</h2>
                        <p>Year: {movie?.year}</p>
                    </li>
                ))}
            </ul> */}

            <ul>
                {dat && dat.length > 0 && dat.map((m: any) => {
                    return (
                        <>
                            <p>{m.title}</p>
                            <p>{m.year}</p>
                        </>
                    )
                })}
            </ul>
        </div>

    )

}
export default AxiosFetchGet;