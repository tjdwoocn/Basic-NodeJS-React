# Node js + React 강의 - 기본편

## 1강. Intro
https://ji-gwang.tistory.com/2

Boiler-plate - 보일러플레이트란?
컴퓨터 프로그래밍에서 보일러플레이트 또는 보일러플레이트 코드라고 부르는 것은 최소한의 변경으로 여러곳에서 재사용되며, 반복적으로 비슷한 형태를 띄는 코드를 말한다.

## 2. Node JS 와 Express JS 다운로드

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
- https://www.mongodb.com/ #Mongo DB 홈페이지에서 회원가입호 설치하기

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

## 5강 GIT 설치
### Git?
- 분산 버전 관리 시스템!

### Git 저장소 만들기
- git init
- git status
- git add .
- gitignore 파일 만들어서 node_modules 폴더의 내용 제외하기
- git rm --cached boiler-plate/node_modules -r 명령어를 사용하여 이미 staging된 node_modules의 내용들을 제거해줌
- 