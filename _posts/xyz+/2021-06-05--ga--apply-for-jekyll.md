---
layout: post-detail
title:  "Google Analytics 적용하기 for Jekyll"
date:   2021-06-05
category: xyz+
sub_category: GA
tags: GA google web analytics jekyll
thumbnail: '/asset/images/xyz+/ga--apply-for-jekyll/thumbnail.png'
thumbnail_type: v-full
---

{% assign thumbnail_path = '/asset/images/xyz+/ga--apply-for-jekyll' %}

#### <em class="step-badge mr-1">1</em> [Google Analytics](https://analytics.google.com/analytics/web/provision/#/provision){:target="_blank"} 계정을 새로 생성하고
* 계정 이름 입력   
![step1-1]({{ "/step1-1.png" | prepend: thumbnail_path | relative_url }})   
<p class="info-message ml-3 mb-4">계정 이름: 계정을 여러개 생성할 수 있기때문에 헷갈리지 않도록 사이트 도메인명으로 입력</p>

* 속성 설정
    * 속성 이름: `{사이트 도메인}`
    * 보고 시간대, 통화: 원하는 나라   
    ![step1-2]({{ "/step1-2.png" | prepend: thumbnail_path | relative_url }})

* <em class="badge:grey">optional</em> 비지니스 정보 설정

* 약관 동의   
![step1-3]({{ "/step1-3.png" | prepend: thumbnail_path | relative_url }})


<div class="mt-8"></div>
#### <em class="step-badge mr-1">2</em> [Google Analytics 관리 콘솔](https://analytics.google.com/){:target="_blank"}의 `관리 > 데이터 스트림 > 웹 플랫폼` 탭에서 데이터 스트림을 새로 생성한 다음
![step2]({{ "/step2.png" | prepend: thumbnail_path | relative_url }})

<p class="info-message mb-8">데이터 스트림 선택 전에 원하는 계정으로 변경 가능</p>


#### <em class="step-badge mr-1">3</em> 만든 데이터 스트림 상세에서 `태그하기에 대한 안내`를 열어서 gtag.js를 복사해서 사이트에 적용하면 끗
![step3]({{ "/step3.png" | prepend: thumbnail_path | relative_url }})


<hr class="mb-5 mt-8"/>
<i class="fas fa-link mr-1"></i> Reference
* [Google Analytics 구성 방식](https://support.google.com/analytics/answer/9303323?hl=ko&utm_id=ad#zippy=%2C%EC%9D%B4-%EB%8F%84%EC%9B%80%EB%A7%90%EC%97%90%EC%84%9C%EB%8A%94-%EB%8B%A4%EC%9D%8C-%EB%82%B4%EC%9A%A9%EC%9D%84-%EB%8B%A4%EB%A3%B9%EB%8B%88%EB%8B%A4){:target="_blank"}
* [데이터 스트림 추가 방법](https://learnandcreate.tistory.com/562){:target="_blank"}
* [Google Analytics란?](https://www.hedleyonline.com/ko/blog/%EA%B5%AC%EA%B8%80-%EC%95%A0%EB%84%90%EB%A6%AC%ED%8B%B1%EC%8A%A4-ga-%EA%B0%80%EC%9D%B4%EB%93%9C%EB%B6%81/){:target="_blank"}

