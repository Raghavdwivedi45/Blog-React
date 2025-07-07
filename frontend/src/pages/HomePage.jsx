import '../css/Home/HomePage.css';
import LogoCarousel from '../components/Home/LogoCarousel.jsx';
import HomeCards from '../components/Home/HomeCards.jsx';
import { useEffect, useRef, useState } from 'react';
import { getAllMajors } from '../lib/major/helpMajor.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


const HomePage = () => {
  const people = [
  { id: 1, name: "Jane Doe", text: "Exploring the future with ArticleVerse." },
  { id: 2, name: "John Smith", text: "A revolutionary idea that inspires minds." },
  { id: 3, name: "Alice Johnson", text: "Innovation and creativity in one place." },
  { id: 4, name: "Bob Williams", text: "Empowering readers through knowledge." },
  { id: 5, name: "Clara Davis", text: "An outstanding platform for thinkers." },
  { id: 6, name: "Daniel Brown", text: "Changing the content game forever." },
];
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


      const el1 = useRef(null);
      const el2 = useRef(null);

      useGSAP(() => {
        const tl = gsap.timeline();
        const letters = gsap.utils.toArray('.letter'); 
        tl
        .from(el1.current, { x : -300, opacity : 0, duration : 1 })
        .from(el2.current, { y : -200, scale : 1, duration : 1 })
        .from(letters, { opacity: 0, scale : 2, y: 25, stagger: 0.02, });
      });


  return (
    <div className="homepage">
      
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">ArticleVerse</span>
        </h1>
        <p className="hero-subtitle">
           {("Dive into a universe of insightful articles, major topics, minor thoughts, and brilliant authors.").split("").map((char, i) => (
            <span key={i} className="letter">
              {char === " " ? "\u00A0" : char}
            </span>
            ))}
        </p>
      </section>

      {/* Hero grid */}
      <section className="hero-grid">
        
        <div className="hero-grid-1">
          <div className="hero-grid-1-1" ref={el1}></div>
          <div className="hero-grid-1-2" ref={el2}></div>
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
        <h2 className="section-title" >Featured Majors</h2>
        <div className="cards-container">
          <HomeCards info={[...majors, {"_id" : ""}]} typeLink="majors"/>
        </div>
      </section>

      {/* Featured Minors Section */}
      <section className="section">
        <h2 className="section-title" >Featured Minors</h2>
        <div className="cards-container">
          <HomeCards info={[...minors, {"_id" : ""}]} typeLink="minors"/>
        </div>
      </section>




      {/* Featured Comments Section */}
      <section className="section">
        <h2 className="section-title">Prestigious Words</h2>
        <div className="cards-container">
          {people.map((item) => (
            <div key={item.id} className="card">
              <h3>{item.name}</h3>
              <p>{item.text}</p>      
            </div>
          ))}
        </div>
      </section>
    </div>
  )
};

export default HomePage;


