import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './Components/Navbar/Navbar';
import Responsive from './pages/profile/responsive';
//import Card from './pages/home/Shop';
const App = () => {
    return (
<>

<Router>
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact</Link>
      <Link to="/Shop">Shop</Link> */}
      <Navbar />
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Shop" element={<Shop />} /> */}
    </Routes>
  </Router>
  <Responsive />

</>
    )
}
export default App;