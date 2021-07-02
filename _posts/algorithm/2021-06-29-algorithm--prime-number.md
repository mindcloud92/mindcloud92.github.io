---
layout: post-detail
title: "Algorithm :: 1과 n 사이의 소수 찾기"
date: "2021-06-29 21:14:00 +0900"
categories: tech
tags: 알고리즘 에라토스테네스의체 메모이제이션 소수 prime number java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif'
---

### # 알아둬야 할
- *n의 약수* : n을 `나누어떨어지게` 하는 수
- *소수* : 1과 자기 자신만을 `약수`로 가지는 `1보다 큰` 수
- *합성수* : 둘 이상의 소수를 곱한 자연수 = 소수의 배수 = `소수`가 아닌 수
- *자연수* : 양의 정수 → 구성: `1, 소수, 합성수`


### # 공식1 - 메모이제이션
- 가장 작은 소수인 `2부터 n까지` 반복해서 `소수`를 찾아<a href="#footnote-1" class="footnote">[1]</a> `수집`   

    <br/>
    <a href="https://ideone.com/N2FMWL" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        private final static int MIN_PRIME_NUMBER = 2;
        
        /***
        * 1과 n 사이의 소수를 탐색
        * @param n
        * @return 1과 n 사이의 소수 배열
        */
        public int[] findAllPrimeNumber(final int n) {
            List<Integer> primeNumbers = new ArrayList<>();
            
            for (int i = MIN_PRIME_NUMBER; i < n + 1; i++) {
              if (isPrimeNumber(i, primeNumbers)) {
                primeNumbers.add(i);
              }
            }
            
            return primeNumbers.stream().mapToInt(Integer::intValue).toArray();
        }
        
        /**
        * 숫자 n이 소수인지 판별
        * @param n
        * @param previousPrimeNumbers n보다 작은 소수가 담긴 배열
        * @return 소수 여부
        */
        public boolean isPrimeNumber(final int n, final List<Integer> previousPrimeNumbers) {
            for (Integer previousPrimeNumber : previousPrimeNumbers) {
              boolean hasDivisor = n % previousPrimeNumber == 0;
              if (hasDivisor) {
                return false;
              }
            }
            
            return true;
        }
    ```

<br/>

### # 공식2 - 에라토스테네스의 체
- `n - 2 + 1`<a href="#footnote-2" class="footnote">[2]</a>만큼 반복해서 1부터 n까지의 자연수 중 `합성수`를 찾아<a href="#footnote-3" class="footnote">[3]</a> `제거`
    - 이미 합성수로 판별된 경우는 반복문 통과   
    
    <br/>
    <a href="https://ideone.com/nMP8sN" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        private final static int INVALID_NUMBER = -1;
        
        /**
        * 1과 n 사이의 소수를 탐색
        *
        * @param n
        * @return 1과 n 사이의 소수 배열
        */
        public int[] findAllPrimeNumber(final int n) {
            int[] natualNumbers = new int[n];
            
            natualNumbers[0] = INVALID_NUMBER;
            for (int i = 2; i < n + 1; i++) {
              if (natualNumbers[i - 1] <= INVALID_NUMBER) {
                continue;
              }
            
              natualNumbers[i - 1] = i;
              invalidateMultipleNumber(i, natualNumbers);
            }
            
            return IntStream.of(natualNumbers).filter(i -> i > 0).toArray();
        }
        
        /**
        * 원본 배열에서 숫자 n의 배수 위치에 의미 없는 수를 할당
        *
        * @param n
        * @param source 원본 배열
        */
        public void invalidateMultipleNumber(final int n, int[] source) {
            if (source == null) {
              return;
            }
            
            double maxMultiplier = source.length / n;
            for (int multiplier = 2; multiplier <= maxMultiplier; multiplier++) {
              source[(n * multiplier) - 1] = INVALID_NUMBER;
            }
        }
    ```

<br/>

### # 공식1 vs 공식2

<table class="text-center">
    <colgroup>
        <col width="10%"/>
        <col width="30%"/>
        <col />
    </colgroup>
    <thead>
        <tr>
            <th></th>
            <th>효율성</th>
            <th>연산 횟수</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>공식1</th>
            <td>
                <div class="rating-container">
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating"></i>
                    <i class="icon rating"></i>
                </div>
            </td>
            <td class="text-left">
                반복이 계속될수록 <i>탐색된 소수의 개수가 증가</i>하기 때문에 연산 횟수는 <strong>증가</strong> 
            </td>
        </tr>
        <tr>
            <th>공식2</th>
            <td>
                <div class="rating-container">
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                </div>
            </td>
            <td class="text-left">
                반복이 계속될수록 특정 수의 배수가 걸러져 <i>반복문을 통과하는 수가 증가</i>하기 때문에 연산 횟수는 <strong>감소</strong>
            </td>
        </tr>
    </tbody>
</table>


<br/>
<br/>



<blockquote markdown="1">
**Reference**
- [소수란?](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)){:target="_blank"}
- [합성수란?](https://ko.wikipedia.org/wiki/%ED%95%A9%EC%84%B1%EC%88%98){:target="_blank"}
- [메모이제이션이란?](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98){:target="_blank"}
- [에라토스테네스의 체란?](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4){:target="_blank"}

<br/>


**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong>= A의 크기만큼 반복해서 n을 i번째 수로 나누었을 때 전부 나누어떨어지지 않으면 소수로 판별<br/>
    (특정수 n보다 작은 소수가 담긴 배열 A가 있다고 가정)     
</p>

<p id="footnote-2" class="footnote-desc blink">
    <strong class="number">2.</strong>= 가장 작은 소수인 2부터 n까지의 크기  
</p>
<p id="footnote-3" class="footnote-desc">
    <strong class="number">3.</strong>= 자연수는 1, 소수, 소수의 배수로 구성되기 때문에 소수의 배수는 무조건 합성수로 판별<br/> 
    (특정수 n의 최대 배수 = n * (원본 배열 A에서 가장 큰 값 / n)의 몫) 
</p>
</blockquote>

