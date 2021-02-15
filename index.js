import express from 'express'

const app = express();
app.use(express.json());

const lostObjects = [];

app.get('/', (req, res) => {
  const lostObj = {
    memory: "leaked"
  };

  [...Array(300)].map(i => lostObjects.push(lostObj));

  res.status(200).send({size: lostObjects.length})
});

const port = 4000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
});
