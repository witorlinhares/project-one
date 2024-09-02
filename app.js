const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser"); // Install using `npm install body-parser`

const app = express();
const port = 5000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false })); // Para lidar com dados de formulários


let data = []
try {
    const rawdata = fs.readFileSync('data.json');
    data = JSON.parse(rawdata);
} catch (err) {
    console.error(err);
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

app.get("/users", /*isAuthorized,*/ (req, res) => {
    console.log(data)
    res.json(data);
});

app.get("/users/:id", /*isAuthorized,*/ (req, res) => {
    const id = req.params.id;
    const user = data.find(user => user.id === parseInt(id));
    if (!user) {
        res.status(404).send({ message: "User not found" });
    } else {
        res.json(user);
    }
})

app.get("/products", (req, res) => {
  res.json([
    {
      id: 1,
      name: "The Bluest Eye",
    },
  ]);
});

// Implement POST request handler for /form route
app.post("/form", (req, res) => {
    console.log(req.body)
    // Access form data from req.body
    const { name, email, phone, message } = req.body; // Example properties
  
    // Validate data if necessary
    //if (!name || !email || !phone || !message) {
    //    return res.status(400).json({ error: 'Nome, email e mensagem são obrigatórios' });
    //}
  
    // Adiciona os dados ao array
    data.push({
        id: Math.floor(Math.random() * 100) + Date.now(),
        name,
        email,
        phone,
        message,
        timestamp: new Date().toISOString() // Adiciona um timestamp para rastrear a data de envio
    });

    // Escreve os dados atualizados no arquivo JSON
    try {
        fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
        //TODO: Alterar a resposta para encaminhar para a página sucess
        res.redirect('http://127.0.0.1:3000/sucess.html');
        //res.status(201).json({ message: 'Dados salvos com sucesso!' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Erro ao salvar os dados' });
    }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

//function isAuthorized(req, res, next) {
//    const authHeader = req.headers.authorization;
// 
//    if (!authHeader || authHeader !== 'secretpassword') {
//      return res.status(401).send('Unauthorized: Access Denied');
//    }
// 
//    next();
//  }