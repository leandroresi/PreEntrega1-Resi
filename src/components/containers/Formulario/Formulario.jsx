import React, { useState } from 'react';

function Formulario() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, Email: ${email}, Descripcion: ${descripcion}`);
    setName("");
    setEmail("");
    setDescripcion("");
    setDireccion("");  
}

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