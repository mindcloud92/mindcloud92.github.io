---
layout: post-detail
title: "Algorithm :: n의 약수 구하기"
date: "2021-06-24 16:32:00 +0900"
categories: tech
tags: java algorithm divisor 
thumbnail: '/asset/images/algorithm/split-to-divisor/thumbnail.png'
---

### # 약수란?
`n`을 `n보다 작은 수`로 나눴을 때 나머지가 `0`이 되는 모든 수

### # 공식
`1부터 n`까지의 수를 n으로 나눴을 때 나머지가 `0`이 되는 수를 수집       

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
