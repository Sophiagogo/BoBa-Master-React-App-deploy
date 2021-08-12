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

app.use(express.json());
app.use(cors())
app.use(cookieParser())
app.use(fileUpload({
    useTempFiles: true
}))





app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

// Routes
app.use('/user', require('./routes/userRouter'));
// app.use('/api', require('./routes/upload'))

app.use("/api/products", productRoutes);


if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
  app.get('*', (req, res)=>{
      res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
