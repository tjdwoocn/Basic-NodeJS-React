const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1,
        maxlength: 500
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})


// User model의 유저 정보를 저장하기 전에 무엇인가 하게 함
userSchema.pre('save', function(next) {
    var user = this;

    // 다른 정보가 아닌 '비밀번호만' 바꿀때 암호화 작업이 이루어 지도록 조건문 추가
    if (user.isModified('password')) {
        // 비밀번호를 암호화 시킨다
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if (err) return next(err)

            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) return next(err)
                user.password = hash
                next()
            })
        })
    }
})


const User = mongoose.model('User', userSchema)

module.exports = { User }