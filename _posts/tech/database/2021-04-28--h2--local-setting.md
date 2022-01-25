---
layout: post-detail
title:  "H2 DB 설치 및 실행하기 for Mac"
date:   2021-04-28
category: tech
sub_category: DB
tags: h2 in-memory database mac local setting guide 
thumbnail: '/asset/images/tech/database/h2--local-setting/thumbnail.png'
thumbnail_type: v-full
---

{% assign thumbnail_path = '/asset/images/tech/database/h2--local-setting' %}

#### <em class="step-badge mr-1">1</em> [H2 DB 공식 사이트](http://www.h2database.com/html/download.html){:target="_blank"}에서 `Platform-Independent zip`을 다운로드하고
![step1]({{ "/step1.png" | prepend: thumbnail_path | relative_url }}){:class="mb-5"}

#### <em class="step-badge mr-1">2</em> 압축을 푼 다음 터미널에서 `{압축 푼 위치}/bin`으로 이동해서 h2 쉘 스크립트 파일을 실행할 수 있게 권한을 변경해주고
```text
    $ cd ~/{압축 푼 위치}/bin
    $ chmod 755 h2.sh
```
<p class="info-message mb-5">755권한: 소유자만 모든 것(쓰기, 읽기, 실행)이 가능 & 그 외 사용자의 경우는 읽기, 실행은 가능하나 쓰기는 불가능</p>


#### <em class="step-badge mr-1">3</em> h2 쉘 스크립트를 실행하면 끗
```text
    $ sh h2.sh -- or  ./h2.sh
```

- 실행하면 요로캐 관리 콘솔이 짠!    
![step2]({{ "/step2.png" | prepend: thumbnail_path | relative_url }}){:class="mt-2"}




