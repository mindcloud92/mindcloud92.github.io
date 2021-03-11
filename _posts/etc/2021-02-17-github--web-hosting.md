---
layout: post-detail--text
title:  "GitHub :: GitHub Pages로 웹 호스팅 하기"
date:   2021-02-17 21:34:39 +0900
categories: Notes
tags: github pages web-hosting jekyll free
--- 

- #### Step1 GitHub에서 `{username}.github.io`라는 이름으로 저장소를 새로 만들고      
    ![step1]({{ "/static/images/github/web-hosting/step1.png"| relative_url }})
    

- #### Step2 터미널로 `Jekyll bundler`를 깐 다음
    ![step2]({{ "/static/images/github/web-hosting/step2.png"| relative_url }})
    ```text 
        sudo gem install jekyll bundler
    ```
          
- #### Step3 Step1에서 만든  Git 저장소를 로컬에 clone 하고
    ![step3-1]({{ "/static/images/github/web-hosting/step3-1.png"| relative_url }})
    ![step3-2]({{ "/static/images/github/web-hosting/step3-2.png"| relative_url }})

- #### Step4 터미널을 켜서 Step3에서 clone 한 위치에 jekyll 프로젝트를 생성해서 덮어씌우고 commit & push하면 끗
    ![step4]({{ "/static/images/github/web-hosting/step4.png"| relative_url }})
    ```text 
      jekyll new {project name}
    ```  

----------------------------
    
**Reference**
- [GitHub Pages Official Site](https://pages.github.com/){:target="_blank"}
- [GitHub Docs](https://docs.github.com/en/github/working-with-github-pages){:target="_blank"}
- [Jekyll tutorial](https://jekyllrb-ko.github.io/docs/step-by-step/01-setup/){:target="_blank"}
