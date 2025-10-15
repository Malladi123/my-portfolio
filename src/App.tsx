import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Experience from './pages/Experience';

function App() {
  // Use the Vite base path as router basename so routes resolve correctly
  // when the app is deployed under a subpath (e.g. /my-portfolio/).
  const basename = import.meta.env.BASE_URL || '/';

  return (
    <Router basename={basename}>
      <div className="app-root">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
