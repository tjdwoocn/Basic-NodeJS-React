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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Canadanam:abc1234@boiler-plate.ew2iy.mongodb.net/boiler-plate?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    // client.close();
});

// 기본형태의 Register Route
app.get('/', (req, res) => {
    res.send('Hello World!')
})

// app.post('/register', (req, res) => {
//     // 회원 가입 할 때 필요한 정보들을 clinet에서 가져오면 
//     // 그것들을 데이터 베이스에 넣어주기
//     const user = new User(req.body)
//     user.save((err, userInfo) => {
//             if (err) return res.json({ success: false, err, user })
//             console.log(userInfo.body)
//             return res.status(200).json({
//                 success: true
//             })
//         }) // mongo db에서 오는 method. // Request에 대해 에러가 나면 json 형태로 에러메세지 저장, 성공하면 success
// })

// app.post('/register', (req, res) => {
//     //회원가입 할때 필요한 정보들을 client에서 가져오면 
//     //그것들을 데이터 베이스에 넣어준다.
//     const user = new User(req.body)
//     user.save((err, userInfo) => {
//         console.log(userInfo);
//         console.log(user);


//         if (err)
//             return res.json({ success: false, err, user });

//         console.log(userInfo.body);

//         return res.status(200).json({

//             success: true

//         })

//     })

// })



app.post('/register', (req, res) => {
    //회원가입 할때 필요한 정보들을 client에서 가져오면 
    //그것들을 데이터 베이스에 넣어준다.
    const user = new User(req.body)
    user.save((err, userInfo) => {

        if (err)
            return res.json({ success: false, err, user });


        return res.status(200).json({

            success: true

        })

    })

})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})