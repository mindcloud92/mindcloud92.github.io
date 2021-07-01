---
layout: post-detail
title: "Algorithm :: 숫자 정렬하기"
date: "2021-06-25 21:14:00 +0900"
categories: tech
tags: 알고리즘 선택 정렬 selection sort java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif'
---

### # 알아둬야 할
*이 글은 정수형을 대상으로 작성되었지만 다른 자료형에도 활용 가능* 

### # 공식
- `숫자 배열 A의 크기`만큼 반복해서 i번째의 수 n보다 뒤에 위치한 수 중 `비교조건을 만족하는` 수를 탐색하여 두 값의 위치를 `교환` 
               

    ```java
        /**
        * 비교 조건에 따라 정렬
        * @param numbers 정렬 대상
        * @param comparator 비교 조건
        * @return 비교 조건에 따라 정렬된 목록
        */
        public long[] sort(long[] numbers, final BiFunction<Long, Long, Boolean> comparator) {
            long[] sortedNumbers = numbers == null ? new long[]{} : numbers.clone();
            
            for (int i = 0; i < sortedNumbers.length; i++) {
              for (int j = i + 1; j < sortedNumbers.length; j++) {
                long curr = sortedNumbers[i];
                long next = sortedNumbers[j];
            
                if (comparator.apply(curr, next)) {
                  sortedNumbers[i] = next;
                  sortedNumbers[j] = curr;
                }
              }
            }
            
            return sortedNumbers;
        }
    ```

    <br/>
    
    - 오름차순 정렬
        - 비교조건: `n > next`   
        <a href="https://ideone.com/ce12a8" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        
            ```java
                /***
                * 오름차순으로 정렬
                * @param numbers 정렬 대상
                * @return 오름차순으로 정렬된 목록
                */
                public long[] sortAsc(long[] numbers) {
                    return sort(numbers, (curr, next) -> curr > next);
                }
            ```
        
    <br/>
    
    - 내림차순 정렬
        - 비교조건: `n < next`   
        <a href="https://ideone.com/4sCQmX" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        
            ```java
                /**
                * 내림차순으로 정렬
                * @param numbers 정렬 대상
                * @return 내림차순으로 정렬된 목록
                */
                public long[] sortDesc(long[] numbers) {
                  return sort(numbers, (curr, next) -> curr < next);
                }
            ```

<br/>
<br/>

> **Refrence**
- [선택 정렬이란?](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC){:target="_blank"}
