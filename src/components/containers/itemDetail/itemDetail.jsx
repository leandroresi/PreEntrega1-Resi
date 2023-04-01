import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const itemDetail = ({billeteras}) => {

     const { id } = useParams();

  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    const db = getFirestore();

    const billeterRef = doc(db, "billetera", `${id}`);

    getDoc(billeterRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducts(snapshot.data());
      } else {
        console.log("No existe el documento!");
      }
    });
  }, []);

  const billeteraFilter = billeteras.filter((billetera) => billetera.id == id);

  return (
    <>
      {billeteraFilter.map((billetera) => (
        
        <div>
          <img src="{billetera.imagen} " alt="{billetera.nombre} " />
          <div>
            <h2> {billetera.nombre} </h2>
            <p>{billetera.descripcion} </p>
            <p>{billetera.precio} </p>
            <button> Agregar al carrito</button>
          </div>
        </div>
 ))}
    </>
  );
};

     


export default itemDetail