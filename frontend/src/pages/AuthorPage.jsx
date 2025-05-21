import AuthorCard from '../components/AuthorCard';
import "../css/AuthorPage.css";
import { useRef } from 'react';


const AuthorPage = () => {

  const scrollRef = useRef(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 360;
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 360;
    }
  };


  return (
    <div className='author-container'>
      <div className="author-arrow-left">
        <img className='' src="../assets/arrow.png" alt="" onClick={scrollLeft} />
      </div>

      <div className='author-pg-cards' ref={scrollRef} >
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
        <AuthorCard/>
      </div>
      
      <div className="author-arrow-right">
        <img className='' src="../assets/arrow.png" alt="" onClick={scrollRight} />
      </div>
    </div>
  )
}

export default AuthorPage