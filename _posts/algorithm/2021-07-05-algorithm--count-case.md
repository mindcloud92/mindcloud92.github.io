---
layout: post-detail
title: "Algorithm :: 경우의 수 구하기"
date: "2021-07-05 10:26:00 +0900"
categories: tech
tags: 알고리즘 경우의 수 조합 java
thumbnail: '/asset/images/algorithm/count-case/thumbnail.png'
---

### # 알아둬야 할
- *경우의 수* : 어떤 사건이 일어날 수 있는 경우의 가짓수


### # 크기가 n인 배열에서 임의의 원소 r개 뽑기
- 공식 = 크기가 n인 임의의 배열 A를 만들고 `뽑을 개수인 r`만큼 `A`를 `중첩 반복`하여 가짓수 `집계`   
    <i class="ml-2"></i>`= nCr =  n! / ((n - r)! * r!)`<a href="#footnote-1" class="footnote">[1]</a>
    
    - 예시   
    ![경우의 수 예시]({{ '/asset/images/algorithm/count-case/example.png' | relative_url }}){:class="thumbnail mt-1"}

    <br/>
    <a href="https://ideone.com/xLuN84" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        /**
        * 크기가 n인 임의의 배열에서 임의의 원소 r개를 뽑았을 때의 경우의 수 집계
        * @param n
        * @param r 뽑을 개수
        * @return 경우의 수
        */
        public int countCase(final int n, final int r) {
            return countCase(new boolean[n], r, 0);
        }
        
        /**
        * 대상 배열에서 임의의 원소 r개를 뽑았을 때의 경우의 수 집계
        * @param arr
        * @param r 뽑을 개수
        * @param depth 중첩 반복문 depth
        * @return 경우의 수
        */
        public int countCase(final boolean[] arr, final int r, final int depth) {
            int count = 0;
            for (int i = depth; i < arr.length; i++) {
              count += r == 1 ? 1 : countCase(arr, r - 1, i + 1);
            }
            
            return count;
        }
    ```

<br/>
<br/>








<blockquote markdown="1">
**Reference**
- [경우의 수란?](https://ko.wikipedia.org/wiki/%EA%B2%BD%EC%9A%B0%EC%9D%98_%EC%88%98){:target="_blank"}
- [경우의 수 공식 - 대표 뽑기](https://mathbang.net/111){:target="_blank"}

<br/>


**Footnote**
<p id="footnote-1" class="footnote-desc" markdown="1">
    <strong class="number">1.</strong> 
    [경우의 수 공식 - 조합](https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=algosn&logNo=221413837039){:target="_blank"}
</p>
</blockquote>





