import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from  './Pages/Home'
import Events from  './Pages/Events'
import Team from  './Pages/Team'
import Art from  './Pages/Arts'
import Literary from  './Pages/Literary';
import Alumni from './Pages/Alumni'
import Contact from './Pages/Contact'
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>
           <Navbar />
           <Home />
          
    </div>
  },
  {
    path: '/events',
    element: <div>
           <Navbar />
           <Events />
          
    </div>
  },
  {
    path: '/team',
    element: <div>
           <Navbar />
           <Team />
         
    </div>
  },
  {
    path: '/literary',
    element: <div>
           <Navbar />
           <Literary />
           
    </div>
  },
  {
    path: '/arts',
    element: <div>
           <Navbar />
           <Art />
           
    </div>
  },
  {
    path: '/alumni',
    element: <div>
           <Navbar />
           <Alumni />
          
    </div>
  },
  {
    path: '/contact',
    element: <div>
           <Navbar />
           <Contact />
           
    </div>
  }
  
])

function App() {


  return (
    <div className="app-container">
    <RouterProvider router={router} />
    </div>
  )
}

export default App
