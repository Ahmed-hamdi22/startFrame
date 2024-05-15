import './App.css';
import Home from './components/Home/Home';
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';

const router=createBrowserRouter([{
  path:'',element:<Layout/>,children:[
    {path:'',element:<Home/>},
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'portfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}
  ]
}])
function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
