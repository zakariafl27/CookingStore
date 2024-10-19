import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Element/Nav';
import Home from './HomePage/Home';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import AboutUs from './Components/AboutUs';
import Recipes from './RecipesPage/Recipes';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}/>
          <Route path="recipes" element={<Recipes />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<AboutUs />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
