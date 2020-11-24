# cms

- 설명: 고객을 관리할 수 있는 고객 관리 시스템 (클래스형 컴포넌트로 구현)

## 기술 스택

- react, material ui

## 프로젝트 사용 API

### Material UI

- Table Component를 가져와서 데이터를 테이블형태로 보여준다.
- Paper (가로 스크롤) 추가.

### REST API

- fetch API로 서버와 통신
- server와 client가 서로 port가 다르기 때문에 "proxy": "http://localhost:5000/" 를 추가 

### concurrently & nodemon 

- server & client 동시 실행, auto reload
