---
layout: post-detail
title: "n의 약수 구하기"
date: "2021-06-24 16:32:00 +0900"
categories: tech
tags: 알고리즘 약수 divisor java
test: Algorithm 
---

### # 알아둬야 할
- *자연수* : 양의 정수
- *n의 약수* : n을 `나누어떨어지게` 하는 수

### # 공식
- `1부터 n까지` 반복해서 `n % i == 0`이 되는 수를 `수집`
 
    - 예시   
        ![약수 구하기 예시]({{ '/asset/images/algorithm/split-to-divisor/example.png' | relative_url }}){:class="thumbnail mt-1"}
    
        <br/>
        <a href="https://ideone.com/QXpVUZ" target="_blank" class="btn-debugger">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        
        ```java
            /***
            * n의 약수를 탐색
            * @param n
            * @return n의 약수 배열
            */
            public List<Integer> findAllDivisor(final int n) {
                List<Integer> divisors = new ArrayList<>();
                for (int i = 1; i < n + 1; i++) {
                  if (n % i == 0) {
                    divisors.add(i);
                  }
                }
                
                return divisors;
            }
        ``` 
<br/>
<br/>



> **Reference**
- [약수란? (1)](https://ko.wikipedia.org/wiki/%EC%95%BD%EC%88%98){:target="_blank"}
- [약수란? (2)](https://www.scienceall.com/%EC%95%BD%EC%88%98divisor/){:target="_blank"}
