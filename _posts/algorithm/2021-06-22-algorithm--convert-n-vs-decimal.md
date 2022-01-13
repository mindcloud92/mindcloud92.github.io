---
layout: post-detail
title: "n진수 ⇄ 10진수 변환하기"
date: "2021-06-22 23:41:00 +0900"
categories: tech
test: Algorithm
tags: 알고리즘 n진수 10진수 진법변환 java
thumbnail: '/asset/images/algorithm/n-vs-decimal/thumbnail.png'
---

### # 알아둬야 할
- *n진법* : `0 ~ {n -1}`까지의 수를 사용해서 수를 표현하는 방법
- *n진수* : n진법으로 표현되는 수
- *이 글은 정수형 대상으로 작성되어 10이상의 진법 변환은 대응되지 않지만 문자형으로 변경하여 활용 가능*


 
### # n진수를 10진수로 변환
- 공식 = `n진수 X의 자리수`만큼 반복해서 `i번째 자리 숫자`를 `10진수로 변환`<a href="#footnote-1" class="footnote">[1]</a>하여 `합산`
      
    - 예시   
    ![n진수를 10진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/n-to-decimal-example.png' | relative_url }}){:class="thumbnail mt-1"}

    <br/>
    <a href="https://ideone.com/58fICM" target="_blank" class="btn-debugger">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    
    ```java
        /**
        * n진수 x를 10진수로 변환
        * Integer.parseInt(String.valueOf(number), radix) 와 동일
        * @param x
        * @param radix n진수의 기수(=n)
        * @return 10진수로 변환된 값
        */
        public int convertToDecimal(final int x, final int radix) {
            String[] str = String.valueOf(x).split("");
            
            int decimalNumber = 0;
            for (int i = 0; i < str.length; i++) {
              decimalNumber += Integer.parseInt(str[i]) * Math.pow(radix, str.length - i - 1);
            }
            
            return decimalNumber;
        }
    ``` 
<br/>

 
### # 10진수를 n진수로 변환 
- 공식 = 10진수 X를 반복해서 `몫이 0`이 될 때까지 `n으로 나누고` `나머지`를 `뒤`에서부터 연결  

    - 예시   
    ![10진수를 n진수로 변환 예시]({{ '/asset/images/algorithm/n-vs-decimal/decimal-to-n-example.png' | relative_url }}){:class="thumbnail mt-1"}


    <br/>
    <a href="https://ideone.com/NTDiak" target="_blank" class="btn-debugger">
        <strong><i class="fas fa-play-circle"></i> 실행 해보고 싶다면 클릭</strong>
    </a>
    ```java
        /**
        * 10진수 x를 n진수로 변환
        * @param x
        * @param radix n진수의 기수(=n)
        * @return n진수로 변환된 값
        */
        public int convertToN(final int x, final int radix) {
            return x > 0 ? convertToN(x, radix, "") : 0;
        }
        
        /**
        * 10진수를 n진수로 변환
        * @param x
        * @param radix n진수의 기수(=n)
        * @param tails x의 뒷자리 n진수
        * @return n진수로 변환된 값
        */
        public int convertToN(final int x, final int radix, final String tails) {
            if (x <= 0) {
              return Integer.parseInt(tails);
            }
            
            return convertToN(x / radix, radix, (x % radix) + tails);
        }
    ```

<br/>
<br/>

<blockquote markdown="1">
**Reference**
- [진법이란?](https://namu.wiki/w/%EC%A7%84%EB%B2%95){:target="_blank"}

<br/>


**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong>= i번째 자리 숫자 * n^(i - 1)
</p>
</blockquote>



