const express = require('express');
const db_connection = require('./db_connection');
const app = express();
const port = 5000;
const cors = require('cors');

// Middleware para parsear JSON
app.use(express.json());

app.use(cors({origin:'*'}))

// APIs de ejemplo
app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'Juan Pérez' },
    { id: 2, name: 'María García' },
    { id: 3, name: 'Carlos Sánchez' }
  ];
  res.json(users);
});

// API de ejemplo: Obtener un usuario por ID
app.get('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const user = { id: userId, name: `Usuario ${userId}` };
  res.json(user);
});

app.get('/' , (req,res)=>{
    res.json('hola mundo');
})

app.get('/api/get/users' , (req,res)=>{
    db_connection.obtenerUsuarios((err, usuarios) => {
        if (err) {
            console.error(err);
        } else {
            res.json(usuarios);
        }
    });
})

//Apis menu

app.get('/api/get/entradas' , (req,res)=>{
    db_connection.obtenerEntradas((err, entradas) => {
        if (err) {
            console.error(err);
        } else {
            res.json(entradas);
        }
    });
})
app.get('/api/get/platos_fuertes' , (req,res)=>{
    db_connection.obtenerPlatosFuertes((err,result) => {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
})
app.get('/api/get/bebidas' , (req,res)=>{
    db_connection.obtenerBebidas((err,result ) => {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
})
app.get('/api/get/cocteles' , (req,res)=>{
    db_connection.obtenerCocteles((err, result) => {
        if (err) {
            console.error(err);
        } else {
            res.json(result);
        }
    });
})
//

// APIs de crud
app.post('/api/users', (req, res) => {
  const newUser = req.body;
  newUser.id = Date.now(); // Asignar un ID único
  res.status(201).json(newUser);
});

// API de ejemplo: Actualizar un usuario existente
app.put('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;
  updatedUser.id = userId;
  res.json(updatedUser);
});

// API de ejemplo: Eliminar un usuario
app.delete('/api/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  res.status(204).send(); // 204 No Content
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
