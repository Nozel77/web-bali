import {Routes, Route, Outlet} from 'react-router-dom'
import Home from "../Culinary/Home";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import RecipeDetail from '../Culinary/RecipesDetails';

function Layout(){
  return (
    <>
      <Navbar/>
        <Outlet/>
      <Footer/>
    </>
  )
}
function App() {
  return (
    <div className='bg-[#252525]'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='recipes/:id' element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;