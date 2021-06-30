---
layout: post-detail
title: "Algorithm :: n의 약수 구하기"
date: "2021-06-24 16:32:00 +0900"
categories: tech
tags: 알고리즘 약수 divisor java 
thumbnail: '/asset/images/algorithm/split-to-divisor/thumbnail.png'
---

### # 알아둬야 할
- *약수* : 자연수 n을 `나누어떨어지게` 하는 모든 수 = `n % divisor == 0`

### # 공식
- 자연수`n`을 `1부터 n`까지의 수로 나눴을 때 나머지가 `0`이 되는 수를 수집       
    - 예시   
        ![약수 구하기 예시]({{ '/asset/images/algorithm/split-to-divisor/example.png' | relative_url }}){:class="thumbnail mt-1"}
    
        <br/>
        <a href="https://ideone.com/8fpcLO" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        
        ```java
            /***
            * 특정 값을 약수 목록으로 분할
            * @param value
            * @return 약수 목록
            */
            public List<Integer> splitToDivisor(final int value) {
                List<Integer> divisors = new ArrayList<>();
                
                for (int i = 1; i < value + 1; i++) {
                  if (value % i == 0) {
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
