import '../css/Home/HomePage.css';
import LogoCarousel from '../components/Home/LogoCarousel.jsx';
import HomeCards from '../components/Home/HomeCards.jsx';
import { useEffect, useState } from 'react';
import { getAllMajors } from '../lib/major/helpMajor.js';


const HomePage = () => {
    const [majors, setMajors] = useState([]);
    const [minors, setMinors] = useState([]);
  
    useEffect(() => {
      const getMajors = async () => {
        const result = await getAllMajors("majors");
        const result2 = await getAllMajors("minors");
        if (result.error || result2.error) return;
        setMajors(result.slice(0, Math.min(2, result.length)));
        setMinors(result2.slice(0, Math.min(2, result2.length)));
      }
      getMajors();
      return () => { };
    }, [])


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
      </section>

      {/* Hero grid */}
      <section className="hero-grid">
        
        <div className="hero-grid-1">
          <div className="hero-grid-1-1"></div>
          <div className="hero-grid-1-2"></div>
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
          <HomeCards info={majors} typeLink="majors"/>
        </div>
      </section>

      {/* Featured Minors Section */}
      <section className="section">
        <h2 className="section-title">Featured Minors</h2>
        <div className="cards-container">
          <HomeCards info={minors} typeLink="minors"/>
        </div>
      </section>




      {/* Featured Comments Section */}
      <section className="section">
        <h2 className="section-title">Prestigious Words</h2>
        <div className="cards-container">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="card">
              <h3>Jane Doe {item}</h3>
              <p>This is a mind-blowing initiative by ArticleVerse.</p>      
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

export default HomePage;


