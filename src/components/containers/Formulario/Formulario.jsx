import React, { useState } from 'react';
import { collection, getFirestore, addDoc } from "firebase/firestore";
function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("No pueden existir campos vacios");
    } 
     else {
      addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
    }
    
    console.log(`Name: ${name}, Email: ${email}, Descripcion: ${descripcion}`);
    setName("");
    setEmail("");
    setDescripcion("");
    setDireccion("");  
}


  const db = getFirestore();
  const ordersCollection = collection(db, "orden");

  const order = {
    name,
    email,
    direccion,
    descripcion,
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="name">Direccion:</label>
       <input
        type="text"
        id="direccion"
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />
      <br />
      <br />
      <label htmlFor="descripcion">Descripcion <br /> del lugar:</label>
      <textarea
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />
      <br />
      <br />
      <button type="submit">Enviar </button>
    </form>
  );
}

export default Formulario;