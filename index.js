const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      image: 'https://placeimg.com/64/64/any',
      name: '채민수',
      birthday: '950502',
      gender: '남자',
      job: '대학생',
    },
    {
      id: 2,
      image: 'https://placeimg.com/64/64/any',
      name: '채민수22',
      birthday: '950502222',
      gender: '남자22',
      job: '대학생22',
    },
    {
      id: 3,
      image: 'https://placeimg.com/64/64/any',
      name: '채민수3',
      birthday: '95050233',
      gender: '남자33',
      job: '대학생33',
    },
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
