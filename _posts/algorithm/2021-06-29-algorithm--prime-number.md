---
layout: post-detail
title: "Algorithm :: 1과 n 사이의 소수 찾기"
date: "2021-06-29 21:14:00 +0900"
categories: tech
tags: 알고리즘 에라토스테네스의체 메모이제이션 소수 prime number java
thumbnail: ''
---

### # 알아둬야 할
- *소수* : 1과 자기 자신만을 `약수`로 가지는 `1보다 큰` 수
- *합성수* : `소수`가 아닌 수
- *약수* : 자연수 n을 `나누어떨어지게` 하는 모든 수 = `n % divisor == 0`


### # 공식1 - 메모이제이션
- 1과 n 사이의 `소수`를 찾아 수집
    - `반환할 목록 A의 크기`만큼 반복해서 `판별할 대상인 수 x % A의 원소`의 값이 `0`인 경우가 `없으면` A에 추가하고   
    이를 가장 작은 소수인 `2`부터 n까지 반복


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

### # 공식2 - 에라토스테네스의 체
- 1과 n 사이의 `합성수`를 찾아 제거
    
    ```java
        /**
        * 1과 n 사이의 소수를 수집
        * @param n
        * @return 1과 n 사이의 소수 목록
        */
        public int[] collectPrimeNumber(int n) {
            boolean[] numberSpaces = fillCompositeNumberSpace(new boolean[n]);
            
            return IntStream.range(0, n)
                .map(i -> numberSpaces[i] ? -1 : i + 1)
                .filter(i -> i > 0)
                .toArray();
        }
        
        /***
        * 합성수 위치의 공간을 1로 채워 반환
        * @param origin 대상 배열
        * @return 합성수 위치의 공간이 채워진 배열
        */
        public boolean[] fillCompositeNumberSpace(boolean[] origin) {
            if (origin == null) {
              return origin;
            }
            
            boolean[] result = origin.clone();
            result[0] = true;
            
            int minPrimeNumber = 2;
            int maxNumber = result.length;
            
            for (int i = minPrimeNumber; i < maxNumber; i++) {
              int currentIndex = i - 1;
              if (result[currentIndex]) {
                continue;
              }
            
              double maxMultiplier = maxNumber / i;
              for (int multiplier = minPrimeNumber; multiplier <= maxMultiplier; multiplier++) {
                result[(multiplier * i) - 1] = true;
                if (result[multiplier - 1]) {
                  continue;
                }
            
                boolean hasDivisor = i != multiplier && i % multiplier == 0;
                if (hasDivisor) {
                  result[currentIndex] = true;
                }
              }
            }
            
            return result;
        }
    ```

> **Reference**
- [소수란?](https://ko.wikipedia.org/wiki/%EC%86%8C%EC%88%98_(%EC%88%98%EB%A1%A0)){:target="_blank"}
- [합성수란?](https://ko.wikipedia.org/wiki/%ED%95%A9%EC%84%B1%EC%88%98){:target="_blank"}
- [메모이제이션이란?](https://ko.wikipedia.org/wiki/%EB%A9%94%EB%AA%A8%EC%9D%B4%EC%A0%9C%EC%9D%B4%EC%85%98){:target="_blank")
