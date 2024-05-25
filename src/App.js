import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './component/navigate';
import Footer from './component/footer';
import Skills from './component/skills';
import Contact from './component/contact';
import Project from './component/project';
import HomeItem from './component/homeItem';
import DetailsProject from './component/detailsProject';
import Product from './component/product';

function App() {
  return (
    <div className='content'>
      <NavBar />

      <Routes>
        <Route>
          <Route path='/' element={<HomeItem />} />
          <Route path='/project' element={<Project />} />
          <Route path='/details-project/:projectId' element={<DetailsProject />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
