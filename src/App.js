import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Layouts/Nav';
import Home from './Pages/Home';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';

import Recipes from './Pages/Recipes';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="/" element={<Home />}/>
          <Route path="recipes" element={<Recipes />}/>
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>

      </Routes>
    </BrowserRouter>

  );
}

export default App;
