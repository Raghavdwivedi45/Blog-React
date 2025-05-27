import Author from '../components/Author';
import AuthorCard from '../components/AuthorCard';
import "../css/AuthorPage.css";
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

  const author = [
    {
      _id : "1",
      name:"Raghav Dwivedi",
      img:"../assets/hero1.png",
      // description:"",
      // email:"",
      // dateOfBirth:"",
      // majorLikes:"",
      // minorLikes:""
    },
    {
      _id : "2",
      name:"Lee Foo",
      img:"../assets/hero2.png",
      // description:"",
      // email:"",
      // dateOfBirth:"",
      // majorLikes:"",
      // minorLikes:""
    },
    {
      _id : "3",
      name:"Lee Fee",
      img:"../assets/hero3.png",
      // description:"",
      // email:"",
      // dateOfBirth:"",
      // majorLikes:"",
      // minorLikes:""
    },

];


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