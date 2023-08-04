const express = require('express')


const jockRouter = require("./router/jock");

const cors = require("cors");
require("dotenv").config();



const app = express();

app.use(cors());


app.use(express.json());



app.get("/", (req, res) => {
  res.send('welcome')
})

app.use("/main", jockRouter)



app.listen(3434, async () => {
  try {
    console.log(`Server is running on port 3434`);
  } catch (error) {
    console.log(error);
  }
});