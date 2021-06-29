---
layout: post-detail
title: "Algorithm :: 문자열을 정수로 변환하기"
date: "2021-06-25 11:20:00 +0900"
categories: tech
tags: 알고리즘 문자열 정수 변환 parseInt java 
thumbnail: '/asset/images/algorithm/parse-int/thumbnail.png'
---

 
### # 공식
- 문자열을 한 문자씩 쪼개 `10진수`로 변환하여 총합을 계산 
- 음부호가 있는경우 -1을 총합에 곱셈

    <br/>
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
                intValue = (intValue * 10) + intValueByChar;
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
            int zeroDecimalNumber = '0'; // '0'을 빼는 이유는 아래 i 아이콘 설명 참고
            
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
    <p class="info">'0'을 빼는 이유: 수 문자(0 ~ 9) char 자료형은 ASCII 코드 48 ~ 57의 숫자와 대응되기 때문에 '0'을 빼면 대응되는 10진수를 얻는게 가능</p>

<br/>
<br/>

> **Reference**
* [char to int 설명](https://2atom.tistory.com/53){:target="_blank"}
* [ASCII 코드 대응표](https://dojang.io/mod/page/view.php?id=60){:target="_blank"}
