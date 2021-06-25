---
layout: post-detail
title: "Algorithm :: 목록 정렬하기(선택 정렬)"
date: "2021-06-25 21:14:00 +0900"
categories: tech
tags: algorithm selection sort 선택 정렬 알고리즘 java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif'
---

### # 공식
- 오름차순 정렬
    - 현재 선택된 값보다 뒤에 위치한 값들 중 현재 선택된 값보다 `작은` 값이 있으면 두 값의 위치를 교체   
<br/>
- 내림차순 정렬
    - 현재 선택된 값보다 뒤에 위치한 값들 중 현재 선택된 값보다 `큰` 값이 있으면 두 값의 위치를 교체


    <br/>
    <a href="https://ideone.com/kSlHnb" target="_blank">
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
        
        /**
        * 내림차순으로 정렬
        * @param numbers 정렬 대상
        * @return 내림차순으로 정렬된 목록
        */
        public long[] sortDesc(long[] numbers) {
            return sort(numbers, (curr, next) -> curr < next);
        }
        
        /**
        * 비교 조건에 따라 정렬
        * @param numbers 정렬 대상
        * @param comparator 비교 조건
        * @return 비교 조건에 따라 정렬된 목록
        */
        public long[] sort(long[] numbers, final BiFunction<Long, Long, Boolean> comparator) {
            long[] arr = numbers.clone();
            
            for (int i = 0; i < arr.length; i++) {
              for (int j = i + 1; j < arr.length; j++) {
                long curr = arr[i];
            
                if (comparator.apply(curr, arr[j])) {
                  arr[i] = arr[j];
                  arr[j] = curr;
                }
              }
            }
            
            return arr;
        }
    
    ```

<br/>
<br/>
> **Refrence**
- [Wiki](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC){:target="_blank"}
