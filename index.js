const express = require('express');
const app = express();
const PORT = 8000;

const students = [
  {
    id: 1,
    name: 'Nguyen Van A',
    age: 12,
    class: '8B',
  },
  {
    id: 2,
    name: 'Nguyen Van B',
    age: 14,
    class: '9C',
  },
];

app.get('/', (request, response) => {
  const data = JSON.stringify(students);
  response.send(data);
});

app.listen(PORT, () => {
  console.log(`JSON server listening at http://localhost:${PORT}`);
});
