import './App.css'
import ItemDetailContainer from './components/containers/itemdetailcontainer/itemDetailContainer';
import ItemListContainer from './components/containers/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';


function App() {

  return (
    
      <div>
        <NavBar/>
        <BrowserRouter>

        <Routes>
    
         <Route path='/'element={<ItemListContainer greeting={"Productos"} /> } />;
      

         <Route path='/dettalebilleteras/:idBilletera' element={<ItemDetailContainer/> } />;



        </Routes>

    
        </BrowserRouter>
       

      
      </div>
    
  ); 
}

export default App;