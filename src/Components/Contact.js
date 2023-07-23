import React, { useState } from "react";
import axios from "axios";
import "../styleForm.css";

const ContactForm = () => {
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
      axios
        .post("http://localhost:5000/api/contact", formData)
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
    <div className="contenido">
      <div>
        <h1>Formulario de Contacto</h1>
      </div>
      <form className="formulario" name="formulario" onSubmit={handleSubmit}>
        {/* Resto del código del formulario */}
        <div class="contacto">
          <label for="nombre">Nombre: </label>
          <input type="text" placeholder="Jhon" required />
          <label for="apellido">Apellido: </label>
          <input type="text" placeholder="Wick" required />

          <label for="tel">Telefono: </label>
          <input type="tel" required />
          <label for="mail">Mail: </label>
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
        <div class="work">
          <h2>Asunto</h2>
          <textarea
            type="text"
            maxlength="300"
            value={subject}
            onChange={handleSubjectChange}
          ></textarea>
        </div>
        <div class="descripcion">
          <h2>Mensaje: </h2>
          <textarea
            type="text"
            maxlength="300"
            value={message}
            onChange={handleMessageChange}
            placeholder="Cuentanos de que se trata..."
          ></textarea>
        </div>
        <div class="botones">
          <button type="submit" form="formulario" value="Submit">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
