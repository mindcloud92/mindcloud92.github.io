---
layout: post-detail
title: "Algorithm :: 숫자 정렬하기 [선택 정렬]"
date: "2021-06-25 21:14:00 +0900"
categories: tech
tags: 알고리즘 선택 정렬 selection sort java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif'
---

### # 알아둬야 할
*이 글은 정수형을 대상으로 작성되었지만 다른 자료형에도 활용 가능* 

### # 공식
- `숫자 배열 A의 크기`만큼 반복해서 `i번째의 수 n보다 뒤`에 위치한 수 중 `비교조건을 만족하는` 수를 탐색하여 두 값의 위치를 `교환` 

    ```java
        import java.util.function.BiFunction;
    
        /**
        * 배열 A를 특정 비교 조건 기준으로 정렬
        * @param a
        * @param comparator 비교 조건
        * @return 정렬 결과
        */
        public long[] sort(final long[] a, final BiFunction<Long, Long, Boolean> comparator) {
            long[] result = a == null ? new long[]{} : a.clone();
            
            for (int i = 0; i < result.length; i++) {
              for (int j = i + 1; j < result.length; j++) {
                long curr = result[i];
                long next = result[j];
            
                if (comparator.apply(curr, next)) {
                  result[i] = next;
                  result[j] = curr;
                }
              }
            }
            
            return result;
        }
    ```

    <br/>
    
    - 오름차순 정렬
        - 비교조건: `curr > next`
        - 예시   
        ![오름차순 정렬 예시]({{ '/asset/images/algorithm/sort-number/sort-asc-example.png' | relative_url }}){:class="thumbnail mt-1 pr-2" style="width: 50%;"}
        
        <br/>
        <a href="https://ideone.com/yvJvWM" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        
        ```java
            /***
            * 배열 a를 오름차순으로 정렬
            * @param a
            * @return 정렬 결과
            */
            public long[] sortAsc(final long[] a) {
                return sort(a, (curr, next) -> curr > next);
            }
        ```
        
    <br/>
    
    - 내림차순 정렬
        - 비교조건: `curr < next`
        - 예시   
        ![내림차순 정렬 예시]({{ '/asset/images/algorithm/sort-number/sort-desc-example.png' | relative_url }}){:class="thumbnail mt-1 pr-2" style="width: 50%;"}
        
        <br/>   
        <a href="https://ideone.com/Vlc04q" target="_blank">
            <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
        </a>
        ```java
            /**
            * 배열 a를 내림차순으로 정렬
            * @param a
            * @return 정렬 결과
            */
            public long[] sortDesc(final long[] a) {
              return sort(a, (curr, next) -> curr < next);
            }
        ```

<br/>
<br/>

> **Refrence**
- [선택 정렬이란?](https://ko.wikipedia.org/wiki/%EC%84%A0%ED%83%9D_%EC%A0%95%EB%A0%AC){:target="_blank"}
