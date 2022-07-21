const path = require("path");
const fs = require("fs");
const http = require("http");
const { response } = require("express");
const axios = require("axios").default;
const express = require("express");
const cors = require("cors");


var app = express();
app.use(express.json());
// app.use(cors({origin:"http://localhost:4200"}))
app.use(cors());
app.post("/upload", function (request, response) {
    console.log("world");
    response.setHeader("Access-Control-Allow-Origin","*");
    response.setHeader("Access-Control-Allow-headers","Origin,X-Requested-With,Content-Type,Accept");
    request.body
  response.send("hello");
});
app.listen(8080, function () {
  console.log("starting application on port number %d", 8080);
});

async function f() {
  const response = await axios
    .post(
      "https://photoslibrary.googleapis.com/v1/uploads",
      fs.readFileSync("filee.png"),

      {
        headers: {
          "Content-type": "application/octet-stream",
          "X-Goog-Upload-Content-Type": "image/png",
          "X-Goog-Upload-Protocol": "raw",
          // 'Access-Control-Allow-Origin': 'http://localhost:4200',
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST",
          Authorization: `Bearer ya29.A0AVA9y1sDE9vUmCgm5olOQa6VAmdOLVVOfHcO7HQgYzKUcjV8QcawnLQO6elhKSW_Ngcgxvuqjwsz4g8Ztxnk-oGjItSIEIggMn4JuFdrvD5wKWozFAfDX5bd6gYHQWTc_khju8K7fMW3mcZs4bZwpjutIhG6fgYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4N21ESUJ1bGJfeUVvcU56TWpGYVlfUQ0165`,
        },
      }
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("sunny");
}
