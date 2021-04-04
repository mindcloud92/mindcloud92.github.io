---
layout: post-detail
title:  "GitHub :: GitHub Pages로 웹 호스팅 하기"
date:   2021-02-17 21:34:39 +0900
categories: Notes
tags: github pages web-hosting jekyll free
thumbnail: '/static/images/github/web-hosting/thumbnail.png'
slug: GitHub-Pages로-웹-호스팅-하기
--- 

<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="1" class="title">
    GitHub에서 `{username}.github.io`라는 이름으로 저장소를 새로 만들고
</h4>
![step1]({{ "/static/images/github/web-hosting/step1.png"| relative_url }}){:class="thumbnail"}
</div>



<div markdown="1" class="stepper text mt-3">
<h4 markdown="1" data-step="2" class="title">
    터미널로 `Jekyll bundler`를 깐 다음
</h4>
```text 
    sudo gem install jekyll bundler
```
</div>


<div markdown="1" class="stepper text mt-3">
<h4 markdown="1" data-step="3" class="title">
    Step1에서 만든  Git 저장소를 로컬에 clone 하고
</h4>
![step3]({{ "/static/images/github/web-hosting/step3.png"| relative_url }}){:class="thumbnail"}
</div>
          

<div markdown="1" class="stepper text mt-3 mb-4">
<h4 markdown="1" data-step="4" class="title">
    Step3에서 clone 한 위치에서 터미널을 열어 jekyll 프로젝트를 만들어서 덮어씌운 다음 commit & push하면 끗
</h4>
```text 
    jekyll new project_name
```
</div>

    
> **Reference**
* [GitHub Pages Official Site](https://pages.github.com/){:target="_blank"}
* [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages){:target="_blank"}
* [Jekyll tutorial](https://jekyllrb-ko.github.io/docs/step-by-step/01-setup/){:target="_blank"}
