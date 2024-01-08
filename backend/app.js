const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors')
const port = 5000;
app.use(bodyParser.json());
const { PORT, CLIENT_ORIGIN, DB_URL } = require('./config')
app.use(cors());
app.use("/api", require('./routes/index'));
app.use(express.json())
const options = {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
}
mongoose.connect(DB_URL, () => {
  app.listen(() => console.log('👍'))
})
  .catch(err => console.log(err))
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});