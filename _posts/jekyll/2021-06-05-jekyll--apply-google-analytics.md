---
layout: post-detail
title:  "Jekyll :: Google Analytics 적용하기"
date:   2021-06-05 22:37:00 +0900
categories: Notes
tags: google GA web-analytics jekyll
thumbnail: '/asset/images/jekyll/analytics/thumbnail.png'
---

<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="1" class="title">
    <a href="https://analytics.google.com/analytics/web/provision/#/provision" target="_blank">Google Analytics</a> 계정을 새로 생성하고
</h4>
* 계정 이름 입력

![step1-1]({{ "/asset/images/jekyll/analytics/step1-1.png"| relative_url }}){:class="thumbnail ml-3" style="width:85%;"}
<p class="info ml-3">계정 이름: 계정을 여러개 생성할 수 있기때문에 헷갈리지 않도록 사이트 도메인명으로 입력</p>

* 속성 설정
    * 속성 이름: {사이트 도메인}
    * 보고 시간대, 통화: 원하는 나라   
![step1-2]({{ "/asset/images/jekyll/analytics/step1-2.png"| relative_url }}){:class="thumbnail"}

* 비지니스 정보 설정(optional)

* 약관 동의

![step1-3]({{ "/asset/images/jekyll/analytics/step1-3.png"| relative_url }}){:class="thumbnail ml-3" style="width:85%;"}
</div>

<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="2" class="title">
    <a href="https://analytics.google.com/" target="_blank">Google Analytics 관리 콘솔</a>에서 `관리 > 데이터 스트림 > 웹 플랫폼` 탭에서 데이터 스트림을 새로 생성한 다음
</h4>

![step2-1]({{ "/asset/images/jekyll/analytics/step2-1.png"| relative_url }}){:class="thumbnail"}
![step2-2]({{ "/asset/images/jekyll/analytics/step2-2.png"| relative_url }}){:class="thumbnail mt-1"}

<p class="info">데이터 스트림 선택 전에 원하는 계정으로 변경 가능</p>

</div>

<div markdown="1" class="stepper text mt-2 mb-4">
<h4 markdown="1" data-step="3" class="title">
    만든 데이터 스트림 상세에서 `태그하기에 대한 안내`를 열어서 gtag.js를 복사해서 사이트에 적용하면 끗 
</h4>

![step3]({{ "/asset/images/jekyll/analytics/step3.png"| relative_url }}){:class="thumbnail"}
</div>


> **Reference**
* [참고 블로그1](https://learnandcreate.tistory.com/562){:target="_blank"}
* [참고 블로그2](https://www.hedleyonline.com/ko/blog/%EA%B5%AC%EA%B8%80-%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A4-ga-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%B6%81/){:target="_blank"}
* [참고 블로그3](https://mingnol2.tistory.com/70){:target="_blank"}
* [Google Analytics 구성 방식](https://support.google.com/analytics/answer/9303323?hl=ko&utm_id=ad#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90%EC%84%9C%EB%8A%94-%EB%8B%A4%EC%9D%8C-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%8B%A4%EB%A3%B9%EB%8B%88%EB%8B%A4){:target="_blank"}

