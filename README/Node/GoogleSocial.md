# Google Social Login 정리
- - -

## Google 아이디 로그인

### Google 로그인 Application 생성

[Google Developer](https://console.developers.google.com/apis/credentials?project=nomadic-pathway-180406) 로 사용자 인증 정보를 누른 후 사용자 인증 정보 만들기를 눌러서 사용자 인증 정보를 만들어서 ClientID와 ClientSecret을 만들어 줍니다.
OAuth 클라이언트 ID를 선택해주면 됩니다.
![](./img/googleApp.png)

선택을 하면 여러개의 리스트가 나오는데 이 중에서 웹으로 개발을 할 것이기 때문에 웹어플리케이션을 선택해줍니다.
선택을 해주면 밑에 사진 처럼 URI를 적어주어야 하는데 위에는 원본 URI를 적어주고 밑에는 CallBackUrI를 적어주면 됩니다.
다 적은 후에는 생성 버튼을 눌러주면 사용자 클라이언트가 생성이 될 것입니다.
![](./img/googleApp2.png)

생성된 사용자 클라이언트를 누르면 다음과 같은 화면이 나올 것 입니다.
아래의 사진에서 기억해 두어야 할 것은 ClientID와 ClientSecret, CallbackURI를 기억해 두시면 됩니다.
![](./img/googleClient.png)

### Node.js에서 실제 사용하는 코드

일단 back에서 간단하게 버튼만 만들어서 테스트 해보기위해 google Login으로 요청을 보내는 코드입니다.
```js
const loginButton = (req, res, next) => {
  const google_api_url = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${Oauth.google.clientId}&redirect_uri=${Oauth.google.callbackURL}&scope=https://www.googleapis.com/auth/userinfo.email`;
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  res.end('<a href=\'' + google_api_url + '\'>google login</a>');
};
```

아까 기억해 두었던 CallbackUrl로 google에서 해당 아이디에 관한 정보들을 보내줍니다. 이제 이 정보들을 원하는 것에 맞춰서 저장을 해주어야 합니다.
저는 MongoDB를 사용하였습니다.
Google는 AccessToken을 받아온 후 다시 한번 Profile을 받기위해 google로 요청을 한번 더 보내주어야 합니다.
```js
import rp from 'request-promise';

/** google login */
authSchema.statics.googleLogin = code => {
  const { clientId, clientSecret, callbackURL } = Oauth.google;
  const api_url = `https://www.googleapis.com/oauth2/v4/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${callbackURL}&code=${code}`;
  const options = {
    method: 'POST',
    uri: api_url,
    json: true,
  };
  return rp(options)
    .then(body => {
      const { access_token } = body;
      const api_profileUrl = `https://www.googleapis.com/userinfo/v2/me?key=AIzaSyB_lImFH7uLkYXUlnqyERxk8sxFjkfSd-E&access_token=${access_token}`;
      const profileOptions = {
        method: 'GET',
        uri: api_profileUrl,
        json: true,
      };
      return rp(profileOptions);
    })
    .then(profileBody => {
      if (profileBody) {
        const oauthID = profileBody.id;
        const oauthType = OauthTypes.GOOGLE;
        return Auth.socialLogin(profileBody, oauthID, oauthType);
      } else {
        throw new AuthorizationError();
      }
    });
};

/** social login */
authSchema.statics.socialLogin = (profileJson, oauthID, oauthType) => {
  return User.findOne({ oauthID })
    .then(user => {
      if (!user) {
        return User.create({
          oauthID,
          email: profileJson.email,
          name: profileJson.name,
          confirmed: true,
          oauthType,
        })
          .then(user => user.setAuthor(user).save())
          .then(user => {
            return Auth.sign(user)
              .then(auth => auth.save());
          });
      } else {
        return Auth.sign(user)
          .then(auth => auth.save());
      }
    });
};
```

위와 같은 코드로 사용하여 저는 Email과 이름, googleOauth_id를 저장해 주었습니다.