# Link to Blog
* [Blog](https://aaaaiiiiiee.github.io/Self-Study/Web/Source/)

# [생활코딩](https://opentutorials.org/course/3084)

## 2021-01-20
### WEB1 - HTML & Internet : 시작
#### '커버페이지' ~ '웹사이트 완성'
* html은 웹페이지 정보(head)와 본문(body)이다.
* 본문은 너의 글(Article)을 작문하는 것이다.
* Article을 쓰고 그것들을 태그로 감싸는 이유는
* 검색엔진에서 웹페이지를 검색했을 때, 유용한 정보들을 구분하기 위한 약속이다.

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

<br>cf. [Markdown Language Preference](https://heropy.blog/2017/09/30/markdown/)