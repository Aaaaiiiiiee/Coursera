# Link to Blog
* [Blog](https://aaaaiiiiiee.github.io/Self-Study/Web/Source/)

# [생활코딩](https://opentutorials.org/course/3084)

## Index
* [WEB1 - HTML & Internet](.#web1---html--internet--시작)
* [WEB2 - CSS](.#web2---css--시작--마침)
* [WEB2 - JavaScript](.#web2---javascript--시작)
* [WEB3 - Ajax](.#web3---ajax--시작--마침)
* [WEB3 - Facebook Login](.#web3---facebook-login)
* [WEB2 - Google Login](.#web3---google-login--시작--마침)
* [WEB2 - Node.js](.#web2---nodejs--1)
* [WEB3 - Express](.#web2---nodejs--1)
* [WEB2 - HTTP](.#web2---http--시작--마침)

## 2021-01-20
### WEB1 - HTML & Internet : 시작
#### '커버페이지' ~ '웹사이트 완성'
* html은 웹페이지 정보(head)와 본문(body)이다.
* 본문은 너의 글(Article)을 작문하는 것이다.
* Article을 쓰고 그것들을 태그로 감싸는 이유는
* 검색엔진에서 웹페이지를 검색했을 때, 유용한 정보들을 구분하기 위한 약속이다.
* [Copyright Free Image Site](unsplash.com)

## 2021-01-21
### WEB1 - HTML & Internet : 마침
#### '원시웹' ~ '부록 : 코드의 힘 - 방문자 분석기'
* apache2 설치시 default로 index.html이 생성, 서버가 실행된다.
* (IP Address)/index.html 로 접속 가능하다.
* /var/www/html 안에 source파일들을 넣어주면 된다.
* [댓글 기능 추가 / disqus.com](disqus.com)
* [채팅 기능 추가 (1:1 고객센터) / tawk.to](www.tawk.to)

## 2021-01-23
### WEB2 - CSS : 시작 & 마침
#### '커버페이지' ~ '수업을 마치며'
* 웹페이지의 정보,내용은 html로 작성하는 것이고, 그와 구분하기 위해 디자인용 언어인 CSS를 만들었다.<br><br>
* block level element
    - 줄 전체를 쓰는 property
    - so, width 등을 통해 크기 변경 가능            
* inline element
    - 자신의 content 크기만큼만 부피를 차지하는 property<br><br>
* 그리드
    - <'div'><'span'>
    - 둘 다 100% 디자인을 위해 고안된 태그
    - div는 block element, span은 inline element<br><br>
    - 2개 이상의 태그를 나란히 배치하고 싶으면, 그것을 감싸는 부모태그가 필요하다.<br><br>
* [캔 아이 유즈 닷컴](https://caniuse.com/)
    - 해당 기술을 사용해도 되는지, 사용 가능하다면 전체 인구의 얼마나 사용 가능한 지 등을 알 수 있는 사이트.

## 2021-01-25
### WEB2 - JavaScript : 시작
#### '커버페이지' ~ '조건문의 활용'
* [Datatype 'String' Docs](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String)

## 2021-01-27
### WEB2 - JavaScript : (2)
#### '리팩토링(refactoring)' ~ '함수'
* html tag 내에서 JavaScript를 실행할 때, 해당 태그를 선택하고 싶으면 <strong>this</strong>를 사용하면 된다.
* html tag 에서 JavaScript 함수를 호출했을 때, 해당 태그를 선택하고 싶으면 함수인자(parameter)로 넘겨서 사용해라. eg. self<br><br>
* document.querySelector
    - return value : tag
* document.querySelectorAll
    - return value : nodelist[tag]

## 2021-01-28
### 자습
#### WEB1 - HTML & Internet '부록 : 코드의 힘 - 방문자 분석기'
* "README.md에서 JavaScript 사용하기 / README.md html 불러오기" 는 언젠가 다시 시도해서, 모든 github.io 사이트에 Google Analytics 연결하기

## 2021-01-30
### WEB2 - JavaScript : 마침
#### '함수의 활용' ~ '수업을 마치며'
* ctrl + k + f : 소스코드 정렬 단축키<br><br>
* [jQuery 사이트](https://jquery.com/) > Download jQuery > Download file or Link 'CDN'<br><br>
* 추천 검색어
    - document : page의 태그 삭제 or 자식태그추가 등
    - DOM : 위에서 못찾았을 시<br><br>
    - window : 웹페이지가 아니라 웹브라우저 자체를 제어해야 한다면
    - ajax : 웹페이지 reload 없이 정보를 변경하고 싶을 때
    - cookie : 웹페이지가 reload 되어도 현재 상태 유지하고 싶을 때<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;사용자별 개인화된 서비스 제공 가능<br><br>
    - offline web application : 인터넷이 끊겨도 동작하는 어플리케이션 만들고 싶다면
    - webRTC : 화상통신 웹앱 만들고 싶다면
    - speech : 사용자의 음성을 인식하고, 음성으로 정보를 정달하고 싶다면 speech로 시작하는 api를 살펴보라
    - webVR : 가상현실에 관심이 많다면 살펴보라

### WEB3 - Ajax : 시작 & 마침
#### '커버페이지' ~ '수업을 마치며'
* Ajax는 <strong>Server와 부분적으로 통신을 주고받을 수 있는 기술이다.</strong><br><br>
* <strong>Ajax</strong>를 통해 다른 파일의 내용을 현재 html 안으로 불러올 수 있다.
* <strong>hash</strong>를 통해 페이지 내 특정 위치로 이동할 수 있다.

### WEB3 - Facebook Login
#### '커버페이지' ~ '인증과정과 Access token'
* [Facebook Developer Page](https://developers.facebook.com/) 에러로 현재 진행 불가

### WEB3 - Google Login : 시작 & 마침
#### '커버페이지' ~ 'OAuth를 직접 구현하기'
* [Google cloud console](console.cloud.google.com)에서 login 설정 가능하다.
    - 다른 Google API(Calendar, Maps, ...) 등도 library 탭에서 설정한다.
    - 이외 scope 객체(Docs에서 검색)에서 각 API가 필요로 하는 정보를 넘긴다.
* [Google Login Docs](https://developers.google.com/identity/sign-in/web/reference)
    - 'Guides'를 따라가면 기본 기능을 구현할 수 있고
    - 'Reference'는 Docs이다.
    - OAuth를 직접 구현하는 단계 정도는 되어야 DB에 저장 등이 가능할 듯

### WEB2 - Node.js : 시작
#### '커버페이지' ~ '수업의 정상'
* 'JavaScript - *'는 제외<br><br>
* Internet 모든 Web Server의 port는 80을 쓰기로 약속했다. 때문에 80번 포트를 열어놓으면 접속할 때 포트번호를 명시하지 않아도 된다.
* [LineRemove](https://removelinebreaks.net/)
* Node.js filepath의 상대경로는 Terminal의 Current Working Directory 기준이다.

## 2021-01-31
### WEB2 - Node.js : 마침
#### 'Node.js - 동기와 비동기 그리고 콜백' ~ '보충수업 - PM2 사용법'
* [PM2](https://pm2.keymetrics.io/)
    - Server가 의도하지 않은 이유로 꺼졌을 때 다시 실행시켜줌
    - run 중인 파일이 수정되면 자동으로 껐다 켜줌(수동으로 할 필요 없어짐)<br><br>
* 서버에서 데이터를 가져올 때           : GET 방식의 URL QueryString 사용
* 서버에서 데이터를 생성/수정/삭제할 때  : POST 방식 사용<br><br>
* request.on()을 이용해서 post 방식으로 넘어온 데이터를 받고, 객체화할 수 있다.
    - data는 한 번에 넘어오지 않고, 여러번 나뉘어져 넘어온다.<br><br>
* *.js에서 ${Variation}을 사용하기 위해선, `(~)를 사용해라.
    - eg. \`${Variation}\`<br><br>
* Page Redirect Number = 302<br><br>
* `Node.js AWESOME` 주목받는 Module 검색할 수 있는 검색어<br><br>
* npm 설치 시, `-S`, `--save` option을 주면, 소스파일 내에서 사용할 수 있도록 설치가 된다.
* PM2 사용법
    - `pm2 list` : pm2로 켜진 process 모두 출력
    - `pm2 kill` : pm2로 켜진 process 모두 삭제
    - option으로 `--no-daemon` : pm2로 서버 돌리면서 log 같이 볼 수 있음
    - option; `--ignore-watch="data/* sessions/*"` : 파일이 생성될 때마다, pm2가 꺼졌다 켜지는 것을 막을 수 있음. (data directory와 sessions directory 안의 것은 ignore)

## 2021-02-02
### WEB3 - Express : 시작
#### '커버 페이지' ~ 'Express 미들웨어의 실행순서'
* Search `nodejs popular Frameworks 2020`<br><br>
* `app` Method에 따른 요청 방식
    - `app.get()`   : GET 방식의 요청에 응답
    - `app.post()`  : POST 방식의 요청에 응답
    - `app.use()`   : GET, POST 둘 다 응답
        - conclude : Express module은 사실 연속적인 미들웨어 방식으로 이루어져있다고 볼 수 있다.

## 2021-02-04
### WEB3 - Express : 마침
#### '정적인 파일의 서비스' ~ '수업을 마치며'
* `app.use(express.static('public'));`
    - 'public'이란 Directory 안의 파일들에 웹 상에서 직접적으로 접근할 수 있도록 한 것.
    - express default function<br><br>
* Error Handling도 별도로 가능하다.<br><br>
* [Express Security Docs](https://expressjs.com/ko/advanced/best-practice-security.html)
* [Express Generator Docs](https://expressjs.com/ko/starter/generator.html)
* 주제 소개
    1) Template Engine
        - pug
    1) Database
    1) Middleware

### WEB2 - HTTP : 시작 ~ 마침
#### '커버페이지' ~ '수업을 마치며'
1) HTTPS
    - LOGIN 등을 할 때는 꼭 https를 봐라?
1) Cache
1) cookie
1) proxy
1) www.wireshark.org


<br>cf. [Markdown Language Preference](https://heropy.blog/2017/09/30/markdown/)