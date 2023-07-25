import React, { useState } from "react";
import axios from "axios";
import "../styleForm.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmail(value);
    setIsEmailValid(validateEmail(value));
  };

  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isFormValid = validateEmail(email);

    if (isFormValid) {
      const formData = {
        name,
        email,
        subject,
        message,
      };

      // Enviar la solicitud POST al servidor para guardar los datos en MySQL
      axios.post("/api/contact", formData)
        .then((response) => {
          console.log(response.data);
          alert("Formulario enviado correctamente");
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        })
        .catch((error) => {
          console.error("Error al enviar el formulario:", error);
          alert("Ocurrió un error al enviar el formulario.");
        });
    } else {
      console.log("Por favor, ingresa un correo válido.");
    }
  };

  return (
    <div className="contact-container">
    <div className="contenido" >
      <div>
        <h1>Formulario de Contacto</h1>
      </div>
      <form className="formulario" name="formulario" onSubmit={handleSubmit}>
        <div className="contacto">
          <label htmlFor="nombre">Nombre: </label>
          <input
            type="text"
            placeholder="Jhon"
            required
            value={name}
            onChange={handleNameChange}
          />
          <label htmlFor="apellido">Apellido: </label>
          <input type="text" placeholder="Wick" required />

          <label htmlFor="tel">Telefono: </label>
          <input type="tel" required />
          <label htmlFor="mail">Mail: </label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
          {!isEmailValid && (
            <p style={{ color: "red" }}>Por favor, ingresa un correo válido.</p>
          )}
        </div>
        <div className="work">
          <h2>Asunto</h2>
          <textarea
            type="text"
            maxLength="300"
            value={subject}
            onChange={handleSubjectChange}
          ></textarea>
        </div>
        <div className="descripcion">
          <h2>Mensaje: </h2>
          <textarea
            type="text"
            maxLength="300"
            value={message}
            onChange={handleMessageChange}
            placeholder="Cuentanos de que se trata..."
          ></textarea>
        </div>
        <div className="botones">
          <button type="submit" form="formulario" value="Submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Contact;
