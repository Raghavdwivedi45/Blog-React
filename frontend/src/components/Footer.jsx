import "../css/Footer.css"

const Footer = () => {
  return (
    <div className="footer">

      <div className="footerLink">
          <div className="foot-link-text"><span>Home</span></div>
          <div className="foot-link-text"><span>Privacy Policy</span></div>
          <div className="foot-link-text"><span>Contact Us</span></div>
          <div className="foot-link-text"><span>Report an Issue</span></div>
      </div>
      <div className="footerIcon">
          <div className="foot-link-icon"><a href="https://youtube.com/@raghavdwivedi-i4i?si=C9WHUp5CwkHMVsvs"><i className="fa-brands fa-facebook"></i></a></div>
          <div className="foot-link-icon"><a href="https://youtube.com/@raghavdwivedi-i4i?si=C9WHUp5CwkHMVsvs"><i className="fa-brands fa-instagram"></i></a></div>
          <div className="foot-link-icon"><a href="https://youtube.com/@raghavdwivedi-i4i?si=C9WHUp5CwkHMVsvs"><i className="fa-brands fa-youtube"></i></a></div>
          <div className="foot-link-icon"><a href="https://youtube.com/@raghavdwivedi-i4i?si=C9WHUp5CwkHMVsvs"><i className="fa-brands fa-square-x-twitter"></i></a></div>
          <div className="foot-link-icon"><a href="https://youtube.com/@raghavdwivedi-i4i?si=C9WHUp5CwkHMVsvs"><i className="fa-solid fa-envelope"></i></a></div>
      </div>

    </div>

  )
}

export default Footer