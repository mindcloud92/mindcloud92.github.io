---
layout: post-detail
title: "Spring :: 한 줄씩 읽는 Documentation [core.IoC container]"
date: "2021-08-12 23:13:00 +0900"
categories: xyz+
tags: spring framework documentation core Ioc container translation 5.3.9v
thumbnail: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
---

<section class="translation-article-wrapper" markdown="1">
# **1. IoC Container**
## 1. The IoC Container

# 이 장에서는 Spring의 `IoC container`에 대한 내용을 다룬다.
## This chapter covers Spring’s Inversion of Control (IoC) container.
</section>

<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **1.1. Spring IoC Container 및 Bean 소개**
## 1.1. Introduction to the Spring IoC Container and Beans
</div>

<div markdown="1" class="contents">
# 이 장에서는 Spring Framwork가 구현한 `IoC` 원칙에 대해 다룬다.
## This chapter covers the Spring Framework implementation of the Inversion of Control (IoC) principle. 
<br/>

# `IoC`는 의존성 주입(DI)이라 하기도 한다.
## IoC is also known as dependency injection (DI).
 
# `IoC`는 팩토리 메소드에서 생성되거나 반환된 객체의 인스턴스에 설정된 속성이나 객체의 생성자 인자, 팩토리 메소드의 인자를 통해서 의존성을 정의하는 프로세스를 말하며
## It is a process whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. 

# 이렇게 정의된 의존성은 `Bean`을 생성할 때 주입된다. 
## The container then injects those dependencies when it creates the bean. 

# 이 프로세스는 기본적으로 클래스 직접 구성 또는 `Service Locator pattern`<a href="#footnote-1" class="footnote">[1]</a>과 같은 매커니즘을 사용하여 `Bean` 자체의 인스턴스화나 의존성의 위치를 제어한다.
## This process is fundamentally the inverse (hence the name, Inversion of Control) of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes or a mechanism such as the Service Locator pattern.
<br/>


# Spring Framework의 `IoC container`의 기초가 되는 패키지는 `org.springframework.beans`와 `org.springframework.context`이다.
## The `org.springframework.beans` and `org.springframework.context` packages are the basis for Spring Framework’s IoC container. 


# [`BeanFactory`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/beans/factory/BeanFactory.html){:target="_blank"}<a href="#footnote-2" class="footnote">[2]</a> 인터페이스는 모든 유형의 객체를 관리할 수 있는 고급 구성 매커니즘을 제공하며
## The `BeanFactory` interface provides an advanced configuration mechanism capable of managing any type of object. 


# [`ApplicationContext`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/ApplicationContext.html){:target="_blank"}<a href="#footnote-3" class="footnote">[3]</a>는 `BeanFactory`의 하위 인터페이스로
## `ApplicationContext` is a sub-interface of `BeanFactory`.
 
# 다음과 같은 것들을 제공한다.
## It adds:

- # Spring의 `AOP` 기능과의 더 쉬운 통합
## Easier integration with Spring’s AOP features

- # 메시지 리소스에 대한 처리(국제화용)
## Message resource handling (for use in internationalization)

- # 이벤트 발행
## Event publication

- # 웹 어플리케이션에서 사용할 `WebApplicationContext`와 같은 어플리케이션 계층별 컨텍스트
## Application-layer specific contexts such as the `WebApplicationContext` for use in web applications.

# 간단히 말해서 `BeanFactory`는 구성 프레임워크와 기본 기능을 제공하고 `ApplicationContext`는 더 많은 엔터프라이즈별 기능을 추가 제공한다.
## In short, the `BeanFactory` provides the configuration framework and basic functionality, and the `ApplicationContext` adds more enterprise-specific functionality. 

# `ApplicationContext`는 `BeanFactory`의 완벽한 상위 집합이며 이 장에서 Spring의 `IoC container`에 대한 설명에서 독점적으로 사용된다.   
## The `ApplicationContext` is a complete superset of the `BeanFactory` and is used exclusively in this chapter in descriptions of Spring’s IoC container. 

# `ApplicationContext` 대신 `BeanFactory`를 사용하는 방법에 대한 자세한 내용은 [The BeanFactory](#the-bean-factory)를 참고.
## For more information on using the `BeanFactory` instead of the `ApplicationContext`, see `The BeanFactory`.

<br/>

# `Bean`은 Spring에서 어플리케이션의 근간을 구성하고
## In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans.

# Spring `IoC container`에 의해 관리, 조립 및 인스턴스화된다.
## A bean is an object that is instantiated, assembled, and managed by a Spring IoC container. 

# 그렇지 않았다면 `Bean`은 어플리케이션에 있는 많은 객체 중 하나에 불과했을 것이다.
## Otherwise, a bean is simply one of many objects in your application. 

# `Bean`과 이들 간의 의존성은 구성 메타데이터에 반영된다.
## Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.
</div>
</section>



<blockquote markdown="1">
**Reference**
- [원문](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#spring-core){:target="_blank"}

<br/>
**Footnote**
<p id="footnote-1" class="footnote-desc" markdown="1">
    <strong class="number">1.</strong> [Service Locator pattern이란?](https://en.wikipedia.org/wiki/Service_locator_pattern){:target="_blank"}
</p>
<p id="footnote-2" class="footnote-desc" markdown="1">
    <strong class="number">2.</strong> in `org.springframework.beans.factory` package
</p>
<p id="footnote-3" class="footnote-desc" markdown="1">
    <strong class="number">3.</strong> in `org.springframework.context` package
</p>

</blockquote>

<script type="text/javascript" src="{{ '/static/script/accordion.js' | relative_url }}"></script>
