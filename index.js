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

const multer = require('multer');
const upload = multer({ dest: './upload' });

//mysql 로 데이터를 가져온다
app.get('/api/customers', (req, res) => {
  connnection.query(
    'select * from customer where isDeleted = 0',
    (err, rows, fields) => {
      res.send(rows);
    }
  );
});

// upload 폴더를 공유
app.use('/image', express.static('./upload'));

// 추가
app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'insert into customer values (null, ?, ?, ?, ?, ?, now(), 0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connnection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

// 삭제
app.delete('/api/customers/:id', (req, res) => {
  let sql = 'update customer set isDeleted = 1 where id = ?';
  let params = [req.params.id];
  connnection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
