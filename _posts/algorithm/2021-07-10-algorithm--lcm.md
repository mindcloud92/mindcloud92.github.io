---
layout: post-detail
test: Algorithm
title: "최소 공배수 구하기"
date: "2021-07-10 13:26:00 +0900"
categories: tech
tags: 알고리즘 최소공배수 lcm java
---

### # 알아둬야 할
- *공배수* : 두 개 이상의 자연수의 `공통된` 배수
    - *최소 공배수(LCM)*  <a href="#footnote-1" class="footnote">[1]</a> : 공배수 중에서 가장 작은 수

<i></i>
- *n의 약수* : n을 나누어떨어지게 하는 수
- *공약수* : 두 개 이상의 자연수의 `공통된` 약수 
    - *최대 공약수(GCD)* : 공약수 중에서 가장 큰 수

<i></i>    
- *최대 공약수와 최소 공배수의 관계* = `A * B = L * G`
    <p class="info">A, B: 임의의 자연수, G: A와 B의 최대 공약수, L: A와 B의 최소 공배수</p>   
     


### # 공식
- 두 자연수 A와 B의 `곱한` 값을 A와 B의 `최대 공약수`<a href="#footnote-2" class="footnote">[2]</a>로 `나눗셈`  
    - 두 개의 자연수의 최소 공배수 구하기
        - 예시   
        ![두 개의 자연수의 최소 공배수 구하기 예시]({{ '/asset/images/algorithm/lcm/a-b-example.png' | relative_url }}){:class="thumbnail mt-1"}
    
        <br/>
        <a href="https://ideone.com/J4pFgp" target="_blank" class="btn-debugger">
           <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
    
        ```java
            /***
            * a와 b의 최소 공배수 탐색
            * @param a
            * @param b
            * @return a와 b의 최소 공배수
            */
            public int findLeastCommonMultiple(int a, int b) {
                return (a * b) / findGreatestCommonDivisor(a, b);
            }
      
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
      
  - n개 이상의 자연수의 최소 공배수 구하기
    - 예시   
      ![n개 이상의 자연수의 최소 공배수 구하기 예시]({{ '/asset/images/algorithm/lcm/n-example.png' | relative_url }}){:class="thumbnail mt-1"}
        
    <br/>
    <a href="https://ideone.com/V2xIT6" target="_blank" class="btn-debugger">
       <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>

    ```java
        /**
        * n개 이상의 자연수의 최소 공배수 탐색
        * @param arr
        * @return n개 이상의 자연수의 최소 공배수
        */
        public int findLeastCommonMultiple(int[] arr) {
            int result = 1;
            for (int i = 1; i < arr.length; i++) {
              result = findLeastCommonMultiple(i > 1 ? result : arr[i - 1], arr[i]);
            }
            
            return result;
        }
    ```
<br/>
<br/>


<blockquote markdown="1">
**Reference**
- [정수론 - 최대공약수, 최소공배수, 유클리드 호제법](https://dimenchoi.tistory.com/46){:target="_blank"}
- [자연수의 성질](http://trsketch.dothome.co.kr/a11002){:target="_blank"}
- [최대 공약수와 최대 공배수](http://trsketch.dothome.co.kr/a11002){:target="_blank"}

<br/>


**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong> Least Common Multiple 
</p>
<p id="footnote-1" class="footnote-desc">
    <strong class="number">2.</strong> 최대 공약수 구하기
    <a href="/tech/2021/07/09/algorithm-gcd/" target="_blank"><i class="fas fa-link"></i></a> 
</p>
</blockquote>





