import { useEffect, useState } from "react";
import React from "react";
import { collection, getDocs } from "firebase/firestore";


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



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


async function getProductFromFirebase() {

  const coleccionProducts = collection(db,"productos");
  let snapshotProductos = await getDocs(coleccionProducts);
  const docs = snapshotProductos.docs;
  
  const productosData = docs.map((documentos) =>{
    const producto = documentos.data();
    producto.id = documentos.id;
    return producto;
  });
  return productosData;


}




function ItemListContainer () {
/*  const [billetera,setBilletera] = useState([]);

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
              <p className="card-text">{billetera.precio} </p>
            </div>
          </div>
        ))}
      </div>
    </>
  ); */
}

export default  ItemListContainer