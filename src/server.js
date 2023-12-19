const express = require('express');
const path = require('path');
const { mongo, default: mongoose } = require('mongoose');
const app = express();

// step1 - express
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// step4 - mongoose models
// step5 - view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// step2 - mongodb
mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://soltech:soltech99@cluster0.ztcfwny.mongodb.net/?retryWrites=true&w=majority`)
  .then(() => {
    console.log('mongodb connected');
  })
  .catch((err) => {
    console.log(err);
  })

// step3 - route static page
app.use('/static', express.static(path.join(__dirname, 'public')));

// step1 - express
const port = 4000;
app.listen(port, () => {
  console.log(`Listening on ${port}`);
})
