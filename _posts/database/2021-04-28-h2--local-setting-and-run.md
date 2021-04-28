---
layout: post-detail
title:  "H2 :: Mac에서 H2 DB 설치 및 실행하기"
date:   2021-04-28 21:02:00 +0900
categories: Notes
tags: h2 database mac inmemory-db
thumbnail: '/asset/images/database/h2-local-setting/thumbnail.png'
---

<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="1" class="title">
    <a href="http://www.h2database.com/html/download.html" target="_blank">H2 Database 공식 사이트</a>에서 `Platform-Independent zip`을 다운로드하고
</h4>
![step1]({{ "/asset/images/database/h2-local-setting/step1.png"| relative_url }}){:class="thumbnail"}
</div>


<div markdown="1" class="stepper text mt-3">
<h4 markdown="1" data-step="2" class="title">
    다운된 zip 파일 압축을 푼 다음 터미널에서 `압축 푼위치/bin`으로 이동해서 h2 쉘 스크립트 파일을 실행할 수 있게 권한을 변경해주고
</h4>
```text
    $ chmod 755 h2.sh
```
<p class="info">755권한: 소유자만 모든 것(쓰기, 읽기, 실행)이 가능 & 그 외 사용자의 경우는 읽기, 실행은 가능하나 쓰기는 불가능</p>
</div>


<div markdown="1" class="stepper text mt-3">
<h4 markdown="1" data-step="3" class="title">
    h2 쉘 스크립트 실행하면 끗
</h4>
```text
    $ sh h2.sh -- or  ./h2.sh
```

- 실행결과

![step2]({{ "/asset/images/database/h2-local-setting/step2.png"| relative_url }}){:class="thumbnail w-50 ml-3"}

</div>







