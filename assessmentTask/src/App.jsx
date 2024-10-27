
import './App.css'

 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout';
import Service from './Service/Service';
import Blogs from './pages/Blogs';
import GeoAi from './pages/GeoAi';
import General from './pages/General';
import International from './pages/International';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Service />} />
          <Route path="/pages/blogs" element={<Blogs />} />
          <Route path="/geoai" element={<GeoAi />} />
          <Route path="/general" element={<General />} />
          <Route path="/international" element={<International />} />
        </Route>
      </Routes>
    </Router>
  );
};



export default App
