# AI 신년카드 만들기

open AI를 사용해서</br>
나만의 특별한 신년카드를 만들 수 있습니다.
</br>

![KakaoTalk_Video_2023-12-28-23-35-34](https://github.com/uuuuooii/new-year-card/assets/97392254/a7a2084b-4927-408c-85d1-ae5476c44d75)

## 기술 스택

Next.js, Typescript, Emotion

## 배포 후

나는 Vercel에 배포를 했고 배포한지 5일만에 244명이 방문해주셨다.
![](https://velog.velcdn.com/images/uuuuooii/post/95938b47-a1ab-4bce-a525-fcf66d64d345/image.png)
![](https://velog.velcdn.com/images/uuuuooii/post/a34bef9b-5c7c-43c0-b6bc-be181e86aa6b/image.png)

그리고 한국인을 타깃으로 한 프로젝트였지만, 나라를 확인해보니, 미국, 일본, 뉴질랜드에서도 방문해주신 기록이 있어서 놀라웠다.

## 트러블슈팅

사이트를 Vercel에서 배포한 후 openAI 통신을 할 때 간헐적으로 504 Gateway Timeout에러가 발생하는 문제가 발생했다.
여러가지 많은 자료를 찾아본 결과, Vercel은 플랫폼을 사용할 때 몇 가지 제한을 적용하는 걸 알았고</br> 1. Vercel CDN 지역 변경</br> 2. Pro 업그레이드 후 Serverless Functions시간 늘이기
</br> 로 해결할 수 있었다.
</br>
[자세한 내용](https://velog.io/@uuuuooii/Next.js-Vercel-504-GATEWAYTIMEOUT-%EC%97%90%EB%9F%AC%ED%95%B4%EA%B2%B0)
