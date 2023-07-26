const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const port = 3001;

const dbConfig = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'longdino',
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexión exitosa a la base de datos.');
});

app.use(bodyParser.json());
app.use(cors());

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

      sendEmail(mail, nombre, apellido, tel, asunto, mensaje)
        .then(() => {
          console.log('Email sent successfully');
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    }
  });
});

async function sendEmail(receiver, nombre, apellido, tel, asunto, mensaje) {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'longdino.oficial@gmail.com',
      pass: 'Colita12.',
    },
  });

  const mailOptions = {
    from: 'longdino.oficial@gmail.com',
    to: receiver,
    subject: 'Form Submission Confirmation',
    html: `
      <h1>Form Submission Details:</h1>
      <p>Nombre: ${nombre}</p>
      <p>Apellido: ${apellido}</p>
      <p>Teléfono: ${tel}</p>
      <p>Mail: ${receiver}</p>
      <p>Asunto: ${asunto}</p>
      <p>Mensaje: ${mensaje}</p>
    `,
  };

  return transporter.sendMail(mailOptions);
}

app.listen(port, '192.168.1.114', () => {
  console.log(`Servidor Node.js escuchando en http://192.168.1.114:${port}`);
});
