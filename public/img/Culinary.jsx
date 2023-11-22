import { Routes, Route, Outlet } from 'react-router-dom';
import Home from '../../src/components/Home';
import Navbar from '../../src/components/Navbar';
import Footer from '../../src/components/Footer';
import RecipeDetail from '../../src/components/RecipesDetails';

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
function App() {
  return (
    <div className="bg-[#252525]">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipes/:id" element={<RecipeDetail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
