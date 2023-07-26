import React, { useState } from 'react';
import axios from 'axios';
import '../styleForm.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      nombre,
      apellido,
      tel,
      mail,
      asunto,
      mensaje,
    };

    axios.post('http://localhost:3001/api/formulario', formData)
      .then((response) => {
        console.log(response.data);
        // Aquí podrías mostrar un mensaje de éxito al usuario o redirigirlo a otra página
      })
      .catch((error) => {
        console.error('Error al enviar datos:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      });
  };
  

  

  return (
    
    <div className="contact-container">
      <div className="contenido">
        <div>
          <h1>Formulario de Contacto</h1>
        </div>
        <form className="formulario" onSubmit={handleSubmit}>
          <div className="contacto">
            <label htmlFor="nombre">Nombre: </label>
            <input
              type="text"
              placeholder="Jhon"
              required
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
            <label htmlFor="apellido">Apellido: </label>
            <input
              type="text"
              placeholder="Wick"
              required
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />

            <label htmlFor="tel">Telefono: </label>
            <input
              type="tel"
              required
              value={tel}
              onChange={(e) => setTel(e.target.value)}
            />
            <label htmlFor="mail">Mail: </label>
            <input
              type="email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div className="work">
            <h2>Asunto</h2>
            <textarea
              type="text"
              maxLength="300"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            ></textarea>
          </div>
          <div className="descripcion">
            <h2>Mensaje: </h2>
            <textarea
              type="text"
              maxLength="300"
              placeholder="Cuentanos de que se trata..."
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>
          <div className="botones">
            <button type="submit">Enviar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Formulario;
