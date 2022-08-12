import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import './moviedetails.css'
const MovieDeatils = () => {
    const {id} = useParams()
    const [details, setDetails] = useState(null);
    const [isLoading, setLoading] = useState(true);
    useEffect(()=>{
        let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        
        // fetch(URL).then(res => res.json()).then(data => {setDetails(data)}).catch(e => console.log(e))
        fetch(URL).then(res => res.json()).then(data => {setDetails(data)}).then(_ => {setTimeout(()=>{setLoading(false)},1500)}).catch(e => console.log(e))
        // setTimeout(()=>{setLoading(false)},1500)
        
    }, [])

    useEffect(()=>{
        let URL = `https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;
        
        // fetch(URL).then(res => res.json()).then(data => {setDetails(data)}).catch(e => console.log(e))
        fetch(URL).then(res => res.json()).then(data => {setDetails(data)}).then(_ => {setTimeout(()=>{setLoading(false)},1500)}).catch(e => console.log(e))
        // setTimeout(()=>{setLoading(false)},1500)
        
    }, [id])

    if(!details) return null;

    const {backdrop_path, budget, genres, homepage, original_title, overview, poster_path, production_companies, release_date, tagline, revenue, vote_average} = details;
    let produnctionNames = "-";
    if(production_companies.length > 0){
        produnctionNames = production_companies.map(production => production.name).join(", ")
    }

    function convertToInternationalCurrencySystem (labelValue) {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? (Math.abs(Number(labelValue)) / 1.0e+9).toFixed(2) + "B"
        // Six Zeroes for Millions 
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? (Math.abs(Number(labelValue)) / 1.0e+6).toFixed(2) + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? (Math.abs(Number(labelValue)) / 1.0e+3).toFixed(2) + "K"
    
        : Math.abs(Number(labelValue));
    
    }
    
    
    return <>
        <div className="movie_details_container">
        {
            <>
            <div className="banner">
                {isLoading ? <SkeletonTheme baseColor="gray" highlightColor="lightgray">
                    <Skeleton  style={{borderRadius: '0', width:'100%', aspectRatio:'16 / 9'}}/>
                </SkeletonTheme> :
                    <img src={`https://image.tmdb.org/t/p/original${backdrop_path ? backdrop_path : ""}`} alt="bannerImage"/>
                }
            </div>
            <div className="details_section">
                <div className="poster">
                    {
                    isLoading ? <SkeletonTheme baseColor="gray" highlightColor="lightgray">
                        <Skeleton height={375} style={{borderRadius: '15px'}}/>
                    </SkeletonTheme> :
                    <img src={`https://image.tmdb.org/t/p/original${poster_path ? poster_path : ""}`} alt="posterImage"/>
                    }
                    <a href={homepage ? homepage : "/"} target="_blank" rel="noreferrer">Home Page</a>

                </div>
                <div className="details">
                    <h2 className='title'>{original_title ? original_title : "-"}</h2>
                    <p className='overview'>{overview ? overview : "-"}</p>
                    <div className='tagline'> <p className='subTitle'>Tagline : </p>
                    <span>{tagline ? tagline : "-"}</span>
                    </div>
                    <div className='genres'>
                        <p className='subTitle'>Genres : </p>

                        {   
                            
                            genres.length > 0 ? genres.map(genre=><span key={genre.id}>{genre.name ? genre.name : "-"}</span>) : "-"
                            
                            
                        }
                    </div>
                    <div className='release_date'>
                        <p className='subTitle'>Release Date: </p>
                        <span>{release_date ? release_date : "-"}</span>
                    </div>
                    <div className="bugdet">
                        <p className='subTitle'>Budget: </p>
                        <span>{budget ? convertToInternationalCurrencySystem(budget) : "-"}</span>
                    </div>
                    <div className="revenue">
                        <p className='subTitle'>Collection: </p>
                        <span>{revenue ? convertToInternationalCurrencySystem(revenue) : "-"}</span>
                    </div>
                    <div className="rating">
                        <p className='subTitle'>Rating: </p>
                        <span>{vote_average ? vote_average.toFixed(1) : "-"}</span>
                    </div>
                    <div className='production_companies'>
                        <p className='subTitle'>Production Companies: </p>
                        {
                            <span>{produnctionNames}</span>
                        }
                        
                        
                    </div>
                </div>
            </div>
            </>
        }
        </div>
    </>
}

export default MovieDeatils;