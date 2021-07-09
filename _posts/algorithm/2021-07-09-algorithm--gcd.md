---
layout: post-detail
title: "Algorithm :: 최대 공약수 구하기"
date: "2021-07-09 22:50:00 +0900"
categories: tech
tags: 알고리즘 최대 공약수 유클리드 gcd java
thumbnail: '/asset/images/algorithm/gcd/thumbnail.png'
---

### # 알아둬야 할
- *n의 약수* : n을 나누어떨어지게 하는 수
- *공약수* : 두 개 이상의 자연수의 `공통된` 약수 
    - *최대 공약수(GCD)* <a href="#footnote-1" class="footnote">[1]</a> : 공약수 중에서 가장 큰 수   
     


### # 공식 - 유클리드
- 두 자연수 `A % B(<= A )`가 `0`이 될 때까지 반복해서 `가장 마지막 나머지`를 `탐색`
   
   - 두 개의 자연수의 최대 공약수 구하기
        - 예시
                
        <br/>
        <a href="https://ideone.com/IsELsp" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
    
        ```java
            /***
            * a와 b의 최대 공약수 탐색
            * @param a
            * @param b
            * @return a와 b의 최대 공약수
            */
            public int findGreatestCommonDivisor(final int a, final int b) {
                int min = Math.min(a, b);
                int max = Math.max(a, b);
                
                int remain = max % min;
                if (remain == 0) {
                  return min;
                }
                
                return findGreatestCommonDivisor(min, remain);
            }
        ```
        <br/>

   - n개 이상의 자연수의 최대 공약수 구하기
        - 예시
        
        <br/>
        <a href="https://ideone.com/e3Rojj" target="_blank">
           <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a> 
        
        ```java
            /**
            * n개 이상의 자연수의 최대 공약수 탐색
            * @param arr
            * @return n개 이상의 자연수의 최대 공약수
            */
            public int findGreatestCommonDivisor(int[] arr) {
                 int result = 1;
                 for (int i = 1; i < arr.length; i++) {
                   result = findGreatestCommonDivisor(i > 1 ? result : arr[i - 1], arr[i]);
                 }
                
                 return result;
            }
        ```

<br/>
<br/>


<blockquote markdown="1">
**Reference**
- [유클리드 호제법이란?](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95){:target="_blank"}
- [정수론 - 최대공약수, 최소공배수, 유클리드 호제법](https://dimenchoi.tistory.com/46){:target="_blank"}
- [자연수의 성질](http://trsketch.dothome.co.kr/a11002){:target="_blank"}
- [최대 공약수와 최대 공배수](http://trsketch.dothome.co.kr/a11002){:target="_blank"}
<br/>

**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong> Greatest Common Divisor 
</p>
</blockquote>





