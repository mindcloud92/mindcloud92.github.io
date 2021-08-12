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

# 이 장에서는 Spring의 IoC container에 대한 내용을 다룬다.
## This chapter covers Spring’s Inversion of Control (IoC) container.
</section>

<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **1.1. Spring IoC Container 및 Bean 소개**
## 1.1. Introduction to the Spring IoC Container and Beans
</div>

<div markdown="1" class="contents">
# 이 장에서는 Spring Framwork가 구현한 IoC 원칙에 대해 다룬다.
## This chapter covers the Spring Framework implementation of the Inversion of Control (IoC) principle. 

# IoC는 의존성 주입(DI)이라고 하기도 한다.
## IoC is also known as dependency injection (DI).
 
# IoC는 객체가 생성자의 인자, 팩토리 메소드의 인자 또는 팩토리 메소드에서 생성되거나 반환된 객체의 인스턴스에 설정된 속성을 통해서만 의존성(즉, 다른 객체와 함께 작업하는 것)을 정의하는 프로세스를 말하며
## It is a process whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. 

# 이렇게 정의된 의존성은 Bean을 생성할 때 주입된다. 
## The container then injects those dependencies when it creates the bean. 

# 이 프로세스는 기본적으로 클래스 직접 구성 또는 Service Locator pattern과 같은 매커니즘을 사용하여 Bean 자체의 인스턴스화나 의존성의 위치를 제어한다.
## This process is fundamentally the inverse (hence the name, Inversion of Control) of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes or a mechanism such as the Service Locator pattern.

# Spring Framework의 IoC container의 기초가 되는 패키지는 `org.springframework.beans`와 `org.springframework.context`이며
## The `org.springframework.beans` and `org.springframework.context` packages are the basis for Spring Framework’s IoC container. 


# `org.springframework.beans.factory` 패키지의 [`BeanFactory`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/beans/factory/BeanFactory.html){:target="_blank"} 인터페이스는 모든 유형의 객체를 관리할 수 있는 고급 구성 매커니즘을 제공한다.
## The `BeanFactory` interface provides an advanced configuration mechanism capable of managing any type of object. 


# `org.springframework.context` 패키지의 [`ApplicationContext`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/ApplicationContext.html){:target="_blank"} 는 `BeanFactory`의 하위 인터페이스로
## `ApplicationContext` is a sub-interface of `BeanFactory`.
 
# 다음과 같은 것들을 제공한다.
## It adds:

- # Spring의 AOP 기능과의 더 쉬운 통합
## Easier integration with Spring’s AOP features

- # 메시지 리소스에 대한 처리(국제화용)
## Message resource handling (for use in internationalization)

- # 이벤트 발행
## Event publication

- # 웹 어플리케이션에서 사용할 `WebApplicationContext`와 같은 어플리케이션 계층별 컨텍스트
## Application-layer specific contexts such as the `WebApplicationContext` for use in web applications.

# 간단히 말해서 `BeanFactory`는 구성 framework와 기본 기능을 제공하고 `ApplicationContext`는 더 많은 엔터프라이즈별 기능을 추가 제공한다.
## In short, the `BeanFactory` provides the configuration framework and basic functionality, and the `ApplicationContext` adds more enterprise-specific functionality. 

# `ApplicationContext`는 `BeanFactory`의 완벽한 상위 집합이며 이 장에서 Spring의 IoC container에 대한 설명에서 독점적으로 사용된다.   
## The `ApplicationContext` is a complete superset of the `BeanFactory` and is used exclusively in this chapter in descriptions of Spring’s IoC container. 

# `ApplicationContext` 대신 `BeanFactory`를 사용하는 방법에 대한 자세한 내용은 [`The BeanFactory`](#beans-beanfactory)를 참고.
## For more information on using the `BeanFactory` instead of the `ApplicationContext`, see `The BeanFactory`.

# Bean은 Spring에서 어플리케이션의 근간을 구성하고
## In Spring, the objects that form the backbone of your application and that are managed by the Spring IoC container are called beans.

# Spring IoC container에 의해 관리되고 조립, 인스턴스화된다.
## A bean is an object that is instantiated, assembled, and managed by a Spring IoC container. 

# 그렇지 않았다면 Bean은 어플리케이션에 있는 많은 객체중 하나에 불과했을 것이다.
## Otherwise, a bean is simply one of many objects in your application. 

# Bean들과 이들 간의 의존성은 container에서 사용는 구성 메타데이터에 반영된다.
## Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.
</div>
</section>

<section class="translation-article-wrapper accordion-wrapper mb-4" markdown="1">
<div markdown="1" class="handler">
# **1.2. Container 개요**
## 1.1. Container Overview
</div>

<div markdown="1" class="contents">
# `org.springframework.context.ApplicationContext` 인터페이스는 Spring IoC container를 나타낸다.    
그리고 Bean의 인스턴스화, 구성 및 조립을 담당하며
## The `org.springframework.context.ApplicationContext` interface represents the Spring IoC container and is responsible for instantiating, configuring, and assembling the beans.
 
# 구성 메타데이터를 읽어 인스턴스화, 구성 및 조립할 객체에 대한 지침을 가져온다. 
## The container gets its instructions on what objects to instantiate, configure, and assemble by reading configuration metadata.

# 구성 메타데이터는 XML이나 Java annotation, Java 코드 형태로 사용할 수 있고
## The configuration metadata is represented in XML, Java annotations, or Java code.

# 어플리케이션을 구성하는 객체와 이러한 객체 간의 풍부한 상호 의존성을 표현할 수 있게 해준다.
## It lets you express the objects that compose your application and the rich interdependencies between those objects.

# `ApplicationContext` 인터페이스의 구현체 몇 가지는 Spring과 함께 제공되고
## Several implementations of the `ApplicationContext` interface are supplied with Spring.

# 독립 실행형 어플리케이션에서는 일반적으로 [`ClassPathXmlApplicationContext`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/ClassPathXmlApplicationContext.html){:target="_blank"}이나 [`FileSystemXmlApplicationContext`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/FileSystemXmlApplicationContext.html){:target="_blank"} 인스턴스를 만들어 사용한다.
## In stand-alone applications, it is common to create an instance of `ClassPathXmlApplicationContext` or `FileSystemXmlApplicationContext`.

# 구성 메타데이터를 정의하기 위한 전통적인 형식은 XML이지만 이 외에도 Java annotation나 코드로 선언하는 부가적인 메타데이터 형식<a href="#footnote-1" class="footnote">[1]</a>도 있다. 
## While XML has been the traditional format for defining configuration metadata, you can instruct the container to use Java annotations or code as the metadata format by providing a small amount of XML configuration to declaratively enable support for these additional metadata formats.

# 대부분의 어플리케이션 시나리오에서 명시적으로 작성되는 코드는 Spring IoC container에 정의된 인스턴스를 인스턴스화하지 않아도 된다. 
## In most application scenarios, explicit user code is not required to instantiate one or more instances of a Spring IoC container.

# 예를 들어 웹 어플리케이션 시나리오에서는 일반적으로 어플리케이션의 `web.xml` 파일에 있는 상용구 웹 descriptor XML의 단 8줄 정도로도 충분하다.<a href="#footnote-2" class="footnote">[2]</a>
## For example, in a web application scenario, a simple eight (or so) lines of boilerplate web descriptor XML in the web.xml file of the application typically suffices (see Convenient ApplicationContext Instantiation for Web Applications).

#  만약 [STS](https://spring.io/tools){:target="_blank"}(Eclipse 기반 개발 환경)를 쓰고 있다면 몇번의 클릭이나 키 입력으로 상용구 구성을 쉽게할 수 있다.
## If you use the Spring Tools for Eclipse (an Eclipse-powered development environment), you can easily create this boilerplate configuration with a few mouse clicks or keystrokes.

# 다음 다이어그램은 Spring이 작동하는 방식을 개괄적으로 보여준다.
## The following diagram shows a high-level view of how Spring works. 

![container magic](https://docs.spring.io/spring-framework/docs/current/reference/html/images/container-magic.png){:class="thumbnail mt-1 pa-1"} 
<p class="thumbnail-description">Figure 1. The Spring IoC container</p>

<br/>
# 시스템 또는 어플리케이션은 어플리케이션의 클래스가 구성 메타데이터와 결합되어 `ApplicationContext`가 생성되고 초기화된 후에야 완전히 구성되고 실행이 가능해진다.
## Your application classes are combined with configuration metadata so that, after the `ApplicationContext` is created and initialized, you have a fully configured and executable system or application.

<br/>
# 1.2.1. 구성 메타데이터
## 1.2.1. Configuration Metadata

# 위에 있는 다이어그램에서 볼 수 있듯이 Spring IoC container는 구성 메타데이터의 형식을 사용한다.
## As the preceding diagram shows, the Spring IoC container consumes a form of configuration metadata. 

# 구성 메타데이터는 어플리케이션 개발자가 Spring container에게 어플리케이션의 객체를 인스턴스화, 구성 및 조립하도록 지시하는 방법을 나타내며
## This configuration metadata represents how you, as an application developer, tell the Spring container to instantiate, configure, and assemble the objects in your application.

# 전통적으로 간단하고 직관적인 XML 형식으로 제공된다. 덧붙어 이 장에서는 Spring IoC container의 주요 컨셉과 기능을 전달하는데 대부분 사용된다. 
## Configuration metadata is traditionally supplied in a simple and intuitive XML format, which is what most of this chapter uses to convey key concepts and features of the Spring IoC container.

<div class="spring info-wrapper mt-2 pb-2 mb-2">
<i class="fa fa-info-circle icon mr-half mt-1"></i>
<div markdown="1">
# XML 기반 메타데이터가 유일한 구성 메타데이터 형식은 아니다.
## XML-based metadata is not the only allowed form of configuration metadata.

# 구성 메타데이터가 실제로 작성되는 형식에서 Spring IoC container 자체는 완전히 분리된다. 
## The Spring IoC container itself is totally decoupled from the format in which this configuration metadata is actually written.
 
# 요즘 많은 개발자들이 Spring 어플리케이션을 만들기 위해 [Java 기반 구성](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java)을 선택한다.
## These days, many developers choose Java-based configuration for their Spring applications.
</div>
</div>

# Spring container에서 다른 메타데이터 형식을 사용하는 방법은 다음과 같다.
## For information about using other forms of metadata with the Spring container, see:

- # [Annotattion 기반 구성](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-annotation-config): `Spring 2.5`에서 annotation 기반 구성 메타데이터 지원을 도입했다.  
## Annotation-based configuration: Spring 2.5 introduced support for annotation-based configuration metadata.
- # [Java 기반 구성](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java): `Spring 3.0`부터 Spring JavaConfig 프로젝트에서 제공하는 많은 기능이 핵심 Spring Framework의 일부가 되면서  
## Java-based configuration: Starting with Spring 3.0, many features provided by the Spring JavaConfig project became part of the core Spring Framework. 
# XML 대신 Java를 사용하여 어플리케이션 클래스 외부에 Bean을 정의할 수 있게 되었다.
## Thus, you can define beans external to your application classes by using Java rather than XML files.
# 이러한 새로운 기능을 사용하려면 [`@Configuration`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html){:target="_blan"}, [`@Bean`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html){:target="_blan"}, [`@Import`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Import.html){:target="_blan"}, [`@DependsOn`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/DependsOn.html){:target="_blan"} annotation을 참고. 
## To use these new features, see the `@Configuration`, `@Bean`, `@Import`, and `@DependsOn` annotations.


</div>
</section>

<blockquote markdown="1">
**Reference**
- [원문](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#spring-core){:target="_blank"}

<br/>
**Footnote**
<p id="footnote-1" class="footnote-desc">
    <strong class="number">1.</strong> 소량의 XML 구성에 의해 제공됨
</p>
<p id="footnote-2" class="footnote-desc" markdown="1">
    <strong class="number">2.</strong> [웹 어플리케이션을 위한 ApplicationContext 인스턴스화 참조](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#context-create)
</p>
</blockquote>

<script type="text/javascript" src="{{ '/static/script/accordion.js' | relative_url }}"></script>
