import express from "express";
import user from './user/user';

const service = express();

service.use(express.json());
service.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next()
})

service.use('/v1/user', user);

const server = service.listen(4000, () => {
  console.log(`🚀 Server ready at: http://localhost:4000`)
});