import { Link } from 'react-router-dom';
import '../styles/components/home.css'; // Optional: for styling

const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <h1>Hi, I'm Venkata Rakesh Malladi</h1>
        <p>
          A passionate Frontend Engineer with over a decade of experience crafting scalable, responsive web applications.
          I specialize in Angular, React, and internationalization—blending clean architecture with user-centric design.
        </p>
        <p>
          Whether it's building modular UI libraries, optimizing performance, or collaborating across global teams,
          I bring both technical depth and creative flair to every project.
        </p>
        <div className="cta-buttons">
          <Link to="/about" className="btn btn--primary">Learn More</Link>
          <Link to="/experience" className="btn btn--primary">View Experience</Link>
          <Link to="/contact" className="btn btn--primary"> Blogs </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
