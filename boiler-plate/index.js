const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const { User } = require("./models/User");

// url과 json 형태로 데이터가 들어오는것에 대해 parse 하기 위한 body-parser
// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// application/json
app.use(bodyParser.json());

// mongodb 접속 정보 가져오기
const config = require("./config/key");

// Mongo DB 홈페이지에서 제공하는 접속 방법/코드, 접속은 잘 되는데 그 이후 작업이 진행이 안되어 다른방법 사용
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://Canadanam:abc1234@boiler-plate.ew2iy.mongodb.net/boiler-plate?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     // client.close();
// });


// Mongo DB Connection
const mongoose = require('mongoose')
mongoose.connect(config.mongoURI).then(() => console.log('MongoDB Connected..'))
    .catch(err => console.log(err))




// 기본형태의 Register Route
app.get('/', (req, res) => {
    res.send('Hello World! Today is Wednesday!')
})

app.post('/register', (req, res) => {
    // 회원 가입 할 때 필요한 정보들을 clinet에서 가져오면 
    // 그것들을 데이터 베이스에 넣어주기
    const user = new User(req.body)
    user.save((err, userInfo) => {
            if (err) return res.json({ success: false, err, user })
            return res.status(200).json({
                success: true
            })
        }) // mongo db에서 오는 method. // Request에 대해 에러가 나면 json 형태로 에러메세지 저장, 성공하면 success
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})