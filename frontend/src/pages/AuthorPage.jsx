import AuthorCard from '../components/AuthorCard'
import "../css/AuthorPage.css"


const AuthorPage = () => {
  return (
        <div className='author-pg-cards'>
            <img className='author-arrow-left' src="../assets/arrow.png" alt="" />
            <AuthorCard/>
            <AuthorCard/>
            <AuthorCard/>
            <AuthorCard/>
            <AuthorCard/>
            <img className='author-arrow-right' src="../assets/arrow.png" alt="" />
        </div>
  )
}

export default AuthorPage