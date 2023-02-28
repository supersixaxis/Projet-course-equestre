const express = require("express");

const app = express();

// permet de ne plus avoir d"erreur cors 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  next();
});

app.use((req, res, next) => {
  console.log("requête reçu");
  next();
})



app.use((req, res) => {
  res.json({ message: "votre requête a bien été reçu"})
})


app.use(express.json()); // permet de lire toutes les réponses en json avec express

module.exports = app;