---
layout: post-detail
title: "html을 PDF로 다운로드하기"
date: "2021-06-12"
category: tech
sub_category: Javascript
tags: javascript html2canvas jspdf pdf download
thumbnail: '/asset/images/tech/javascript/html-to-pdf/thumbnail.png'
thumbnail_type: v-full
---
    

{% assign thumbnail_path = '/asset/images/tech/javascript/html-to-pdf' %}

#### <em class="step-badge mr-1">1</em> 필수 라이브러리를 선언하고
* `html2canvas` html을 canvas를 이용해 이미지로 변환시켜주는 라이브러리
    <div class="my-2"></div>
    ```html
      <script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    ```
    <div class="my-2"></div>

* `jspdf` pdf 생성 라이브러리
    <div class="my-2"></div>
    ```html
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    ```

<div class="mt-8"></div>
#### <em class="step-badge mr-1">2</em> html을 이미지로 변환하는 함수와 이미지를 pdf로 변환하는 함수를 구현 한 다음
* html -> image   
    <div class="my-2"></div>
    ```javascript
        /**
        * element inner html을 캡처하여 이미지로 변환
        * @param {object} el 이미지로 변환할 대상 DomElement
        * @returns 이미지 객체
        */
        async function convertToImage (el) {
            const canvas = await html2canvas(el, {
              height: el.clientHeight + Math.floor(el.clientHeight / 7)
            });
            
            return {
              dataUrl: canvas.toDataURL('image/png'),
              width: canvas.width,
              height: canvas.height,
              ratio: canvas.height / canvas.width,
              type: 'PNG'
            }
        }
    ```
    <div class="my-2"></div>
    
* image -> pdf
    <div class="my-2"></div>
    ```javascript
        /**
        * 이미지를 pdf로 변환
        * @param {object} 변환할 대상 이미지
        * @return pdf 객체
        */
        function convertToPdf (image) {
            const pageWidth = 210;
            const pageHeight = pageWidth * 1.414;
    
            const imageHeight = pageWidth * image.ratio;
            const pageCount = Math.ceil(imageHeight / pageHeight)
    
            const pdfDocument = new jsPDF('p', 'mm', 'a4');
    
            let imageTop = 0;
            for (let i = 0; i < pageCount; i++) {
              if (i > 0) {
                imageTop -= pageHeight;
                pdfDocument.addPage();
              }
    
              pdfDocument.addImage(image.dataUrl, image.type, 0, imageTop, pageWidth, imageHeight);
            }
    
            return pdfDocument;
          }
    ```

<div class="mt-8"></div>
#### <em class="step-badge mr-1">3</em> 위 함수를 이용하여 `다운로드` 이벤트를 구현하면 끗 
<a href="https://jsfiddle.net/developer92/rqyjbf8a/" target="_blank"><i class="fas fa-play-circle"></i> 실행해보고 싶다면 클릭!</a>
```javascript
    document.getElementById('btnPdfDownload').addEventListener('click', async function () {
        const image = await convertToImage(document.getElementById('target'))
        
        const pdfDocument = convertToPdf(image)
    
        // pdf download
        pdfDocument.save('filename.pdf');
    });
```
<p class="warning-message">
    pdf로 변환하려는 영역에 이미지가 있는 경우에는 경로를 data url로 바인딩   
</p>


<hr class="mb-5 mt-8"/>
<i class="fas fa-link mr-1"></i> Reference
- [html2canvas 공식 사이트](https://html2canvas.hertzen.com/){:target="_blank"}
- [jspdf 공식 사이트](https://parall.ax/products/jspdf){:target="_blank"}
- [Image to Data URI converter](https://ezgif.com/image-to-datauri){:target="_blank"}

