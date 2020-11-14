# Step 01

## Work Environment
- Ubuntu 18.04

## Local에서 테스트

### Node.JS 설치
```
$ curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -

$ sudo apt-get install -y nodejs
```

### Count Web 실행
Local에 count.txt 파일 생성해서 사용자 접속 횟수를 기록하는 웹페이지 실행

```
$ node server.js
```

접속 확인은 아래 주소로
- http://localhost:8080


## Container Build & Push
Docker Hub에 이미 가입되어 있고, 사용자 이름은 **${username}** 이라고 하자.

### build
현재 위치에서 실행
```
$ docker build -t ${username}/count:v1 .

$ docker images
```

### Local에서 실행
```
$ docker run -d -p 80:8080 ${username}/count:v1
```

접속 확인은 아래 주소로
- http://localhost


### Docker login
```
$ docker login
```

Permission 에러가 발생하면 아래 포스팅 참고하기 바란다.
- [포스팅](https://whatwant.tistory.com/entry/Docker-Hub-활용)


### Push to Docker Hub
그냥 push 하면 된다.
```
$ docker push ${username}/count:v1
```
