import React, { useState } from 'react';
import axios from 'axios';
// Componentes //
import {Footer} from '../Components/Footer';
import Line from './Copyri';
import Greeting from './WhatsappPNG';
//Estilos//
import '../styleForm.css';

function Formulario() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tel, setTel] = useState('');
  const [mail, setMail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [telError, setTelError] = useState('');
  const [mailError, setMailError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{9}$/;
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validatePhone(tel)) {
      setTelError('El teléfono debe ser un número de 9 dígitos.');
      return;
    }

    if (!validateEmail(mail)) {
      setMailError('El correo electrónico no es válido.');
      return;
    }

    setTelError('');
    setMailError('');

    const formData = {
      nombre,
      apellido,
      tel,
      mail,
      asunto,
      mensaje,
    };

    axios
      .post('http://192.168.1.114:3001/api/formulario', formData)
      .then((response) => {
        console.log(response.data);
        // Clear the form after successful submission
        setNombre('');
        setApellido('');
        setTel('');
        setMail('');
        setAsunto('');
        setMensaje('');
        setSubmissionStatus(true); // Form successfully submitted
      })
      .catch((error) => {
        console.error('Error al enviar datos:', error);
        setSubmissionStatus(false); // Form submission failed
      });
  };

  return (
    <div>
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
            {telError && <div className="error-message">{telError}</div>}

            <label htmlFor="mail">Mail: </label>
            <input
              type="email"
              required
              value={mail}
              onChange={(e) => setMail(e.target.value)}
            />
            {mailError && <div className="error-message">{mailError}</div>}
          </div>
          <div className="work">
            <h2>Asunto</h2>
            <input
              type="text"
              maxLength="300"
              required
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            ></input>
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
        {submissionStatus === true && (
          <div className="success-message">Formulario enviado exitosamente.</div>
        )}
        {submissionStatus === false && (
          <div className="error-message">Error al enviar el formulario.</div>
        )}
      </div>
    </div>
    <Footer/>
    <Line/>
    <Greeting/>
    </div>
  );
}

export default Formulario;