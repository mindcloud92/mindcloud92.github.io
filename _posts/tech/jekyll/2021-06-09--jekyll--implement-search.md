---
layout: post-detail
title: "Jekyll 검색 페이지 만들기"
date: 2021-06-09
category: tech
sub_category: Jekyll
tags: jekyll static search dddd javascript underscore template
thumbnail: '/asset/images/tech/jekyll/implement-search/thumbnail.jpeg'
thumbnail_type: v-full
---

<div class="info-wrapper mb-8">
<i class="fas fa-info-circle mr-1"></i> 페이지 템플릿, css는 구현되어 있다고 가정
</div>

{% assign thumbnail_path = '/asset/images/tech/jekyll/implement-search' %}

#### <em class="step-badge mr-1">1</em> `_layouts` 디렉토리 하위에 적용할 검색용 레이아웃 파일을 추가하고

```text
    project
        ├─ _layouts
            ├─ search_layout_name.html
        ...
```

<div class="mt-8"></div>
#### <em class="step-badge mr-1">2</em> 추가한 레이아웃 페이지(`search_layout_name.html`)를 구현한 다음

* `body`에 검색 영역 추가
    <div class="my-2"></div> 
    ```html
        <div class="contents-wrapper">
            <!-- 키워드 입력 영역 -->
            <form type="submit" action="{검색 페이지 path}">
                <input id="{검색 입력란 id}" type="text" name="{검색 키워드 query 변수 이름}" />
            </form>
        
            <!-- 검색 결과 영역 -->
            <section id="{검색 결과 영역 id}" class="mt-2">
            </section>
        </div>
    ```
    <div class="my-2"></div>
  
* 필수 라이브러리 선언 
    <div class="my-2"></div>
    ```html
        <!-- underscore template engine-->
        <script type="text/javascript" src="//cdn.jsdelivr.net/npm/underscore@1.13.1/underscore-umd-min.js"></script>
    
        <!-- search library -->
        <script type="text/javascript" src="//cdn.jsdelivr.net/gh/mindcloud92/dddd.static-search@f542b5b31a23cda9ad481c1022799a56f96d1798/src/static/js/dddd.static-search.min.js"></script>">
    ```
    <p class="info-message mb-4">template engine은 underscore를 사용하지 않아도 됨</p>


* 검색 결과 template 추가
    <div class="my-2"></div>
    ```html
        <script id="{검색결과 템플릿 id}" type="text/template">
            <!-- supported properties:  data, keyword, renderOptions -->
        </script>
    ```  
    <div class="my-2"></div>

* 사이트에 있는 전체 글 JSON으로 변환 
    <div class="my-2"></div>
    ```html
        {% raw %}{% assign posts = '' | split: ',' %}
        {% for post in site.posts %}
             {% capture v %}
                 "title": "{{ post.title | xml_escape }}",
                 "categories": ["{{ post.category }}"],
                 "sub_category": ["{{ post.sub_category }}"],
                 "content": {{ post.content | strip_html | strip_newlines | jsonify }},
                 "tags": [{% for tag in post.tags %} "{{ tag }}" {% unless forloop.last %},{% endunless %} {% endfor %}],
                 "date": "{{ post.date | date: '%FT%TZ' }}",
                 "url": "{{ post.url | xml_escape | relative_url }}",
                 "thumbnail": "{{ post.thumbnail | relative_url }}",
                 "thumbnail_type": "{{ post.thumbnail_type | default: h-full }}"
             {% endcapture %}
         
             {% assign v = v | prepend: '{' | append: '}' | strip_newlines %}
             {% unless forloop.last %}
                 {% assign v = v | append: ', ' %}
             {% endunless %}
         
             {% assign posts = posts | push: v %}
        {% endfor %}{% endraw %}
    ```
    <div class="my-2"></div>
    
* `window.onload` event 구현
    <div class="my-2"></div>
    ```javascript
        {% raw %}window.onload = () => {
            dddd.static.Search.renderResult({
                data: data: [{{ posts }}]
            })
        }{% endraw %}
    ```

<div class="mt-8"></div>
#### <em class="step-badge mr-1">3</em> 프로젝트 루트 경로에 검색 페이지 markdown 파일을 추가하고
<p class="filename-badge">search_path.md</p>
```text
    ---
    layout: search
    ---
```

<div class="mt-8"></div>
#### <em class="step-badge mr-1">4</em> 원하는 영역에 검색 페이지 링크를 걸면 끗
```html
    <a href="/search_path">검색</a>
```


<hr class="mb-5 mt-8"/>
<i class="fas fa-link mr-1"></i> Reference
- [dddd.static-search Docs](https://github.com/mindcloud92/dddd.static-search/blob/main/README.md){:target="blank"}
- [underscore.js 공식 사이트](https://underscorejs.org/){:target="_blank"}

