const express = require('express');
const app = express()
const PORT = process.env.PORT || 3003;
app.use(express.json());
var cors = require('cors')

app.use(
  cors({
      credentials: true,
      origin: ["http://localhost:3003", "http://localhost:3000"]
  })
);

//App Routes
const photographerRoutes = require('./app/routes/photographer-routes.js');

app.get("/", (req, res) => {
  res.send("hi!");
  res.end()
})

app.use(photographerRoutes);

module.exports = app;