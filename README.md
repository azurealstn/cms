# cms

- 설명: 고객을 관리할 수 있는 고객 관리 시스템 (클래스형 컴포넌트로 구현)

![캡처](https://user-images.githubusercontent.com/55525868/100127212-3d2fad80-2ec2-11eb-9d1b-52a9dd5ab65d.PNG)

## 기술 스택

- react, material ui, mysql

## 프로젝트

### Material UI

- Table Component를 가져와서 데이터를 테이블형태로 보여준다.
- Paper (가로 스크롤) 추가.
- 로딩을 위한 Progress
- 모달창을 위한 Dialog
- 기본적인 css 적용을 위한 withStyles
- AppBar (Navigation Bar)

### REST API

#### Get

- server: get method를 사용하여 엔드포인트를 설정하고 데이터를 가져오는 로직 구현
- client: 비동기적인 함수를 생성하여 `fetch() || axios()` API를 이용하여 서버에 요청. 함수가 성공하면 데이터 표출
- server와 client가 서로 port가 다르기 때문에 `"proxy": "http://localhost:5000/"` 를 추가
- client가 요청할 때마다 값을 변경시키기 위해 `state` 추가

#### Post

- Form에서의 각각의 Handler 처리를 위한 `CustomerAdd` 컴포넌트 생성. 파일이 포함된 데이터를 요청할 경우 웹 헤더에 `'content-type': 'multipart/form-data'` 추가. `axios` API 사용.

![1](https://user-images.githubusercontent.com/55525868/100122434-b62c0680-2ebc-11eb-9379-3055c805fd0f.PNG)

#### Delete

- 고객 데이터 삭제시 DB에서는 실제로 삭제가 되지 않고 삭제가 되었다는 체크가 할 수 있도록 설정

![캡처](https://user-images.githubusercontent.com/55525868/100115670-22573c00-2eb6-11eb-8295-fe7b44672a7e.PNG)

- 두 개의 컬럼을 추가 (null값으로 두는건 좋지 않으니 임의의 값 설정)
- isDeleted = 0 이면 삭제 X, 1이면 삭제 완료

![캡처](https://user-images.githubusercontent.com/55525868/100117350-0ce31180-2eb8-11eb-872e-54b6457ad6d1.PNG)

![2](https://user-images.githubusercontent.com/55525868/100122441-b926f700-2ebc-11eb-8033-5b66ba65e470.PNG)

### concurrently & nodemon 

- server & client 동시 실행, auto reload

### MySQL

![캡처](https://user-images.githubusercontent.com/55525868/100104149-292b8200-2ea9-11eb-92e7-3db5193c5f91.PNG)

- customer Table 생성

### 검색 기능

- 사용자가 검색창에 입력한 문자열을 searchKeyword으로 관리
- filter() 함수 

![캡처](https://user-images.githubusercontent.com/55525868/100126650-921ef400-2ec1-11eb-9be4-84ce874433a9.PNG)
