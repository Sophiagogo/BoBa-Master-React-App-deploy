require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const cors = require('cors')
const cookieParser = require('cookie-parser')
const fileUpload = require('express-fileupload')
const path = require('path');
const userrouter = require("./routes/userRouter");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
  useTempFiles: true
}))

// ** MIDDLEWARE ** // add for heroku
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://boba-master.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

// Add for deploy purposes
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// Routes
app.use('/user', require('./routes/userRouter'));
// app.use('/api', require('./routes/upload'))

app.use("/api/products", productRoutes);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
