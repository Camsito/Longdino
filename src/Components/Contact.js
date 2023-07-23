import React, { useState } from "react";
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
    // Expresión regular para validar el formato del correo
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validar el correo antes de enviar el formulario
    const isFormValid = validateEmail(email);

    if (isFormValid) {
      // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor, por ejemplo.
      console.log("Datos del formulario válidos:", {
        name,
        email,
        subject,
        message,
      });

      // Limpiar el formulario después de enviar los datos
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } else {
      console.log("Por favor, ingresa un correo válido.");
    }
  };

  return (
    <div class="contenido">
      <div>
        <h1>Formulario de Contacto</h1>
      </div>
      <form
        class="formulario"
        name="formulario"
        value={name}
        onChange={handleNameChange}
        onSubmit={handleSubmit}
      >
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
