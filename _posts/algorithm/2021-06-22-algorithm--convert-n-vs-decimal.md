---
layout: post-detail
title: "Algorithm :: n진수 ⇄ 10진수 변환하기"
date: "2021-06-22 23:41:00 +0900"
categories: tech
tags: 알고리즘 n진수 10진수 진법변환 java
thumbnail: '/asset/images/algorithm/n-vs-decimal/thumbnail.png'
---

### # 알아둬야 할
- n진법: `0 ~ (n -1)`까지의 수를 사용해서 수를 표현하는 방법
    - n진법의 기수 = n
- n진수: n진법으로 표현되는 수


 
### # n진수를 10진수로 변환
- 공식 = n진법으로 표기된 숫자를 `자리수만큼` 반복해서 `x번째 자리 숫자 * n 진법의 기수의 (x - 1) 제곱`을 합계
    - 예시   
    ![n진수를 10진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/n-to-decimal.png' | relative_url }}){:class="thumbnail mt-1"}

    <br/>
    <a href="https://ideone.com/cgUoLl" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        /**
        * n진수를 10진수로 변환
        * Integer.parseInt(String.valueOf(number), radix) 와 동일
        * @param value 변환할 n진수 값
        * @param radix n
        * @return 10진수로 변환된 값
        */
        public int convertToDecimal(final int value, int radix) {
            String[] str = String.valueOf(value).split("");
            
            int result = 0;
            for (int i = 0; i < str.length; i++) {
              result += Integer.parseInt(str[i]) * Math.pow(radix, i);
            }
            
            return result;
        }
    ``` 
<br/>

 
### # 10진수를 n진수로 변환 
- 공식 = `10진법으로 표기된 숫자 % (n진법의 기수)`의 `나머지`를 `몫이 0이 될 때까지` 반복해서 연결

    - 예시   
    ![10진수를 n진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/decimal-to-n.png' | relative_url }}){:class="thumbnail mt-1"}


    <br/>
    <a href="https://ideone.com/KHp5aW" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    ```java
        /**
        * 10진수를 n진수로 변환
        * @param value 변환할 10진수 값
        * @param radix n
        * @return n진수로 변환된 값
        */
        public int convertToN(int value, final int radix) {
            return value > 0 ? convertToN(value, radix, "") : 0;
        }
        
        /**
        * 10진수를 n진수로 변환
        * @param value 변환할 10진수 값
        * @param radix n
        * @param tails 현재 자리 뒤에 붙힐 문자열
        * @return n진수로 변환된 값
        */
        public int convertToN(int value, final int radix, String tails) {
            if (value <= 0) {
              return Integer.valueOf(tails);
            }
            
            return convertToN(value / radix, radix, (value % radix) + tails);
        }
    ```
<br/>
<br/>


> **Reference**
- [진법 정의](https://namu.wiki/w/%EC%A7%84%EB%B2%95){:target="_blank"} 

