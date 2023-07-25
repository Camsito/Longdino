const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5000;

// Configuración de la conexión a la base de datos MySQL
const connection = mysql.createConnection({
  host: 'localhost', // Cambiar a la dirección de tu servidor MySQL si no está en local
  user: 'root',
  password: '',
  database: 'longdino',
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conexión exitosa a MySQL');
});

app.use(bodyParser.json());
app.use(cors());

// Ruta para guardar el formulario de contacto en la base de datos
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'Por favor, completa todos los campos.' });
  }

  // Validar el correo electrónico usando una expresión regular en el servidor
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Por favor, ingresa un correo válido.' });
  }

  // Insertar los datos en la base de datos
  const sql = 'INSERT INTO formulario (name, email, subject, message) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, email, subject, message], (err, result) => {
    if (err) {
      console.error('Error al guardar el formulario en MySQL:', err);
      res.status(500).json({ error: 'Ocurrió un error al guardar el formulario.' });
    } else {
      console.log('Formulario guardado en MySQL');
      res.status(201).json({ message: 'Formulario enviado correctamente.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
