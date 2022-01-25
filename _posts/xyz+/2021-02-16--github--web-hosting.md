---
layout: post-detail
title:  "GitHub Pages로 웹 호스팅 하기"
date:   2021-02-17
category: xyz+
sub_category: GitHub
tags: github pages web hosting jekyll free
thumbnail: '/asset/images/xyz+/github--web-hosting/thumbnail.jpeg'
thumbnail_type: 'v-full'
---

{% assign thumbnail_path = '/asset/images/xyz+/github--web-hosting' %}

#### <em class="step-badge mr-1">1</em> GitHub에서 `{username}.github.io`라는 이름으로 저장소를 만들고
![step1]({{ "/step1.png" | prepend: thumbnail_path | relative_url }}){:class="mb-5"}

#### <em class="step-badge mr-1">2</em> 터미널로 `jekyll bundler`를 깐 다음
```text 
    $ sudo gem install jekyll bundler
```

<div class="mt-9"></div>
#### <em class="step-badge mr-1">3</em> Step1에서 만든 Git 저장소를 로컬에 clone 하고
![step3]({{ "/step3.png" | prepend: thumbnail_path | relative_url }}){:class="mb-5"}

#### <em class="step-badge mr-1">4</em> clone한 저장소 위치에서 터미널을 열어 jekyll 프로젝트를 만들어서 덮어씌운 다음 commit & push 하면 끗
```text 
    $ jekyll new project_name
```


<div markdown="1" class="reference-wrapper mt-13">
Reference 
* [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages){:target="_blank"}
* [Jekyll 단계별 튜토리얼 - 1. Setup](https://jekyllrb-ko.github.io/docs/step-by-step/01-setup/){:target="_blank"}
* [GitHub Pages 공식 사이트](https://pages.github.com/){:target="_blank"}
</div>
