---
layout: post-detail
title: "Algorithm :: n진수 ⇄ 10진수 변환하기"
date: "2021-06-22 23:41:00 +0900"
categories: tech
tags: java algorithm nToDecimal decimalToN java
thumbnail: '/asset/images/algorithm/n-vs-decimal/thumbnail.png'
---

 
### # n진수를 10진수로 변환
- 공식 = 변환하고자 하는 수를 한 자리 단위로 쪼개 각 자리에 해당하는 `{수} * ({진수}의 {자리} 제곱근)`의 총합을 계산
    - 예시   
    ![n진수를 10진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/n-to-decimal.png' | relative_url }}){:class="thumbnail mt-1"}

    <br/>
    <a href="https://ideone.com/cgUoLl" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        // Integer.parseInt(String.valueOf(number), radix)와 동일
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
- 공식: `{몫}를 {진수}로 나눈 나머지`를 몫이 0이 될때까지 반복해서 나눠 연결
    <p class="info mb-2">{몫}: 변환하고자 하는 수 / {진수} → (변환하고자 하는 수 / {진수})의 몫 / {진수} → ((변환하고자 하는 수 / {진수})의 몫 / {진수}) / {진수} → …  </p>

    - 예시   
    ![10진수를 n진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/decimal-to-n.png' | relative_url }}){:class="thumbnail mt-1"}


    <br/>
    <a href="https://ideone.com/6OLsUu" target="_blank">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    ```java
        public int convertToN(int value, final int radix) {
            return convertToN(value, radix, "");
        }
        
        public int convertToN(int value, final int radix, String tails) {
            if (value <= 0) {
                return Integer.parseInt(tails);
            }
            
            return convertToN(value / radix, radix, (value % radix) + tails);
        }   
    ```
<br/>
<br/>
