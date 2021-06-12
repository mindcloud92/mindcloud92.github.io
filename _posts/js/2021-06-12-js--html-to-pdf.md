---
layout: post-detail
title: "Javascript :: html을 PDF로 다운로드하기"
date: "2021-06-12 20:57:00 +0900"
categories: Notes
tags: javascript js html2canvas jspdf html canvas pdf
thumbnail: '/asset/images/js/html-to-pdf/thumbnail.png'
---

<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="1" class="title">
   필수 라이브러리를 선언하고 
</h4>

* `html2canvas`: html을 canvas를 이용해 이미지로 변환시켜주는 라이브러리
    ```html
      <script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
    ```
  <p class="info">
    공식 홈페이지
    <a href="https://html2canvas.hertzen.com/" target="_blank">   
        <i class="fas fa-external-link-alt"></i>
    </a>
  </p>

* `jspdf`: pdf 생성 라이브러리
    ```html
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
    ```
    <p class="info">
      공식 홈페이지
      <a href="https://parall.ax/products/jspdf" target="_blank">   
          <i class="fas fa-external-link-alt"></i>
      </a>
    </p>
</div>

<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="2" class="title">
    html을 이미지로 변환하는 함수와 이미지를 pdf로 변환하는 함수를 구현 한 다음
</h4>

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

    /**
    * 이미지를 Pdf로 변환
    * @param {object} 변환할 대상 이미지
    * @return pdf 객체
    */
    function convertToPdf (image) {
        const pageWidth = 210;
        const pageHeight = pageWidth * 1.414;

        const imageHeight = pageWidth * image.ratio;
        const pageCount = Math.ceil(imageHeight / pageHeight)

        const pdfDocument = new jsPDF('p', 'mm', 'a4');

        let canvasLeft = 0;
        for (let i = 0; i < pageCount; i++) {
          if (i > 0) {
            canvasLeft -= pageHeight;
            pdfDocument.addPage();
          }

          pdfDocument.addImage(image.dataUrl, image.type, 0, canvasLeft, pageWidth, imageHeight);
        }

        return pdfDocument;
      }
```
</div>


<div markdown="1" class="stepper text mt-2">
<h4 markdown="1" data-step="3" class="title">
   위 함수를 이용하여 `다운로드` 이벤트를 구현하면 끗
</h4>

```javascript
    document.getElementById('btnPdfDownload').addEventListener('click', async function () {
        const image = await convertToImage(document.getElementById('target'))
        
        const pdfDocument = convertToPdf(image)
    
        // pdf download
        pdfDocument.save('filename.pdf');
    });
```
</div>

<p class="warning">
    pdf로 변환하려는 영역에 이미지가 있는 경우에는 경로를 data url로 바인딩   
</p>

### 실행 결과

<div style="border:1px solid #eee; background: #fff; padding: 2em 1em; text-align: center;" class="mb-4">
    <button id="btnPdfDownload" style="padding: 1em;">다운로드</button>
</div>


> **Reference**
- [image to data url](https://ezgif.com/image-to-datauri){:target="_blank"}


<script type="text/javascript" src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"></script>
<script type="text/javascript">
      document.getElementById('btnPdfDownload').addEventListener('click', async function () {
        const image = await convertToImage(document.getElementsByClassName('post-content')[0])

        const pdfDocument = convertToPdf(image)
        pdfDocument.save('filename.pdf');
      });

      function convertToPdf (image) {
        const pageWidth = 210;
        const pageHeight = pageWidth * 1.414;

        const imageHeight = pageWidth * image.ratio;
        const pageCount = Math.ceil(imageHeight / pageHeight)

        const pdfDocument = new jsPDF('p', 'mm', 'a4');

        let canvasLeft = 0;
        for (let i = 0; i < pageCount; i++) {
          if (i > 0) {
            canvasLeft -= pageHeight;
            pdfDocument.addPage();
          }

          pdfDocument.addImage(image.dataUrl, image.type, 0, canvasLeft, pageWidth, imageHeight);
        }

        return pdfDocument;
      }

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
  </script>
