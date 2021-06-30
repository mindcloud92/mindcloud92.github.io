---
layout: post-detail
title: "Algorithm :: 1과 n 사이의 소수 찾기"
date: "2021-06-29 21:14:00 +0900"
categories: tech
tags: 알고리즘 에라토스테네스의체 메모이제이션 소수 prime number java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif'
---

### # 알아둬야 할
- *약수* : 자연수 n을 `나누어떨어지게` 하는 모든 수 = `n % divisor == 0`
- *소수* : 1과 자기 자신만을 `약수`로 가지는 `1보다 큰` 수
- *합성수* : 둘 이상의 소수를 곱한 자연수 = `소수`가 아닌 수 
- *승수* : 곱셈 연산 시 곱해지는 수



### # 공식1 - 메모이제이션
- 1과 n 사이의 `소수`를 찾아 `수집`   
    i. `반환할 목록 A의 크기`만큼 반복해서 `판별할 대상인 수 x % A의 원소`의 값이 `0`인 경우가 `없으면` A에 추가   
    ii. i를 `(n - 2) - 1`만큼 반복   
    
    <p class="info mt-2">(n - 2) -1 = 가장 작은 소수인 2부터 n까지 반복되는 횟수</p>

    <br/>
    <a href="https://ideone.com/KCAN9w" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>

    ```java
        /***
        * 1과 n 사이의 소수를 수집
        * @param n
        * @return 1과 n 사이의 소수 목록
        */
        public int[] collectPrimeNumber(final int n) {
            List<Integer> primeNumbers = new ArrayList<>();
            
            int minPrimeNumber = 2;
            for (int i = minPrimeNumber; i < n + 1; i++) {
              if (isPrimeNumber(i, primeNumbers)) {
                primeNumbers.add(i);
              }
            }
            
            return primeNumbers.stream().mapToInt(Integer::intValue).toArray();
        }
        
        /**
        * 소수인지 판별
        * @param value 판별할 수
        * @param previousPrimeNumbers 판별할 수 보다 작은 소수 목록
        * @return 소수 여부
        */
        public boolean isPrimeNumber(final int value, final List<Integer> previousPrimeNumbers) {
            for (int i = 0; i < previousPrimeNumbers.size(); i++) {
              if (value % previousPrimeNumbers.get(i) == 0) {
                return false;
              }
            }
            
            return true;
        }
    ```

<br/>

### # 공식2 - 에라토스테네스의 체
- 1과 n 사이의 `합성수`를 찾아 `제거`   
    i. 첫번째 원소를 제외한 모든 원소가 `false`인 목록 A를 생성   
    ii. `판별할 대상인 수 x의 승수 최대값 - 최소값`만큼 반복해서 A에서 x의 배수 위치를 `true`로 채움
    iii. ii를 `((n - 2) - 1) - 합성수 개수`만큼 반복   
    iv. A의 원소 중 값이 `false`인 원소의 위치를 대응되는 숫자로 대치
    <p class="info mt-2">(n - 2) - 1 = 가장 작은 소수인 2부터 n까지 반복되는 횟수, 합성수 개수 = 배수로 판별되어 반복문에서 통과되는 횟수</p>
    <p class="info">x * 승수 = x의 배수 = 합성수</p>
    
    <br/>
    <a href="https://ideone.com/mJ1EOo" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        /**
        * 1과 n 사이의 소수를 추출
        * @param n
        * @return 1과 n 사이의 소수 목록
        */
        public int[] extractPrimeNumber(final int n) {
            boolean[] numberSpaces = fillCompositeNumberPosition(new boolean[n]);
            
            return IntStream.range(0, n)
                .map(i -> numberSpaces[i] ? -1 : i + 1)
                .filter(i -> i > 0)
                .toArray();
        }
        
        /***
        * 대상 배열에서 합성수 위치를 true로 채워 반환
        * @param origin 대상 배열
        * @return 합성수 위치가 true로 채워진 목록
        */
        public boolean[] fillCompositeNumberPosition(boolean[] origin) {
            if (origin == null) {
              return origin;
            }
            
            boolean[] result = origin.clone();
            result[0] = true;
            
            int minPrimeNumber = 2;
            int maxNumber = result.length;
            
            for (int i = minPrimeNumber; i < maxNumber; i++) {
              if (result[i - 1]) {
                continue;
              }
            
              double maxMultiplier = maxNumber / i;
              for (int multiplier = minPrimeNumber; multiplier <= maxMultiplier; multiplier++) {
                result[(multiplier * i) - 1] = true;
              }
            }
            
            return result;
        }

    ```

<br/>

### # 공식1 vs 공식2

<table class="text-center">
    <colgroup>
        <col width="10%"/>
        <col width="30%"/>
        <col width="30%"/>
        <col width="20%"/>
    </colgroup>
    <thead>
        <tr>
            <th></th>
            <th>효율성</th>
            <th>복잡도</th>
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
            <td>
                <div class="rating-container">
                    <i class="icon rating full"></i>
                    <i class="icon rating"></i>
                    <i class="icon rating"></i>
                    <i class="icon rating"></i>
                    <i class="icon rating"></i>
                </div>
            </td>
            <td>점차 <strong>증가</strong></td>
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
            <td>
                <div class="rating-container">
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating full"></i>
                    <i class="icon rating"></i>
                </div>
            </td>
            <td>점차 <strong>감소</strong></td>
        </tr>
    </tbody>
</table>


<br/>
<br/>

> **Reference**
- [소수란?](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)){:target="_blank"}
- [합성수란?](https://ko.wikipedia.org/wiki/%ED%95%A9%EC%84%B1%EC%88%98){:target="_blank"}
- [승수란?](https://www.scienceall.com/%EC%8A%B9%EC%88%98multiplier-multiplicator/){:target="_blank"}
- [메모이제이션이란?](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98){:target="_blank"}
- [에라토스테네스의 체란?](https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4){:target="_blank"}
