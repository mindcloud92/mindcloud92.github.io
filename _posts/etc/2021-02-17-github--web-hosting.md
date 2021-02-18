---
layout: post
title:  "GitHub :: GitHub Pages로 웹 호스팅 하기"
date:   2021-02-16 21:34:39 +0900
categories: Technical
tags: GitHub GitHub-Pages Web-Hosting Free Jekyll
---

- #### Step1      
    ![step1]({{ "/static/images/github/web-hosting/step1.png"| relative_url }})
    -  GitHub에서 `{username}.github.io`라는 이름으로 저장소를 새로 만들고  

- #### Step2
    ![step2]({{ "/static/images/github/web-hosting/step2.png"| relative_url }})
    - 터미널로 `Jekyll bundler`를 깐 다음
        - ```text 
          sudo gem install jekyll bundler
          ```
          
- #### Step3
    ![step3]({{ "/static/images/github/web-hosting/step3.png"| relative_url }})
    - Step1에서 만든  Git 저장소를 로컬에 clone 하고 터미널을 켜서 clone 한 위치에 jekyll 프로젝트를 생성해서 덮어씌우고 나면 끗
        - ```text 
          jekyll new {project name}
          ```
  

    
**Reference**
- [GitHub Pages Official Site](https://pages.github.com/){:target="_blank"}
- [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages){:target="_blank"}
