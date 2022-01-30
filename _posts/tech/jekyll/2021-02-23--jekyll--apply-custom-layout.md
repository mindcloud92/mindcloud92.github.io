---
layout: post-detail
title: "Custom Layout 적용하기"
date: 2021-02-23
category: tech
sub_category: Jekyll
tags: jekyll custom layout
thumbnail: '/asset/images/tech/jekyll/apply-custom-layout/thumbnail.jpeg'
thumbnail_type: v-full
---

#### <em class="step-badge mr-1">1</em> `_config.yml`에 기본으로 설정된 테마를 제거하고

<p class="filename-badge">_config.yml</p>
```yaml
    title: {project title}
    baseurl: {project baseurl}
    url: {project url}
    
    theme: {project theme} # ← remove!
```
<p class="info-message mb-8">_config.yml을 수정하면 서버를 다시 껏다 켜야 적용됨</p>

#### <em class="step-badge mr-1">2</em> 프로젝트 루트 경로에 `_layouts` 디렉토리와 그 하위에 적용할 레이아웃 파일을 사용할 레이아웃명과 동일한 파일명으로 추가한 다음


```text
    project
    ├─ _layouts
        ├─ layout_name.html        
    ├─_config.yml
    ├─ index.md
```

<p class="filename-badge mt-4">layout_name.html</p>
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
<div class="mt-8"></div>

#### <em class="step-badge mr-1">3</em> 적용하고자 하는 글에 적용하면 끗
<p class="filename-badge">post.md</p>
```markdown
    ---
    layout: layout_name
    title:  title
    date:   2021-02-23
    ---
```
<p class="info-message">레이아웃명이 default인 경우에는 따로 지정하지 않아도 바로 전체에 적용됨</p>


<hr class="mb-5 mt-8"/>
<i class="fas fa-link mr-1"></i> Reference
* [Jekyll Docs](https://jekyllrb-ko.github.io/docs/layouts/){:target="_blank"}
