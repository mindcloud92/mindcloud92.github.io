---
layout: post-detail
title: "Utterances 적용하기"
date: "2022-02-06"
category: tech
sub_category: GitHub
tags: github utterances comment widget
thumbnail: '/asset/images/tech/github/apply-utterances/thumbnail.png'
thumbnail_type: v-full
---
    
<div class="info-wrapper mb-8">
<i class="fas fa-info-circle mr-1"></i>Utterance란?<br/>
- Github issue를 기반으로 한 가벼운 댓글 위젯<br/>
</div>

{% assign thumbnail_path = '/asset/images/tech/github/apply-utterances' %}


#### <em class="step-badge mr-1">1</em> 적용할 GitHub `public` repository에 `utterances app`을 설치하고
![step1]({{ "/step1.png" | prepend: thumbnail_path | relative_url }})
<p class="info-message mb-8" markdown="1">
[utterances github app](https://github.com/apps/utterances){:target="_blank"}
</p>

 
#### <em class="step-badge mr-1">2</em> 설치 완료 후 이동되는 [설정 페이지](https://utteranc.es/){:target="_blank"}에서 관련 정보를 설정하면 
* repo(`{github username}/{step1에서 선택한 github repository name}`) 입력   
![step2-1]({{ "/step2-1.png" | prepend: thumbnail_path | relative_url }})    

* 포스트 이슈 매핑 방법 선택   
![step2-2]({{ "/step2-2.png" | prepend: thumbnail_path | relative_url }})
 
* <em class="badge:grey">optional</em> 이슈 라벨 입력 & 테마 선택   
![step2-3]({{ "/step2-3.png" | prepend: thumbnail_path | relative_url }})
<div class="py-2"></div>
 
#### <em class="step-badge mr-1">3</em> template에 적용할 수 있는 script tag가 나오는데 copy해서 적용하려는 layout에 적용하면 끗! 
![step3]({{ "/step3.png" | prepend: thumbnail_path | relative_url }})

<p class="filename-badge">post-detail.html</p>
```html
    <script src="https://utteranc.es/client.js"
            repo="mindcloud92/mindcloud92.github.io"
            issue-term="pathname"
            label="comments"
            theme="github-light"
            crossorigin="anonymous"
            async>
    </script>
``` 

<hr class="mb-5 mt-8"/>
<i class="fas fa-link mr-1"></i> Reference
- [참고 블로그1](https://velog.io/@outstandingboy/Github-%EB%B8%94%EB%A1%9C%EA%B7%B8%EC%97%90-%EB%8C%93%EA%B8%80-%EA%B8%B0%EB%8A%A5-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0-ft.-Utterances){:target="_blank"}
- [참고 블로그2](https://cheese10yun.github.io/utterances/){:target="_blank"}


