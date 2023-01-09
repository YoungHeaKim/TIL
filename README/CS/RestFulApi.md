# RESTful Api

### RestFul API란?

- 웹의 장점을 최대한 활용 할 수 있는 아키텍쳐로서 명시적이고 직관적인 API
- REST를 지키면서 행위를 전달하여 HTTP Method를 사용한다.
- Representational State Transfer의 약자
  - 자원(Resource): URI
  - 행위(Verb): HTTP Method
  - 표현(Representations)
- - -
### HTTP Method 종류와 역할

1. GET : 리소스를 조회할 때 사용한다.(리소스에 직접 접근하거나 Query를 날릴 떄 사용)
2. POST: 리소스를 등록하거나 요청 데이터를 처리하기 위해 사용한다. (Body에 데이터를 실어서 요청을 보냄, 새로운 데이터를 등록할 때 사용)
3. DELETE: 리소스를 삭제할때 사용한다.(Query를 통해 리소스를 접근하여 리소스를 삭제할 때 사용)
4. PUT: 리소스를 갱신, 작성, 수정 등 (데이터 전체 수정)
5. PATCH:  리소스를 갱신, 작성, 수정 등 (데이터 부분 수정)