import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { AiFillStar } from 'react-icons/ai'
import './carousel.css'

const CarouselComp = ({popularList}) => {

    let DISPLAY_COUNT = 6;

    return (
        <div className="carousel__container">
        <Carousel autoPlay={true} infiniteLoop={true} showStatus={false} showThumbs={false} transitionTime={3} swipeable={false}>
            {
                popularList.filter((_,index) => index < DISPLAY_COUNT).map(banner => {
                    const {backdrop_path, id, release_date, title, vote_average, overview} = banner;
                    return (
                        <div className="banner" key={id}>
                    <img src={`https://image.tmdb.org/t/p/original${ backdrop_path ? backdrop_path : ""}`} alt="bannerImage"/>
                    <div className="overlay">
                        <h1 className="title">{title ? title : ""}</h1>
                        <div className="release__info">
                            <span className="release__date">{release_date ? release_date : ""}</span>
                            <span className="rating"><AiFillStar className="star"/><span>{vote_average ? vote_average : ""}</span></span>
                        </div>
                        <p className="desc">
                            {overview}
                        </p>
                    </div>
            </div>
                    )
                })
            }
            
            
        </Carousel>
        </div>
    )
}

export default CarouselComp;