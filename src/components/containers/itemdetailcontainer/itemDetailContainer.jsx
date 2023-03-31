import { useParams } from "react-router-dom";
import React from "react";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {doc, getDoc, collection} from "firebase/firestore";


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
const db= getFirestore(app)


async function getProduct(idItem){

  const coleccionProducts = collection(db,"productos");
  const docRec = doc(coleccionProducts,idItem);

  const snapshotDocs = await getDoc(docRec)
  return {... snapshotDocs.data(), id:snapshotDocs.id}
}




function ItemDetailContainer () {

    const params = useParams();
  const idBilletera = params.idBilletera;



 /* const [billetera,setBilletera] = useState([]);



  useEffect(() => {
    fetch(billeteras)
    .then ((res) => {
       res.json();
    })
    .then((json) => {
      setBilletera(json);
    })
  }, []);
  console.log(billeteras)

  return (
    <>
      <div>
        {billetera.map((billetera) =>(
          <div key={billetera.id} className="card" style={{width: "18rem"}}>
            <img src={billetera.imagen} classname="card-img-top" alt="..."/>
            <div className="card-body">
              <h3 className="card-title">{billetera.nombre}</h3>
              <p className="card-text">{billetera.descripcion} </p>
              <p className="card-text">{billetera.precio} </p>
              <button href="#" classname="btn btn-primary">Agregar Al Carrito</button>
            </div>
          </div>
        ))}
      </div>
    </>
  ); */
}


export default  ItemDetailContainer