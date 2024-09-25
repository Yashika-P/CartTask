import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart/Cart";
import Appfooter from "./Components/Common/Appfooter";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contacts from "./Components/Contacts/Contacts";
import Products from "./Components/Products/Products";
import ProductItem from "./Components/Products/ProductItem";
import AppHeader from "./Components/Common/AppHeader";


const App = () => {
  return (
    <div className="h-screen container mx-auto">
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductItem />} />
        
        <Route
          path="/cart"
          element={<Cart />}
        //errorElement={<div>Error Occured</div>} 
        />
        <Route
          path="*"
          element={<div className="h-full bg-red-300 flex justify-center items-center">
            <h1 className="text-3xl px-4 py-3 border-2 rounded">
              Something Went Wrong
            </h1>
        </div>} />
        
      </Routes>
      <Appfooter />
    </div>
  );
};

export default App;