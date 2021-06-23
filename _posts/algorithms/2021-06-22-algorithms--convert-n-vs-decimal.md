---
layout: post-detail
title: "Algorithms :: n진수 ⇄ 10진수 변환하기"
date: "2021-06-22 23:41:00 +0900"
categories: tech
tags: java algorithms nToDecimal decimalToN
thumbnail: '/asset/images/algorithms/n-vs-decimal-thumbnail.png'
---

 
### # n진수를 10진수로 변환

- `변환하고자 하는 수`를 `문자열`로 변환
- `변환된 문자열 길이`만큼 `한개의 문자 * (n의 index 제곱)`을 덧셈
    <p class="info">n: n진수의 n // index: 변환된 문자열을 문자로 쪼갠 array의 index</p>
    
    <br/>

    <a href="https://ideone.com/JFHO4X" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        // Integer.parseInt(String.valueOf(number), radix)와 동일
        public int convertToDecimal(final int number, int radix) {
            String[] str = String.valueOf(number).split("");
            
            int result = 0;
            for (int i = 0; i < str.length; i++) {
                result += Integer.parseInt(str[i]) * Math.pow(radix, i);
            }
            
            return result;
        }
    ``` 
  

<br/>

 
### # 10진수를 n진수로 변환 

- `((변환하고자 하는 수 / n) / n) / n  … `을 `몫` 이 0이 될 때까지 반복
- `변환하고자 하는 수 % n`를 문자열로 연결   

    <br/>
    <a href="https://ideone.com/jaHgkl" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    ```java
          public static int convertToN(int decimalNumber, final int radix) {
            return convertToN(decimalNumber, radix, "");
          }
        
          private static int convertToN(int decimalNumber, final int radix, String finalDigits) {
            if (decimalNumber <= 0) {
              return Integer.parseInt(finalDigits);
            }
        
            return convertToN(decimalNumber / radix, radix, (decimalNumber % radix) + finalDigits);
          }
    ```
<br/>
<br/>
