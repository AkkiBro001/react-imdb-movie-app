import { AiFillStar } from 'react-icons/ai'
import SkeletonCard from './SkeletonCard';
import { Link } from 'react-router-dom';

import './card.css';
import { useState, useEffect} from 'react';


const Card = ({movie}) => {

    
    const [isLoading, setLoading] = useState(true)
  
    const {id,title, overview, release_date, vote_average, poster_path} = movie;
    

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1500)
        
        
        
    },[])
    
    return (
        <>
        {
            isLoading ? <SkeletonCard/> :
        <Link to={`/react-imdb-movie-app/movie/${id}`} style={{all: 'unset'}}>
        <div className="card">
            <img src={`https://image.tmdb.org/t/p/original/${ poster_path ? poster_path : ""}`} alt="cardImage" />
            
            <div className="card__overlay">
                <h2 className="card__title">
                    {title ? title : ""}
                </h2>
                <div className="card__info">
                    <span>{release_date ? release_date : ""}</span>
                    <span><AiFillStar className='star'/> <span>{vote_average ? vote_average : ""}</span></span>
                </div>
                <div className="card__desc">
                    {overview ? overview.slice(0,80) + "..." : ""}
                </div>
            </div>
        </div>
        </Link>
        }
        </>
    )
}

export default Card