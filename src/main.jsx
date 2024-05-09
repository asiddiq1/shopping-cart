import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.jsx';
import ShoppingPage from './components/ShoppingPage/ShoppingPage.jsx';
import AllGamesSection from './components/ShoppingPage/sections/AllGamesSection.jsx';
import GamePage from './components/GamePage/GamePage.jsx';
import './index.css'
import Cart from './components/NavBar/ShoppingCart/Cart.jsx';
import Checkout from './components/NavBar/ShoppingCart/Checkout.jsx';
import Last30Days from './components/ShoppingPage/sections/Last30Days.jsx';
import ThisWeek from './components/ShoppingPage/sections/ThisWeek.jsx';
import NextWeek from './components/ShoppingPage/sections/NextWeek.jsx';
import BestofYear from './components/ShoppingPage/sections/BestofYear.jsx';
import PopularLastYear from './components/ShoppingPage/sections/PopularLastYear.jsx';
import AllTimeTop from './components/ShoppingPage/sections/AllTimeTop.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
  },
  {
    path: "shop",
    element: <ShoppingPage />,
    children: [
      {path: "games", element: <AllGamesSection/>},
      {path: "last-30-days", element: <Last30Days/>},
      {path: "this-week", element: <ThisWeek/>},
      {path: "next-week", element: <NextWeek/>},
      {path: "best-of-year", element: <BestofYear/>},
      {path: "popular-last-year", element: <PopularLastYear/>},
      {path: "all-time-top", element: <AllTimeTop/>},
      {path: "games/game/:gameId", element: <GamePage/>},
      {path: "cart", element: <Cart/>},
      {path: "checkout", element: <Checkout/>}
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


