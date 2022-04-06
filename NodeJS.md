# Node js + React 강의 - 기본편

## 1강. Intro
https://ji-gwang.tistory.com/2

Boiler-plate - 보일러플레이트란?
컴퓨터 프로그래밍에서 보일러플레이트 또는 보일러플레이트 코드라고 부르는 것은 최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말한다.

## 2강. Node JS 와 Express JS 다운로드

Node JS: 
	- Node JS가 나옴으로 인해 항상 브라우저 속에서만 사용하던 js를 브라우저나 크롬, ie가 아닌 서버사이드에서도 사용할수 있게 됨

	- 자바 스크립트를 서버사이드에서 사용 가능하게 하는 언어

Express JS:
    - Node JS가 자동차의 엔진이라고 한다면 Express JS는 Node JS를 활용하여 자동차(웹사이트, 어플리케이션)를 쉽게 만들수 있게 해주는 것
    - 프레임워크

### Node JS 설치하기
- https://nodejs.org/en/

### npm package 만들기
- npm init
- Version: Enter
- description: 마음대로
- ~~~
- 기본값으로 진행하다 Author 부분만 내 이름 넣어줌

- 만들어진 npm패키지 확인을 위해선 vscode와 같은 에디터에서 package.json파일을 열어서 확인해보면 됨

### index.js 파일 생성
- 백엔드 서버를 시작하면 index.js에서 시작함
- "백엔드 시작점"
- *index.js 파일의 경우 앞에서 생성한 boiler-plate 폴더, package.json 파일과 동일한 경로에 위치해야함

### Express JS 다운
- 터미널에서 npm install express --save 명령어 실행
- 위 명령어로 express js를 다운받아주면 기존의 package.json 파일의 dependencies 부분에 설치된 express의 버전이 입력된다.(--save의 기능, express라는 라이브러리를 사용하고 있다고 표시해주는것)
- 다운받은 module 들이 node_modules 이라는 폴더에 저장된다. (이 모듈들에대해 크게 수정할일은 없다고 함)

### index.js에서 기본적인 express js 앱 만들기
- https://expressjs.com/en/starter/hello-world.html
- 위의 페이지에서 Hello world 예시코드를 index.js에 복사 및 사용

### node 실행하기
- npm run start: package.json 부분에 작성한 'start' 부분이 동작하도록 하는 명령어
- app 이 실행되며 "Example app listening on port 3000" 문구가 출력되며 실행됨
- 주소창에 localhost:3000 를 입력하면 해당 앱을 확인가능


## 3강. Mongo DB 연결
### Mongo DB 다운하기
- https://www.mongodb.com/ #Mongo DB 홈페이지에서 회원가입후 설치하기

### Cluster, Database 만들기
- 옛날 버전의 경우 Cluster를 먼저 만들었는데 최신버전에선 Cluster는 기본으로 생성되고 Database를 만드는게 제일 첫 단계가 되는듯 함 (Cluster와 Database가 같은 개념으로 사용되는듯? 왜냐면 database 만든다고 들어갔는데 끝에보면 create cluster라고 되어 있음 ㅋㅋ)
- Database를 만드는데 free tier를 선택후 aws를 선택, region은 서울 region이 추천되어 서울로 정함
- Cluster tier - M0 sandbox 선택(free forever!)
- Cluster Name - "boilerplate"로 정함

### User 생성하기
- Create Cluster 버튼을 클릭하면 User정보를 입력하는 페이지로 넘어감
- Username: Canadanam
- password: abc1234 (간단하게 설정함, 스페셜 캐릭터는 넣으면 안되나봄) 

### Connection Method 선택하기
- "Where would you like to connect from?"
- Cloud Environment 선택함
- "Only an IP address you add to your Access List will be able to connect to your project's clusters." 이란 문구가 나오며 허용하는 ip 주소 및 설명 입력해야 함
- "127.0.0.1" , localhost ip를 입력함
- 생성완료!

### App과 연결하기
- Databse Deployments 페이지에서 "Connect" 버튼 클릭
- "Connect your Application" 탭 선택
- "mongodb+srv://Canadanam:<password>@boilerplate.ew2iy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" 이런 복사가능한 주소가 보임
- 선택지로 "include full driver code example이 있는데 이것을 선택하면 드라이브에 바로 연결가능하게 하는 code 예시가 제공됨
- 예시 코드를 복사하여 index.js 파일에 복붙...하려 했으나! 강의영상에선 해당 예시 코드를 사용하지않고 mongoose라는 모듈을 활용함
- 그래서 Pass!


### Mongoose 설치 및 db 연결
- Mongoose: Mongo DB를 편하게 쓸수있게 해주는 Object Modeling Tool
- npm install mongoose --save
- mongoose에 대한 정보 또한 package.json의 dependencies 부분에 추가됨
- index.js 파일에 mongoose를 활용하여 db와 연결하는 코드 작성
- 음... 모든것을 다 완료한후 npm run start를 하는데 자꾸 에러가나서 찾아보는데 mongoose 6.0 이상의 버전부터는 useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false 이 4가지의 옵션이 적용되지 않는다고 함. 그래서 전부 지우고 진행함.
- 그런데! 그럼에도 실행되지 않음.
- 이제서야 에러코드를 좀 더 자세히보니........
- "TypeError: mongoose.connnect is not a function" 이 에러를 발견함.. 허허허 mongoose가 더이상 지원안하나봄?
- 그.래.서! 해당 에러 관련해서 구글링을 했는데 뭔가.. 뭔가.. 명확한 이유를 찾지 못했다.. 비슷한 에러를 겪는 사람이 많긴한데 뭔가 여기 뿐만 아니라 다른 부분, 예를들어 React(아직 모르는 부분)에서도 비슷한 에러를 겪나봄...
- 그.래.서! 일단 mongoose를 사용하는 부분을 지우고 nodejs에서 제공해주는 예시 코드를 사용하고 거기에 맞게 입력하 다시 npm run start를 하니 정상적으로 가동되었다!!
- 강의 영상에선 "MongoDB Connected..."라고 출력되는데 내 환경에선 "Example app listening on port 3000" 이라는 문구만 뜸... mongo db.. 연결 잘 된거 맞지?


## 4강. MongoDB Model & Schema
### User Model 과 Schema
- Model? Schema?
- Model: Schema를 감싸주는 역할
- Schema: 모델안에 설정되는 값들 하나하나에 대한 정보를 가지는 것, 지정해주는 것

### User Model 만들기
- models 라는 폴더를 만들고, models 폴더에 User.js 파일을 생성해줌
- User.js에는 mongoose를 사용하여 User model을 작성하고 User model의 정보에 해당하는 User Schema를 작성해줌
- ...mongoose... 여기선 정상작동이 될 것인가!
- 과연 결과는?!
- to be continue...

## 5강. GIT 설치
### Git?
- 분산 버전 관리 시스템!

### Git 저장소 만들기
- git init
- git status
- git add .
- gitignore 파일 만들어서 node_modules 폴더의 내용 제외하기
- git rm --cached boiler-plate/node_modules -r 명령어를 사용하여 이미 staging된 node_modules의 내용들을 제거해줌
-

## 6강. SSH를 이용한 GitHub 연결
### 1

### 2


## 7강. BodyParser & PostMan & 회원가입 기능 만들기
### Client - Server 의 통신하는 법
- Client: 크롬브라우저, 서버에게 요청을 보내는 당사자
- Server: 클라이언트/크롬브라우저로 부터 받은 요청을 처리하고 필요한 자료를 클라이언트에게 보내줌

### BodyParser, PostMan 설치하기
- BodyParser: 웹/앱의 Body 데이터를 분석(parse)해서 req.body로 출력해주는 것 (Body-parser Dependency가 필요함)
    - "npm imstall body-parser --save"
- PostMan: 클라이언트가 서버에게 데이터 전송/받기 등을 할 수 있게 도와주는 것
    - "https://www.postman.com/downloads/?utm_source=postman-home"

### Register Route 만들기
- Register Route 예시:
```javascript
 app.get('/', (req, res) => {res.send('Hello World!')})
```

### index.js 작업
....... ....... .......

- 어... 쩝.. mongo db 연결 및 postman 에서의 테스트에 문제가 있어서 .. 해결하려고 한참 찾아도 안되더니.. 수정한 mongo db 접속방법에서 기존방법으로 바꾸고 시도하니... 바로 되네요.. 왜그런지 좀 어이없긴한데 일단 패스하고 다음에 자세히 알아보는걸로!

- 아무튼 회원가입 기능 완성!

## 8강. Nodemon 설치
### Nodemon 다운하기
- Node Mon? : 기존엔 소스코드의 변화가 발생하고, 발생된 변화에 따라 변경이 되려면 서버를 내리고 다시 올렸어야 했는데 굳이 서버를 올리고/내리고 하지 않아도 소스코드의 변화를 감지하고 즉시 반영, 서버 재시작을 해주는 것

- "npm install nodemon --save-dev"  
- save 뒤에 -dev가 더 붙은 이유는 devlopment mode로 설정해주는 것이고 이건 로컬에서 할때랑 프로덕션 모드(배포 후)랑 구분해야 하는데 이것은 로컬에서만 작업/반영 하겠다 라는 뜻

### 스크립트 하나 더 만들기
- 'package.json' 파일의 script 부분에 "backend"(이부분의 명칭은 다르게 해도 됨)에서 nodemon을 이용하여 index.js를 실행하겟다 라는 부분을 추가해줌 
- 기존의 "npm run start" 가 아닌 "npm run backend" 명령어로 index.js 실행시키기
- 이렇게 실행시키면 변화 발생시 즉각 반영해줌

## 9강. 비밀 설정 정보 관리
### 계정정보 관리하기
- 기존의 코드에는 나의 mongodb id와 pwd가 모두 노출되어 있고 이상태로 github등에 나의 소스코드를 업로드 하면 모든 사람들에게 나의 mongodb에 접속할 수 있게 만드는 것과 같다
    - *참고로 나 또한 이 부분에 대해 신경 못쓰고 github에 이전까지 작업한 내용을 업로드 했는데,,, 다행히? 깃헙 자체적으로 Warning 메일이 하나가 왔었다. Github Gaurdian 인가? 라고 왔는데 이것은 github 자체적으로 내가 공유한 코드내에 계정 정보와 관련된 내용이 포함되어 있다고 판단하여 해당 부분을 수정 또는 조치가 필요하다고 알려주는 것이다. 이 메일을 받자마자 내가 뭔가 실수를 했구나 하고 확인해보니 내 계정정보가 공유되어 있어서 바로 수정하였다. 아마 이번 강의에서는 이러한 문제를 사전에 방지하기 위한 작업을 하려는 듯 하다.*

- 그전에, 이전 강의에서 잠깐 언급했던 것처럼 우리가 개발을 local 환경에서도 할 수 있고(development) 배포 한 후에 추가 개발을 할수도 있는데(production) 이 두가지 경우에 대해 따로 생각을 해줘야 함
- 예를들어 devlopment 단계에선 내가 따로 저장해둔 config 파일, 변수등을 가져올 수 있는데 배포 후에는(Heroku 같은 서비스를 이용해 배포할때는), 해당 서비스에서 제공해주는 방법으로 변수를 따로 만들어서 사용해야함.

