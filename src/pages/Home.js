import React, {useState, useEffect} from "react";
import CarouselComp from "../components/carousel/Carousel";
import MovieList from "../components/movieList/MovieList";
const Home = () => {

    const [popularList, setPopularList] = useState([]);

    useEffect(()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US').then(res => res.json()).then(res => setPopularList(res.results))
    },[])

    return (
        <>
            <CarouselComp popularList = {popularList}/>
            <MovieList/>
        </>
    )
}

export default Home;