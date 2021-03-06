---
layout: text-post
title:  "Jekyll :: Custom Layout 적용하기"
date:   2021-02-23 18:34:39 +0900
categories: Technical
tags: jekyll custom layout
---

- #### Step1
    ![step1-1]({{ "/static/images/jekyll/custom-layout/step1-1.png"| relative_url }})
    ![step1-2]({{ "/static/images/jekyll/custom-layout/step1-2.png"| relative_url }})
    - `_config.yml`에 기본으로 설정된 테마를 제거하고 루트 경로에 `_layouts` 디렉토리를 추가한 다음
        - **_config.yml을 수정하면 서버를 다시 껏다 켜야 적용대니까 반영안된다고 당황하지 말기!**  


- #### Step2
    ![step2]({{ "/static/images/jekyll/custom-layout/step2.png"| relative_url }})
    ```html
      <!-- {layout name}.html -->
  
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
                <footer>
                </footer>
            </body>
        </html>
    ```   
    - `_layouts` 디렉토리 하위에 원하는 레이아웃 파일을 사용할 레이아웃명과 동일한 파일명으로 추가해서 적용하고자 하는 글에 적용하면 끗 
        - **레이아웃명이 default인 경우에는 따로 지정하지 않아도 바로 전체에 적용되니 참고하기!**

**Reference**  
- [Jekyll Docs](https://jekyllrb-ko.github.io/docs/layouts/){:target="_blank"}
