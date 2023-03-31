import './index.css'
import ItemDetailContainer from './components/containers/itemdetailcontainer/itemDetailContainer';
import ItemListContainer from './components/containers/itemlistcontainer/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

// Import firebase
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjdRv--D7ljTd8xWroDVrIu8AgwFRmFuI",
  authDomain: "walden-5e5bb.firebaseapp.com",
  projectId: "walden-5e5bb",
  storageBucket: "walden-5e5bb.appspot.com",
  messagingSenderId: "171752940154",
  appId: "1:171752940154:web:93f574160d06bfd497d1c3"
};

// Import firebase
const app = initializeApp(firebaseConfig);



function App() {

  return (
    
      <div>


        <BrowserRouter>
      <NavBar/>

        <Routes>
            
    
         <Route exact path='/'element={<ItemListContainer /> } />;
      

         <Route exact path='/dettalebilleteras/:idBilletera' element={<ItemDetailContainer/> } />;



        </Routes>

    
        </BrowserRouter>
       

      
      </div>
    
  ); 
}



export default App;