---
layout: post-detail
title: "Algorithm :: 문자열을 정수로 변환하기"
date: "2021-06-25 11:20:00 +0900"
categories: tech
tags: 알고리즘 문자열 정수 변환 parseInt java 
thumbnail: '/asset/images/algorithm/parse-int/thumbnail.png'
---

### # 알아둬야 할
- *char 자료형*
    - 문자 `1개`를 저장할 수 있는 8비트 `정수 자료형`   
    - 숫자를 나타내는 문자는 정수 48 ~ 57과 대응   
    ∴ char형 문자 s - `'0'` = `s의 정수값`
    

 
### # 공식

- `문자열 s의 크기만큼` 반복해서 부호를 제외한 `i번째 자리 문자`를 `10진수로 변환`<a href="#footnote-1" class="footnote">[1]</a>하여 `합산`
- 음부호가 있는 경우 총합에 `-1`을 곱셈


    <a href="https://ideone.com/K7xDN7" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>

    ```java
        /**
        * 문자열을 정수로 변환
        * @param value 변환할 문자열
        * @return 변환된 정수
        */
        public int parseInt(final String value) {
            if (value == null || value.equals("")) {
              return 0;
            }
            
            int intValue = 0;
            for (int i = 0; i < value.length(); i++) {
              int intValueByChar = parseInt(value.charAt(i));
              if (intValueByChar > -1) {
                intValue += intValueByChar * Math.pow(10, value.length() - i - 1);
              }
            }
            
            return intValue * parseSign(value.charAt(0));
        }
        
        /**
        * 문자를 정수로 변환
        * @param value 변환할 문자
        * @return 변환된 정수
        */
        public int parseInt(final char value) {
            int zeroDecimalNumber = '0'; // '0'을 빼는 이유는 # 알아둬야할 내용 참고
            
            return isMinusSign(value) || isPlusSign(value) ? -1 : value - zeroDecimalNumber;
        }
        
        /**
        * 부호 문자를 숫자로 변환
        * @param character 부호 문자
        * @return 변환된 부호 숫자(음수: -1 / 양수: 1 / 없는 경우: 1)
        */
        public int parseSign(final char character) {
            return isMinusSign(character) ? -1 : 1;
        }
        
        /**
        * 음부호 문자인지 판별
        * @param character 부호 문자
        * @return 음부호 문자인지 여부
        */
        public boolean isMinusSign(final char character) {
            return character == '-';
        }
        
        /**
        * 양부호 문자인지 판별
        * @param character 부호 문자
        * @return 양부호 문자인지 여부
        */
        public boolean isPlusSign(final char character) {
            return character == '+';
        }

    ```

<br/>
<br/>
<blockquote markdown="1">
**Reference**
* [char 자료형이란?](https://ko.wikipedia.org/wiki/Char){:target="_blank"}
* [ASCII 코드란?](https://ko.wikipedia.org/wiki/ASCII){:target="_blank"}
* [char to int 원리](https://2atom.tistory.com/53){:target="_blank"}
* [문자 자료형 사용법](https://dojang.io/mod/page/view.php?id=60){:target="_blank"}

<br/>

**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong>= (i번째 자리 문자 - '0') * 10^(i - 1)&nbsp;&nbsp;&nbsp;<a href="/tech/2021/06/22/algorithm-convert-n-vs-decimal/" target="_blank"><i class="fas fa-link"></i></a>
</p>
</blockquote>
