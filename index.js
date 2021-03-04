const express = require("express"); // express 모듈 가져오기
const app = express(); // express()를 이용하여 새로운 express app 생성.
const port = 5000; // 백엔드 서버의 포트 번호. 비어있는 번호 중 아무거나 원하는 번호로 설정하면 됨.

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://raykim:raykim@boilerplate-shard-00-00.zrthn.mongodb.net:27017,boilerplate-shard-00-01.zrthn.mongodb.net:27017,boilerplate-shard-00-02.zrthn.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-9ixsys-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  // root 경로의 페이지('/')에서 "Hello World!"를 출력.
  res.send("Hello World!");
});

app.listen(port, () => {
  // 해당 앱이 설정한 포트를 listen하면, console message 출력.
  console.log(`Example app listening at http://localhost:${port}`);
});
