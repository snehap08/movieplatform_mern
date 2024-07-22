require('dotenv').config();
const express = require ('express');
const app = express();
const cors = require("cors");
const connection = require ("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const favoriteRoutes = require('./routes/favorites');

//database connection
connection();

//middlewares
app.use(express.json())
app.use(cors());

//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/movies/favorites', favoriteRoutes);

app.use(require('./routes/favorites'))
//port 
const port = process.env.PORT|| 5000;
app.listen(port,()=> console.log(`Listening on port ${port}...`))