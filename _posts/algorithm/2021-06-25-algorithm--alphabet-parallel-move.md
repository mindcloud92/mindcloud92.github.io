---
layout: post-detail
title: "Algorithm :: 알파벳 평행 이동 시키기"
date: "2021-06-25 23:57:00 +0900"
categories: tech
tags: 알고리즘 알파벳 평행 이동 시저 암호 java
thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Caesar3.svg'
---

### # 알아둬야 할
- *char 자료형* : 문자 1개를 저장할 수 있는 8비트 `정수` 자료형   
    ∴ 수 연산이 가능

### # 공식
- 문자 c에 평행 이동시키려는 수를 `합산`
- 합산한 수가 알파벳 범위를 넘어서면 알파벳 개수인 `26` 차감

    - 예시      
    ![시저 암호 예시]({{ '/asset/images/algorithm/alphabet-parallel-move/example.png' | relative_url }}){:class="thumbnail"}  

    <br/>
    <a href="https://ideone.com/WsAgWq" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>


    ```java
        /**
        * 입력받은 이동할 수 만큼 평행 이동
        * @param value 평행이동시킬 문자
        * @param count 이동할 수
        * @return 평행이동 된 문자
        */
        public char shiftAlphabet(final char value, final int count) {
            if (value == ' ') {
                return value; 
            }
        
            int result = value + count;
            
            boolean isOverUpperAlphabetRange = (value <= 'Z' && result > 'Z');
            boolean isOverLowerAlphabetRange = (value >= 'a' && result > 'z');
            
            int alphabetTotalCount = 26;
            if (isOverLowerAlphabetRange || isOverUpperAlphabetRange) {
              result -= alphabetTotalCount;
            }
            
            return (char) result;
        }
    
    ```

<br/>
<br/>

> **Refrence**
- [시저 암호란?](https://ko.wikipedia.org/wiki/%EC%B9%B4%EC%9D%B4%EC%82%AC%EB%A5%B4_%EC%95%94%ED%98%B8){:target="_blank"}
