import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './card.css';

const SkeletonCard = () => {
return <SkeletonTheme baseColor="gray" highlightColor="lightgray">
    <Skeleton className="card"/>
</SkeletonTheme>
}

export default SkeletonCard; 