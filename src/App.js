import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  
  return (
    <>
        <NavBar />
        <ItemDetailContainer />
        {/* <ItemListContainer /> */}

      {/* <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
