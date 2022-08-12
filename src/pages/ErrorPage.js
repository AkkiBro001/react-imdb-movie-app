import {Link} from 'react-router-dom';
const ErrorPage = () => {
  return (
    <>
    <h2 style={{textAlign:"center", fontSize:'3rem', marginTop: '1em'}}>Page Not Found !!!!!</h2>
    <Link to="/" style={{textAlign: 'center', display:'block', fontSize: '1.3rem', color: '#ccc', marginTop: '1em'}}>Go to Home Page</Link>
    </>


  )
}

export default ErrorPage