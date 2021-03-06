---
layout: post-detail
title:  "SEO :: 구글이 내 사이트 크롤링 잘 할 수 있게하기"
date:   2021-06-05 18:06:39 +0900
categories: scribble
tags: seo google search console web crawling 
thumbnail: '/asset/images/seo/register-google/thumbnail.png'
---

<p class="warning">최소한의 SEO meta tag와 sitemap.xml이 있다는 가정하에 작성</p>

<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="1" class="title">
    Google 검색엔진에 내 사이트를 등록하고
</h4>

* [Google search console](https://search.google.com/search-console/welcome?utm_source=about-page){:target="_blank"}
에서 `URL 접두어`유형 영역에 내 사이트 URL을 입력한 다음 `계속` 클릭 
    <br/>
    
    ![step1-1]({{ "/asset/images/seo/register-google/step1-1.png"| relative_url }}){:class="thumbnail"}

* 소유권 확인 레이어에서 `다른확인방법 > HTML 태그` 영역을 열어 가이드 대로 사이트에 메타데이터를 적용
    <br/>
    
    ![step1-2]({{ "/asset/images/seo/register-google/step1-2.png"| relative_url }}){:class="thumbnail"}
    <p class="info ml-3">배포가 다 된 다음에 확인을 요청해야 정상 인증 가능</p>

</div>

<div markdown="1" class="stepper text mb-4">
<h4 markdown="1" data-step="2" class="title">
    `색인 > Sitemaps`탭 선택 한 다음 사이트 맵도 등록해주면 끗
</h4>

![step2]({{ "/asset/images/seo/register-google/step2.png"| relative_url }}){:class="thumbnail"}
</div>



> **Reference**
* [Google 검색 정보 구성 방법](https://www.google.com/intl/ko/search/howsearchworks/crawling-indexing/){:target="_blank"}
