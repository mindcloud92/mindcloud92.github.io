---
layout: post-detail
title: "Jekyll :: 검색 페이지 만들기"
date: 2021-06-09 15:21:00 +0900
categories: Notes
tags: jekyll search dddd.jekyll-search javascript underscore
thumbnail: '/asset/images/jekyll/search/thumbnail.png'
---

<p class="warning">페이지 템플릿, css는 구현 필요</p>

<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="1" class="title">
    `_layouts` 디렉토리 하위에 적용할 검색용 레이아웃 파일을 추가한 다음
</h4>

```text
    project
        ├─ _layouts
            ├─ search_layout_name.html
        ...
```

* `body`에 검색 영역 추가 

    ```html
        <div class="contents-wrapper">
            <!-- 키워드 입력 영역 -->
            <form type="submit" action="{검색 페이지 path}" class="search-input-wrapper">
                <input id="{검색 입력란 id}" type="text" name="{검색 키워드 query 변수 이름}" />
                <button type="submit" class="icon search"></button>
            </form>
        
            <!-- 검색 결과 영역 -->
            <section id="{검색 결과 영역 id}" class="mt-2">
            </section>
        </div>
    ```
<br/>
    
* 필수 스크립트 라이브러리 선언 

    ```html
        <!-- underscore template engine-->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/underscore@1.13.1/underscore-umd-min.js"></script>
    
        <!-- search library -->
        <script type="text/javascript" src="https://cdn.jsdelivr.net/gh/mindcloud92/dddd.jekyll-search@af0ec0f5a986666289dfc2b821ac57bce1f42a3a/src/static/js/dddd.jekyll-search.js"></script>
    ```
<br/>

* 사이트에 있는 전체 글 가져오는 function 추가

    ```javascript
        {% raw %}function getAllPost () {
          return [
              {% for post in site.posts %}
              {
                  "title": "{{ post.title | xml_escape }}",
                  "categories": [{% for category in post.categories %} "{{ category }}" {% unless forloop.last %},{% endunless %} {% endfor %}],
                  "content": {{ post.content | strip_html | strip_newlines | jsonify }},
                  "tags": [{% for tag in post.tags %} "{{ tag }}" {% unless forloop.last %},{% endunless %} {% endfor %}],
                  "date": "{{ post.date }}",
                  "url": "{{ post.url | xml_escape | relative_url }}"
              }
              {% unless forloop.last %},{% endunless %}
              {% endfor %}
          ]
        }{% endraw %}
    ```
<br/>

* 검색 결과 template 추가
    ```html
        <script id="{검색결과 템플릿 id}" type="text/template">
            <!-- supported properties:  data, keyword, renderOptions -->
        </script>
    ```  
<br/>

* `window.onload` event 구현
    
    ```javascript
        window.onload = () => {
            dddd.jekyll.Search.renderResult({
                data: getAllPost()
            })
        }
    ```

</div>


<div markdown="1" class="stepper text">
<h4 markdown="1" data-step="2" class="title">
    프로젝트 루트 경로에 검색 페이지 markdown 파일을 추가하고 
</h4>

<div markdown="1" class="file-wrapper mt-1">
<p class="filename-badge">search_path.md</p>
```text
    ---
    layout: search
    ---
```
</div>
</div>

<div markdown="1" class="stepper text mb-4">
<h4 markdown="1" data-step="3" class="title">
    원하는 영역에 검색 페이지 링크를 걸면 끗 
</h4>
</div>


> **Reference**
- [search library (dddd.jekyll-search)](https://github.com/mindcloud92/dddd.jekyll-search/blob/main/README.md){:target="blank"}
