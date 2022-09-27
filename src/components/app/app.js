import React from "react";
import './app.css';
import {Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header/shop-header";


const App = () => {

    return (
        <main role='main' className='container'>
            <ShopHeader numItems={5} total={210}/>
            <Routes>
                <Route
                    path='/'
                    element={<HomePage/>}
                    exact/>
                <Route
                    path='/cart'
                    element={<CartPage/>}
                />
            </Routes>
        </main>

    )
};

export default App;