const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors'); // Agrega esta línea

const app = express();
const port = 3001;

// Configuración de conexión con la base de datos MySQL
const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'longdino',
};

const connection = mysql.createConnection(dbConfig);

// Conectar a la base de datos
connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión exitosa a la base de datos.');
});

// Middleware para analizar las solicitudes con el cuerpo JSON
app.use(bodyParser.json());

// Middleware de CORS
app.use(cors()); // Agrega esta línea para habilitar CORS

// Ruta para recibir los datos del formulario y realizar la inserción en la base de datos
app.post('/api/formulario', (req, res) => {
  const { nombre, apellido, tel, mail, asunto, mensaje } = req.body;

  const sql = 'INSERT INTO formulario (nombre, apellido, telefono, mail, asunto, mensaje) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nombre, apellido, tel, mail, asunto, mensaje];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error al insertar datos en la base de datos:', err);
      res.status(500).send('Error al insertar datos en la base de datos.');
    } else {
      console.log('Datos insertados correctamente.');
      res.status(200).send('Datos insertados correctamente.');
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor API en http://localhost:${port}`);
});
