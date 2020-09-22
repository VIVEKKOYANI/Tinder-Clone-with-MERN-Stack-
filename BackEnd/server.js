import express from "express";
import mongoose from "mongoose";
import Cards from "./dbcards.js";
import bodyParser from 'body-parser';
import Cors from 'cors';
//App config
const app = express();
const port = process.env.PORT || 8001;

//Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(Cors());
//Db config
const connection_url ='mongodb://admin:zwVrMf0hfVurCfdr@cluster0-shard-00-00.9ort9.mongodb.net:27017,cluster0-shard-00-01.9ort9.mongodb.net:27017,cluster0-shard-00-02.9ort9.mongodb.net:27017/tinderDB?ssl=true&replicaSet=atlas-bwf8t2-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
//Api Endpoints
app.get("/", (req, res) => res.status(200).json({message: "Hello"}));

app.post("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(data);
    }
  });
});

app.get("/tinder/cards", (req, res) => {
  const dbCard = req.body;

  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(data);
    }
  });
});

//Listener
app.listen(port, () => console.log(`listening on localhost: ${port}`));
