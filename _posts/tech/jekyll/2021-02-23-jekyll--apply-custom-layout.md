---
layout: post-detail
title: "Jekyll :: Custom Layout 적용하기"
date: 2021-02-23 18:34:39 +0900
categories: tech
tags: jekyll custom layout
thumbnail: '/asset/images/jekyll/custom-layout/thumbnail.png'
---

<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="1" class="title">
    `_config.yml`에 기본으로 설정된 테마를 제거하고
</h4>

<div markdown="1" class="file-wrapper">
<p class="filename-badge">_config.yml</p>    
```yaml
    title: project title
    baseurl: project baseurl
    url: project url
    
    theme: project theme # ← remove!
```
<p class="info mt-1">_config.yml을 수정하면 서버를 다시 껏다 켜야 적용됨</p>
</div>
</div>




<div markdown="1" class="stepper text mt-3">
<h4 markdown="1" data-step="2" class="title">
    프로젝트 루트 경로에 `_layouts` 디렉토리와 그 하위에 적용할 레이아웃 파일을 사용할 레이아웃명과 동일한 파일명으로 추가한 다음
</h4>

```text
    project
    ├─ _layouts
        ├─ layout_name.html        
    ├─_config.yml
    ├─ index.md
```

<div markdown="1" class="file-wrapper mt-1">
<p class="filename-badge">layout_name.html</p>
```html
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>{{ site.title }}</title>
        </head>
        <body>
            <nav>
                <a href="/">Home</a>
            </nav>
            <footer></footer>
        </body>
    </html>
```    
</div>
</div>




<div markdown="1" class="stepper text mt-3 mb-4">
<h4 markdown="1" data-step="3" class="title">
    적용하고자 하는 글에 적용하면 끗
</h4>

<div markdown="1" class="file-wrapper">
<p class="filename-badge">post.md</p>
```markdown
    ---
    layout: layout_name
    title:  title
    date:   2021-02-23 18:34:39 +0900
    ---
```  
<p class="info mt-1">레이아웃명이 default인 경우에는 따로 지정하지 않아도 바로 전체에 적용됨</p>
</div>
</div>



> **Reference**  
* [Jekyll Docs](https://jekyllrb-ko.github.io/docs/layouts/){:target="_blank"}
