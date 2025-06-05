import { useEffect, useState } from 'react';
import Author from '../components/Author/Author.jsx';
import AuthorCard from '../components/Author/AuthorCard.jsx';
import "../css/author/AuthorPage.css";
import { getAll } from '../lib/author/authorHelp.js';
import { authorStore } from '../store/authorStore';


const AuthorPage = () => {
  const { authorInfo } = authorStore();

  // const scrollRef = useRef(null);

  // const scrollRight = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft += 320;
  //   }
  // };

  // const scrollLeft = () => {
  //   if (scrollRef.current) {
  //     scrollRef.current.scrollLeft -= 360;
  //   }
  // };


  const [author, setAuthor] = useState([]);
  
  
    useEffect(() => {
      const getAuthors = async () => {
        const auth = await getAll();
        if(auth.data?.error) return; 
        setAuthor(auth.data);
      }
      getAuthors();
      return () => {};
    }, [])

  
  if(authorInfo) return <Author/>

  return (
    <div className='author-container'>
      {
        author.map((a) => <AuthorCard key={a._id} info={a} />)
      }
    </div>
  )
}

export default AuthorPage
 






// {/* <div className="author-arrow-left">
//     <img className='' src="../assets/arrow.png" alt="" onClick={scrollLeft} />
//   </div> */}


//   <div className='author-pg-cards'>  {/*ref={scrollRef}  */}
//   </div>
  
//   {/* <div className="card-boundary"></div> */}
  
//   {/* <div className="author-arrow-right">
//     <img className='' src="../assets/arrow.png" alt="" onClick={scrollRight} />
//   </div> */}