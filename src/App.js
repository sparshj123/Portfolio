import Layout from './components/Layout';
import './App.scss';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact'

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/about" element={<About />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route index element={<Home />} />
      </Route>
    </Routes>
    
    </>
  );
}

export default App;
