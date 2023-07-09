# 프로젝트 제목

공인중개사와 집을 구하기를 희망하는 사용자를 위한 웹

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## 실행 방법

1. 의존성 설치

```shell
nvm use # 또는 Node 20.0.0 사용
npm install
```

2. 환경 변수 설정

```
# .env
POSTGRES_HOST=127.0.0.1
POSTGRES_DATABASE=real-estate
POSTGRES_USERNAME=backend
POSTGRES_PASSWORD=Password1!
POSTGRES_PORT=5432
```

3. 실행

```shell
npm start
```

## 목표 및 주요 특징

- 매물의 프로토타입에 따라 매물을 보여준다.
- 매물 정보를 지도와 필터링을 통해 검색할 수 있다.
- 매물의 상세를 정보를 조회할 수 있다.
