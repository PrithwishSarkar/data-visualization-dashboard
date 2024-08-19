const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRoutes = require('./routes/dataAPI');
require('dotenv').config();

const app = express();


app.use(cors());
app.use(express.json());

const dbURI = "mongodb+srv://nodeuser:Abcd123@nodelearn.qpw8i2d.mongodb.net/data-visualisation?retryWrites=true&w=majority";
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then((res) => console.log("Database Connection Successful"))
  .catch((err) => console.log(err));;

app.use('/api', apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
