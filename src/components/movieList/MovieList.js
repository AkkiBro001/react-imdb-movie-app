import React, {useState, useEffect} from "react";
import { useParams } from 'react-router-dom'
import Card from "../card/Card";
import './movielist.css'

const MovieList = () => {
    
    const {type} = useParams()
    const [movieList, setMovieList] = useState([])
    
    useEffect(()=>{
        getMovie()
    },[])

    useEffect(()=>{
        getMovie()
    },[type])

    const getMovie = () => {
        
        let URL = `https://api.themoviedb.org/3/movie/${type ? type : 'popular'}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        
        
        fetch(URL).then(res => res.json()).then(data => {setMovieList(data.results)})
    }

    

    return (
        <div className="card__container">
            <section>
            <h1>{type ? type.replace(/_/," ").toUpperCase() : 'POPULAR'}</h1>
                <div className="cards">
                    {
                        movieList.map(movie => <Card movie={movie} key={movie.id}/>)
                    }
                
                
                </div>
            </section>
        </div>
    )
}


export default MovieList;