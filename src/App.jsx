import './index.css'
import ItemDetailContainer from './components/containers/Itemdetailcontainer/ItemDetailContainer';
import ItemListContainer from './components/containers/Itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MasInformacion from './components/containers/Mas-informacion/MasInformacion';
import Home from './components/containers/Home/Home'; 
import CartContext, { CartContextProvider } from './components/CartContext/CartContext';

import Cart from './components/containers/cart/Cart';



function App() {

  return (
    
      <div>
        <cartContextProvider>

        <BrowserRouter>
      <NavBar/>

        <Routes>

         <Route exact path='/' element={<Home/>} />;   

         <Route exact path='/home' element={<Home/>} />;  
    
         <Route exact path='/billetera'element={<ItemListContainer /> } />;

         <Route exact path='/masinformacion' element={<MasInformacion/>} />
         
         <Route exact path='/detallebilleteras/:idBilletera' element={<ItemDetailContainer/> } />;

         <Route exact path='/cart' element={<Cart/>} />



        </Routes>

          
      
        </BrowserRouter>
       
      </cartContextProvider>
      
      </div>
    
  ); 
}



export default App;