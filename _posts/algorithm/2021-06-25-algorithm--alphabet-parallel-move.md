---
layout: post-detail
test: Algorithm
title: "알파벳 평행 이동 시키기"
date: "2021-06-25 23:57:00 +0900"
categories: tech
tags: 알고리즘 알파벳 평행 이동 시저 암호 java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Caesar3.svg'
---

### # 알아둬야 할
- *char 자료형* : 문자 1개를 저장할 수 있는 8비트 `정수` 자료형   
    ∴ 수 연산이 가능

### # 공식
- `문자 c`에 `평행 이동시키려는 수`를 `합산`
- 합산한 수가 `유효하지 않은 알파벳 범위`에 속하면 알파벳 개수인 `26` 차감

    - 예시      
    ![시저 암호 예시]({{ '/asset/images/algorithm/alphabet-parallel-move/example.png' | relative_url }}){:class="thumbnail"}  

    <br/>
    <a href="https://ideone.com/XfJcGI" target="_blank" class="btn-debugger">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>


    ```java
        private static final int ALPHABET_TOTAL_COUNT = 26;
        
        private static final char LAST_LOWER_CASE_ALPHABET = 'z';
        private static final char LAST_UPPER_CASE_ALPHABET = 'Z';
        
        /**
        * 문자 c를 특정 숫자만큼 오른쪽으로 이동 (대소문자 구별)
        * @param c
        * @param shiftCount 이동할 수
        * @return 특정 숫자만큼 오른쪽으로 이동된 위치의 문자
        */
        public char shiftAlphabet(final char c, final int shiftCount) {
            boolean isUpperCaseAlphabet = c >= 'A' && c <= LAST_UPPER_CASE_ALPHABET;
            boolean isLowerCaseAlphabet = c >= 'a' && c <= LAST_LOWER_CASE_ALPHABET;
            if (!isUpperCaseAlphabet && !isLowerCaseAlphabet) {
              return c;
            }
            
            int result = c + shiftCount;
            if ((isUpperCaseAlphabet && result > LAST_UPPER_CASE_ALPHABET) || (isLowerCaseAlphabet && result > LAST_LOWER_CASE_ALPHABET)) {
              result -= ALPHABET_TOTAL_COUNT;
            }
            
            return (char) result;
        }
    ```

<br/>
<br/>

> **Refrence**
- [시저 암호란?](https://ko.wikipedia.org/wiki/%EC%B9%B4%EC%9D%B4%EC%82%AC%EB%A5%B4_%EC%95%94%ED%98%B8){:target="_blank"}
