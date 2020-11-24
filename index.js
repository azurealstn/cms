const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connnection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});
connnection.connect();

//mysql 로 데이터를 가져온다
app.get('/api/customers', (req, res) => {
  connnection.query('select * from customer', (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
