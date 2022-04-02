import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";


function App() {

  const propItemlistContainer = 'Este texto es una prop que se pasa al componente ItemListContainer'
  return (
    <>
      <NavBar />
      <ItemListContainer message={propItemlistContainer} />
    </>
  );
}

export default App;
