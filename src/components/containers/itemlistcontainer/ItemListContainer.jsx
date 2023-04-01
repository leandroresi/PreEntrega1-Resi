import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
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



function ItemListContainer () {

const [billeteras, setBilleteras] = useState ([]);

  useEffect(() => {
    const db = getFirestore();
    const billeterasCollection = collection(db, "billeteras");
    getDocs(billeterasCollection).then((querySnapshot) => {
      const billeteras = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setBilleteras(billeteras);
    });
  }, []);

   return(
    <div>
      <itemList billeteras= {billeteras} />
    </div>
   )

}

export default  ItemListContainer