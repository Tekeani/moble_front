import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Accueil from './components/accueil/Accueil';
import Panier from "./components/Panier";
import Product from "./components/product/Product";

import Inscription from './components/connexion/inscription';

import Tableau from "./components/gestionDesProduits/Tableau";

import Connexion from "./components/connexion/Connexion";
import AboutUs from './components/presentation/AboutUs';

import './styles/Card.css'
import './styles/Footer.css'
import './styles/Banner.css'
import './styles/FurnitureFilter.css'
import './styles/DetailCommand.css'
import './styles/Background.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Accueil/>
  },
  {
    path: '/panier',
    element: <Panier/>
  },
  {
    path: "/product/:id",
    element: <Product/>
  },
  {
    path: '/connexion',
    element: <Connexion/>
  },
  {
    path: '/inscription',
    element: <Inscription/>
  },
  {
    path: '/admin',
    element: <Tableau/>
  },
  {
    path: '/aboutus',
    element: <AboutUs/>
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App