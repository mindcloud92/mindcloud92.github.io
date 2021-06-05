---
layout: post-detail
title:  "Crawling :: 구글이 내 사이트 크롤링 잘 할 수 있게하기"
date:   2021-06-05 18:06:39 +0900
categories: Notes
tags: google search-console web-crawling
thumbnail: '/asset/images/crawling/register-google/thumbnail.png'
---

<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="1" class="title">
    Google 검색엔진에 내 사이트를 등록하고
</h4>

* [Google search console](https://search.google.com/search-console/welcome?utm_source=about-page){:target="_blank"}
에서 `URL 접두어`유형 영역에 내 사이트 URL을 입력한 다음 `계속`을 클릭 
![step1-1]({{ "/asset/images/crawling/register-google/step1-1.png"| relative_url }}){:class="thumbnail"}

* 소유권 확인 레이어에서 `다른확인방법 > HTML 태그` 영역을 열어 가이드 대로 사이트에 메타데이터를 적용
![step1-2]({{ "/asset/images/crawling/register-google/step1-2.png"| relative_url }}){:class="thumbnail"}
<p class="info ml-3">배포가 다 된 다음에 확인을 요청해야 정상 인증 가능</p>

</div>

<div markdown="1" class="stepper text mb-4">
<h4 markdown="1" data-step="2" class="title">
    사이트 맵도 등록해주면 끗
</h4>

![step2]({{ "/asset/images/crawling/register-google/step2.png"| relative_url }}){:class="thumbnail"}
</div>



> **Reference**
* [Google 검색 정보 구성 방법](https://www.google.com/intl/ko/search/howsearchworks/crawling-indexing/){:target="_blank"}
