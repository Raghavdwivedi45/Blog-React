import { useEffect, useState } from 'react';
import AuthorCard from '../components/Author/AuthorCard.jsx';
import "../css/author/AuthorPage.css";
import { getAll } from '../lib/author/authorHelp.js';


const AuthorPage = () => {
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