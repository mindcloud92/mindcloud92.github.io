---
layout: post-detail
title: "한 줄씩 읽는 Documentation [Overview]"
date: "2021-08-02 15:26:00 +0900"
categories: xyz+
tags: spring framework documentation overview translation 5.3.9v
test: spring
thumbnail: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
---

<section class="translation-article-wrapper mt-6" markdown="1">
# Spring을 사용하면 Java 엔터프라이즈 어플리케이션을 쉽게 만들 수 있다.
## Spring makes it easy to create Java enterprise applications.

# Spring은 JVM에서 대체 언어로 Groovy와 Kotlin을 지원하고 어플리케이션의 요구 사항에 따라 다양한 종류의 아키텍처를 생성할 수 있는 유연성을 통해 엔터프라이즈 환경에서 Java를 수용하는 데 필요한 모든 것을 제공한다.
## It provides everything you need to embrace the Java language in an enterprise environment, with support for Groovy and Kotlin as alternative languages on the JVM, and with the flexibility to create many kinds of architectures depending on an application’s needs. 

# `Spring Framework 5.1`부터 Spring은 `JDK 8 이상`을 필요로 하고 JDK 11 LTS에 대한 기본 지원을 제공한다.
## As of Spring Framework 5.1, Spring requires JDK 8+ (Java SE 8+) and provides out-of-the-box support for JDK 11 LTS. 

# Java SE 8 update 60은 Java 8의 최소 패치 릴리즈로 제안되지만 일반적으로는 최신 패치 릴리즈 사용을 권장한다.
## Java SE 8 update 60 is suggested as the minimum patch release for Java 8, but it is generally recommended to use a recent patch release.
<br/>


# Spring은 광범위한 어플리케이션 시나리오를 지원한다.
## Spring supports a wide range of application scenarios. 

# 대기업에서는 어플리케이션이 오랫동안 존재하기도 하고 개발자가 제어할 수 없는 업그레이드 주기를 가진 JDK나 어플리케이션 서버에서 실행되어야 하는 경우도 많고
## In a large enterprise, applications often exist for a long time and have to run on a JDK and application server whose upgrade cycle is beyond developer control. 

# 단일 서버가 내장된 jar나 cloud 환경에서 실행되기도 하지만
## Others may run as a single jar with the server embedded, possibly in a cloud environment. 

# 서버가 필요하지 않은 배치나 통합 워크 로드와 같은 독립적인 어플리케이션으로 실행되는 경우도 있다.
## Yet others may be standalone applications (such as batch or integration workloads) that do not need a server.
<br/>

# Spring은 오픈 소스다.
## Spring is open source. 

# Spring은 다양한 실 사용 사례를 기반으로 지속적인 피드백을 제공하는 크고 활동적인 커뮤니티를 가지고 있고
## It has a large and active community that provides continuous feedback based on a diverse range of real-world use cases. 

# 해당 커뮤니티는 오랜 시간에 걸쳐 Spring이 성공적으로 진화할 수 있는데 도움이 되었다.
## This has helped Spring to successfully evolve over a very long time.
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **1. "Spring"의 의미**
## 1. What We Mean by "Spring"
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# "Spring"이라는 단어는 다른 맥락에서 다른 것을 의미한다.
## The term "Spring" means different things in different contexts.

# Spring Framework 프로젝트 자체를 말하기도 한다.
## It can be used to refer to the Spring Framework project itself, which is where it all started. 

# 오랜 시간에 걸쳐 Spring Framework 위에는 여러 가지 Spring 프로젝트들이 구축되었다.
## Over time, other Spring projects have been built on top of the Spring Framework. 

# 사람들이 말하는 "Spring"은 대개 Spring Family 프로젝트 전체를 의미한다. 
## Most often, when people say "Spring", they mean the entire family of projects. 

# 이 Reference 문서는 기초인 Spring Framework 자체를 중점으로 다룬다.
## This reference documentation focuses on the foundation: the Spring Framework itself.
<br/>

# Spring Framework는 여러 가지 모듈로 나눠져 있어서
## The Spring Framework is divided into modules. 

# 어플리케이션은 필요한 모듈을 선택할 수 있다.
## Applications can choose which modules they need. 

# 여러 가지 모듈의 중심에는 의존성 주입 매커니즘과 configuration 모델을 포함한 핵심 container 모듈이 있다.
## At the heart are the modules of the core container, including a configuration model and a dependency injection mechanism. 

# 그 외에도 Spring Framework는 messaging, transactional data and persistence 그리고 웹을 포함한 다양한 어플리케이션 아키텍처를 위한 기본적인 지원을 제공하기도 한다. 
## Beyond that, the Spring Framework provides foundational support for different application architectures, including messaging, transactional data and persistence, and web.

# 여기에는 Servlet 기반 Spring MVC 웹 프레임워크와 Spring WebFlux reactive 웹 프레임워크도 포함된다.
## It also includes the Servlet-based Spring MVC web framework and, in parallel, the Spring WebFlux reactive web framework.
<br/>


# 모듈에 대한 참고: Spring의 Framework jar를 사용하면 JDK 9의 모듈 경로 "Jigsaw"에 배포할 수 있다.
## A note about modules: Spring’s framework jars allow for deployment to JDK 9’s module path ("Jigsaw"). 

# Jigsaw 지원 어플리케이션에서 사용되는 Spring Framework 5 jar에는 jar 아티팩트 이름과 독립적이고 안정적인 언어 수준 모듈 이름을 정의하는 "Automatic-Module-Name" 매니페스트 항목이 함께 제공되며
## For use in Jigsaw-enabled applications, the Spring Framework 5 jars come with "Automatic-Module-Name" manifest entries which define stable language-level module names ("spring.core", "spring.context" etc) independent from jar artifact names (the jars follow the same naming pattern with "-" instead of ".", e.g. "spring-core" and "spring-context"). 
    
# 물론 JDK 8과 9 이상의 classpath에서도 잘 동작한다.
## Of course, Spring’s framework jars keep working fine on the classpath on both JDK 8 and 9+.
</div>
<!-- // section content end -->
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **2. Spring과 Spring Framework의 역사**
## 2. History of Spring and the Spring Framework
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# Spring은 초기 [J2EE](https://en.wikipedia.org/wiki/Jakarta_EE){:target="_blank"} 사양의 복잡성에 대응하기 위해 2003년에 등장했다.
## Spring came into being in 2003 as a response to the complexity of the early J2EE specifications. 

# 일각에서는 Spring과 Java EE를 경쟁관계로 보기도 하지만 사실 Spring은 Java EE를 보완하는 역할을 한다.
## While some consider Java EE and Spring to be in competition, Spring is, in fact, complementary to Java EE.
<br/> 

# Spring 프로그래밍 모델은 Java EE 플랫폼 사양을 채택하지 않고 
## The Spring programming model does not embrace the Java EE platform specification; 

# 아래와 같이 Java EE의 포괄적인 사양에서 신중하게 선택한 개별 사양과 통합된다.
## rather, it integrates with carefully selected individual specifications from the EE umbrella:

<div class="mt-2"></div>

- Servlet API ([JSR 340](https://jcp.org/en/jsr/detail?id=340){:target="_blank"})
- WebSocket API ([JSR 356](https://www.jcp.org/en/jsr/detail?id=356){:target="_blank"})
- Concurrency Utilities ([JSR 236](https://www.jcp.org/en/jsr/detail?id=236){:target="_blank"})
- JSON Binding API ([JSR 367](https://jcp.org/en/jsr/detail?id=367){:target="_blank"})
- Bean Validation ([JSR 303](https://jcp.org/en/jsr/detail?id=303){:target="_blank"})
- JPA ([JSR 338](https://jcp.org/en/jsr/detail?id=338){:target="_blank"})
- JMS ([JSR 914](https://jcp.org/en/jsr/detail?id=914){:target="_blank"})
- JTA/JCA setups for transaction coordination (conditional)

# 또한 어플리케이션 개발자들이 Spring Framework에서 제공하는 매커니즘 대신 선택하여 사용할 수 있는 DI([JSR 330](https://www.jcp.org/en/jsr/detail?id=330){:target="_blank"})와 공통 Annotation([JSR 250](https://jcp.org/en/jsr/detail?id=250){:target="_blank"}) 사양도 지원한다.
## The Spring Framework also supports the Dependency Injection (JSR 330) and Common Annotations (JSR 250) specifications, which application developers may choose to use instead of the Spring-specific mechanisms provided by the Spring Framework.
<br/>

# `Spring Framework 5.0`부터 Spring은 `Java EE 7 이상`(예: Servlet 3.1+, JPA 2.1+)을 필요로 하는 동시에 런타임 시 Java EE 8 (예: Servlet 4.0, JSON Binding API) 레벨에서 최신 API와 즉시 사용 가능한 통합을 제공한다. 
## As of Spring Framework 5.0, Spring requires the Java EE 7 level (e.g. Servlet 3.1+, JPA 2.1+) as a minimum - while at the same time providing out-of-the-box integration with newer APIs at the Java EE 8 level (e.g. Servlet 4.0, JSON Binding API) when encountered at runtime. 

# 이렇게 하면 Spring과 완벽하게 호환된다. (예: Tomcat 8 and 9, WebSphere 9, JBoss EAP 7)
## This keeps Spring fully compatible with e.g. Tomcat 8 and 9, WebSphere 9, and JBoss EAP 7.
<br/>

# 오랜 시간에 걸쳐 어플리케이션 개발에 있어 Java EE의 역할은 진화했다.
## Over time, the role of Java EE in application development has evolved. 

# Java EE와 Spring의 초기에 어플리케이션은 어플리케이션 서버에 배포하기 위해 만들어졌지만
## In the early days of Java EE and Spring, applications were created to be deployed to an application server. 

# 요즘에는 Spring Boot의 도움을 받아 Servlet conatiner를 내장하고 변경하기 쉬운 Devops 및 Cloud 친화적인 방식으로 만들어진다. 
## Today, with the help of Spring Boot, applications are created in a devops- and cloud-friendly way, with the Servlet container embedded and trivial to change. 

# WebFlux 어플리케이션은 Spring Framework 5부터 Servlet API를 직접 사용하지 않고 Netty와 같은 Servlet container가 아닌 서버로도 실행할 수 있다.
## As of Spring Framework 5, a WebFlux application does not even use the Servlet API directly and can run on servers (such as Netty) that are not Servlet containers.
<br/>

# 이처럼 Spring은 계속해서 혁신하고 진화하고 있다.
## Spring continues to innovate and to evolve. 

# Spring Framework 외에도 Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch 등의 프로젝트도 있다. 
## Beyond the Spring Framework, there are other projects, such as Spring Boot, Spring Security, Spring Data, Spring Cloud, Spring Batch, among others. 

# 각 프로젝트에는 각각 고유한 소스 코드 repository, issue tracker, release 주기가 있다는 것을 기억하는 게 중요하다. 
## It’s important to remember that each project has its own source code repository, issue tracker, and release cadence. 

# Spring 프로젝트의 전체 목록은 [spring.io/projects](https://spring.io/projects){:target="_blank"}를 참고.
## See spring.io/projects for the complete list of Spring projects.
</div>
<!-- // section contents end -->
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **3. 설계 철학**
## 3. Design Philosophy
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# 프레임워크에 대해 배울 때는 프레임워크가 무엇을 하는지 뿐만 아니라 어떤 원리를 따르는지 아는 게 중요하다.
## When you learn about a framework, it’s important to know not only what it does but what principles it follows. 
<br/>

# 다음은 Spring Framework의 기본 원칙이다.
## Here are the guiding principles of the Spring Framework:

- # 모든 레벨에서의 선택을 제공한다.
## Provide choice at every level.
# Spring은 설계에 대한 결정을 최대한 미룰 수 있게 해준다.
## Spring lets you defer design decisions as late as possible.
# 예를 들면 코드 변경 없이 설정을 통해 persistence provider를 전환할 수 있다.
## For example, you can switch persistence providers through configuration without changing your code.
# 다른 많은 인프라 문제와 third party API와의 통합도 마찬가지다. 
## The same is true for many other infrastructure concerns and integration with third-party APIs.

- # 다양한 관점을 수용한다.  
## Accommodate diverse perspectives.
# Spring은 유연성을 포용하고 일을 어떻게 해야 하는지에 대한 의견이 분분하지 않으며
## Spring embraces flexibility and is not opinionated about how things should be done.
# 다양한 관점에서 광범위한 어플리케이션 요구 사항도 지원한다.   
## It supports a wide range of application needs with different perspectives.

- # 이전 버전과의 강력한 호환성을 유지한다. 
## Maintain strong backward compatibility.
# Spring은 버전 간의 주요 변경 사항이 거의 없도록 세심하게 관리되면서 진화해왔고
## Spring’s evolution has been carefully managed to force few breaking changes between versions.
# 신중하게 선택된 범위의 JDK 버전과 third party 라이브러리를 지원하여 Spring에 의존하는 어플리케이션 및 라이브러리의 유지 관리를 용이하게 하기도 한다.  
## Spring supports a carefully chosen range of JDK versions and third-party libraries to facilitate maintenance of applications and libraries that depend on Spring.


- # API 설계에 대해 신경 써라.
## Care about API design.
# Spring 팀은 API를 여러 버전과 수년에 걸쳐 유지하고 직관적으로 만드는 데에 많은 생각과 시간을 투자한다.
## The Spring team puts a lot of thought and time into making APIs that are intuitive and that hold up across many versions and many years.

- # 코드 품질에 대한 높은 표준을 설정한다.
## Set high standards for code quality.
# Spring Framework는 의미 있고 정확하며 최신화된 javadoc에 중점을 두며
## The Spring Framework puts a strong emphasis on meaningful, current, and accurate javadoc.
# 패키지 간의 순환 종속성이 없는 깨끗한 코드 구조를 주장할 수 있는 몇 안 되는 프로젝트 중 하나이다.
## It is one of very few projects that can claim clean code structure with no circular dependencies between packages.
</div>
<!-- // section contents end -->
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **4. 피드백 및 기여**
## 4. Feedback and Contributions
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# 사용 방법에 대한 질문이나 진단 또는 디버깅 문제에는 Stack Overflow를 사용하는 게 좋다. 
## For how-to questions or diagnosing or debugging issues, we suggest using Stack Overflow. 

# Stack Overflow에서 제안한 태그 목록을 보려면 [여기](https://stackoverflow.com/questions/tagged/spring+or+spring-mvc+or+spring-aop){:target="_blank"}를 클릭.
## Click here for a list of the suggested tags to use on Stack Overflow.
<br/>

# 만약 Spring Framework에 문제가 있다고 확신하거나 기능을 제안하고 싶다면 [Github Issues](https://github.com/spring-projects/spring-framework/issues){:target="_blank"}에 올려주길 바란다.
## If you’re fairly certain that there is a problem in the Spring Framework or would like to suggest a feature, please use the GitHub Issues.

# 해결책이나 제안할 수정 사항이 있다면 [Github](https://github.com/spring-projects/spring-framework){:target="_blank"}에 Pull Request를 제출할 수 있다.
## If you have a solution in mind or a suggested fix, you can submit a pull request on Github. 

# 그러나 가장 사소한 문제를 제외한 모든 것들에 대해서는 토론이 이루어지는 이슈 트래커에 티켓을 보관해서 향후에 참조할 수 있도록 기록을 남겨 둘 것을 기대한다.
## However, please keep in mind that, for all but the most trivial issues, we expect a ticket to be filed in the issue tracker, where discussions take place and leave a record for future reference.
<br/>

# 더 자세한 내용은 [CONTRIBUTING](https://github.com/spring-projects/spring-framework/blob/main/CONTRIBUTING.md){:target="_blank"}, 최상위 프로젝트의 지침을 참조. 
## For more details see the guidelines at the CONTRIBUTING, top-level project page.
</div>
<!-- // section contents end -->
</section>




<section class="translation-article-wrapper mb-4 accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **5. 시작하기**
## 5. Getting Started
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# Spring을 이제 막 시작한다면 [Spring Boot](https://spring.io/projects/spring-boot){:target="_blank"} 기반 어플리케이션을 생성해서 Spring Framework를 쓸 수 있다.
## If you are just getting started with Spring, you may want to begin using the Spring Framework by creating a Spring Boot-based application. 

# Spring Boot는 Spring 기반의 상용 어플리케이션을 빠르고 확실하게 만드는 방법을 제공하고
## Spring Boot provides a quick (and opinionated) way to create a production-ready Spring-based application. 

# Spring Framework 기반으로 설정 보다는 규약을 선호하고 가능한 한 빨리 시작하고 실행할 수 있도록 설계되었다.
## It is based on the Spring Framework, favors convention over configuration, and is designed to get you up and running as quickly as possible.
<br/>

# [start.spring.io](https://start.spring.io/){:target="_blank"}를 사용해서 기본 프로젝트를 만들거나 [Restful Web Service 구축 시작하기](https://spring.io/guides/gs/rest-service/){:target="_blank"}와 같은 ["Getting Started" 가이드](https://spring.io/guides){:target="_blank"} 중 하나를 따라 프로젝트를 만들 수도 있다.
## You can use start.spring.io to generate a basic project or follow one of the "Getting Started" guides, such as Getting Started Building a RESTful Web Service. 

# 이러한 가이드는 이해하기 쉬울 뿐 아니라 작업에 초점을 맞추고 있으며 대부분 Spring Boot를 기반으로 한다. 
## As well as being easier to digest, these guides are very task focused, and most of them are based on Spring Boot. 

# 또한 특정 문제를 해결할 때 고려할 수 있는 Spring 포트폴리오의 다른 프로젝트들에 대한 내용도 다루기도 한다.
## They also cover other projects from the Spring portfolio that you might want to consider when solving a particular problem.
</div>
<!-- // section contents end -->
</section>

>**Reference**
- [원문](https://docs.spring.io/spring-framework/docs/current/reference/html/overview.html#overview){:target="_blank"}


<script type="text/javascript" src="{{ '/static/script/accordion.js' | relative_url }}"></script>
