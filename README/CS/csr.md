# CSR(Client Side Rendering) VS SSR(Server Side Rendering)

## 초기 View 로딩 속도
- - -
| | CSR | SSR | 
|- |- |-|
|View 렌더 속도|View 렌더 전에 HTML 다운 + JS파일 + 리소스 다운 후에 View를 렌더하기 때문에 초기 View 속도가 매우 오래 걸린다. |View를 서버에서 렌더링 하여 가져오기 때문에 첫 로딩이 매울 짧다. |
| 인터렉션 | 렌더 속도가 느린 대신 렌더가 완료된 후에는 인터렉션이 빠르다. | 매번 서버에서 데이터를 가져와야 하기 때문에 인터렉션 시간이 늘어난다. |
| SEO 문제 | SEO를 하기 위해서는 View를 생성하기 위해 자바스크립트를 실행해야하는데 대부분의 웹 크롤러 봇들은 자바스크립트 파일을 실행시키지 못하기 때문에 SEO가 떠러진다. | 서버에서 빌드파일을 가지고 있기 때문에 웹 크롤러 봇들은 자바스크립트 파일을 실행할 이유가 없기 때문에 SEO에 유리하다. |
| 보안문제 | 쿠키말고는 사용자에 대한 정보를 저장할 공간이 마땅하지 않다. | 사용자에 대한 정보를 서버에 세션으로 관리한다. |
| | | |