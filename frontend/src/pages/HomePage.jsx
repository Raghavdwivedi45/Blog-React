import '../css/HomePage.css';
import LogoCarousel from '../components/LogoCarousel.jsx';
import HomeCards from '../components/HomeCards.jsx';

const HomePage = () => {
  return (
    <div className="homepage">
      
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">ArticleVerse</span>
        </h1>
        <p className="hero-subtitle">
          Dive into a universe of insightful articles, major topics, minor thoughts, and brilliant authors.
        </p>
        <button className="cta-button">Explore Now</button>
      </section>

      {/* Hero grid */}
      <section className="hero-grid">
        
        <div className="hero-grid-1">
          <div className="hero-grid-1-1"></div>
          <div className="hero-grid-1-2">
            {/* <div className="hero-grid-1-2-1"></div>
            <div className="hero-grid-1-2-2"></div> */}
          </div>
        </div>
        
        <div className="hero-grid-2">
          <div className="hero-grid-2-1"></div>
          <div className="hero-grid-2-2"></div>
        </div>

        <div className="carousel">
          <LogoCarousel/>
        </div>
      </section>


      {/* Featured Majors Section */}
      <section className="section">
        <h2 className="section-title">Featured Majors</h2>
        <div className="cards-container">
          {/* {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <h3>Sample Title {item}</h3>
              <p>This is a short description of the featured article {item}.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          ))} */}
          <HomeCards/>
        </div>
      </section>




      {/* Featured Articles Section */}
      <section className="section">
        <h2 className="section-title">Featured Minors</h2>
        <div className="cards-container">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <h3>Sample Title {item}</h3>
              <p>This is a short description of the featured article {item}.</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

export default HomePage;



// return (




//       {/* About Section */}
//       <section className="section about">
//         <h2 className="section-title">About ArticleVerse</h2>
//         <p>
//           ArticleVerse is a platform where knowledge meets passion. Explore a variety of subjects
//           written by authors from diverse fields. Whether you're into deep technical dives or light reads,
//           there's something for everyone.
//         </p>
//       </section>

//   );