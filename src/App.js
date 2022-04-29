import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/CartContext/CartContext";
// import FBGetProduct from "./components/pruebas/FBGetProduct";
// import FBGetproductList from "./components/pruebas/FBGetproductList";


function App() {

  
  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />
            {/* <Route exact path="/test" element={<FBGetProduct />} />
            <Route exact path="/test2" element={<FBGetproductList />} /> */}
            <Route exact path="/category/:categoryid" element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;
