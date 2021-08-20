---
layout: post-detail
title: "Spring :: 한 줄씩 읽는 Documentation [core.IoC container]"
date: "2021-08-20 12:13:00 +0900"
categories: xyz+
tags: spring framework documentation core Ioc container translation 5.3.9v
thumbnail: 'https://spring.io/images/spring-logo-9146a4d3298760c2e7e49595184e1975.svg'
---

<section class="translation-article-wrapper mt-6" markdown="1">
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

<!-- section content start -->
<div markdown="1" class="contents">
# 이 장에서는 Spring Framwork가 구현한 `IoC` 원칙에 대해 다룬다.
## This chapter covers the Spring Framework implementation of the Inversion of Control (IoC) principle. 
<br/>

# `IoC`는 의존성 주입(DI)이라 하기도 한다.
## IoC is also known as dependency injection (DI).
 
# `IoC`는 팩토리 메소드에서 생성되거나 반환된 객체의 인스턴스에 선언된 속성이나 객체의 생성자 인자, 팩토리 메소드의 인자를 통해서 의존성을 정의하는 프로세스를 말하며
## It is a process whereby objects define their dependencies (that is, the other objects they work with) only through constructor arguments, arguments to a factory method, or properties that are set on the object instance after it is constructed or returned from a factory method. 

# 이렇게 정의된 의존성은 `Bean`을 생성할 때 주입된다. 
## The container then injects those dependencies when it creates the bean. 

# 이 프로세스는 기본적으로 클래스 직접 구성 또는 `Service Locator pattern`<a href="#footnote-1" class="footnote">[1]</a>과 같은 매커니즘을 사용하여 `Bean` 자체의 인스턴스화나 의존성의 위치를 제어한다.
## This process is fundamentally the inverse (hence the name, Inversion of Control) of the bean itself controlling the instantiation or location of its dependencies by using direct construction of classes or a mechanism such as the Service Locator pattern.
<br/>


# Spring Framework의 `IoC container`의 기초가 되는 패키지는 `org.springframework.beans`와 `org.springframework.context`이다.
## The `org.springframework.beans` and `org.springframework.context` packages are the basis for Spring Framework’s IoC container. 

# [`BeanFactory`](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/beans/factory/BeanFactory.html){:target="_blank"}<a href="#footnote-2" class="footnote">[2]</a> 인터페이스는 모든 유형의 객체를 관리할 수 있는 고급 환경 설정 매커니즘을 제공하며
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

# 간단히 말해서 `BeanFactory`는 configuration 프레임워크와 기본 기능을 제공하고 `ApplicationContext`는 더 많은 엔터프라이즈별 기능을 추가 제공한다.
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

# `Bean`과 이들 간의 의존성은 configuration 메타데이터에 반영된다.
## Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.
</div>
<!-- // section contents end -->
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **1.2. Container 개요**
## 1.2. Container Overview
</div>

<!-- section content start -->
<div markdown="1" class="contents">
# `ApplicationContext`<a href="#footnote-3" class="footnote">[3]</a> 인터페이스는 Spring `IoC container`를 나타내고 `Bean`의 인스턴스화, 구성 및 조립을 담당한다.
## The `org.springframework.context.ApplicationContext` interface represents the Spring IoC container and is responsible for instantiating, configuring, and assembling the beans.
 
# 또한 configuration 메타데이터를 읽어 인스턴스화, 구성 및 조립할 객체에 대한 지침을 가져온다.
## The container gets its instructions on what objects to instantiate, configure, and assemble by reading configuration metadata.
<br/>

# configuration 메타데이터는 XML이나 Java annotation 또는 코드로 표시되고
## The configuration metadata is represented in XML, Java annotations, or Java code.

# 어플리케이션을 구성하는 객체 간의 풍부한 상호 의존성을 표현할 수 있게 해준다.
## It lets you express the objects that compose your application and the rich interdependencies between those objects.
<br/>

# `ApplicationContext` 인터페이스의 구현체 중 몇 가지는 Spring과 함께 제공되며
## Several implementations of the `ApplicationContext` interface are supplied with Spring.

# 일반적으로 독립 실행형 어플리케이션에서는 [ClassPathXmlApplicationContext](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/ClassPathXmlApplicationContext.html){:target="_blank"}이나 [FileSystemXmlApplicationContext](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/FileSystemXmlApplicationContext.html){:target="_blank"}를 사용한다.
## In stand-alone applications, it is common to create an instance of `ClassPathXmlApplicationContext` or `FileSystemXmlApplicationContext`.

# configuration 메타데이터를 정의하기 위한 형식으로는 전통 형식인 XML과 Java annotation이나 코드로 선언하는 부가적인 형식<a href="#footnote-4" class="footnote">[4]</a>이 있다. 
## While XML has been the traditional format for defining configuration metadata, you can instruct the container to use Java annotations or code as the metadata format by providing a small amount of XML configuration to declaratively enable support for these additional metadata formats.
<br/>

# 대부분의 어플리케이션 시나리오에서는 Spring `IoC container`에 정의된 객체를 명시적인 코드로 직접 인스턴스화하지 않아도 된다. 
## In most application scenarios, explicit user code is not required to instantiate one or more instances of a Spring IoC container.

# 예를 들어 일반적으로 웹 어플리케이션 시나리오에서는 어플리케이션의 `web.xml`에 상용구 코드 8줄 정도만 작성해도 충분히 `ApplicationContext`를 인스턴스화할 수 있다.<a href="#footnote-5" class="footnote">[5]</a>
## For example, in a web application scenario, a simple eight (or so) lines of boilerplate web descriptor XML in the web.xml file of the application typically suffices (see Convenient ApplicationContext Instantiation for Web Applications).

# [STS](https://spring.io/tools){:target="_blank"}(Eclipse 기반 개발 환경)를 사용하는 경우에는 상용구를 사용한 설정을 몇 번의 클릭이나 키 입력으로 손쉽게 할 수 있다.
## If you use the Spring Tools for Eclipse (an Eclipse-powered development environment), you can easily create this boilerplate configuration with a few mouse clicks or keystrokes.
<br/>

# 다음 다이어그램은 Spring이 작동하는 방식을 개괄적으로 보여준다.
## The following diagram shows a high-level view of how Spring works. 

![container magic](https://docs.spring.io/spring-framework/docs/current/reference/html/images/container-magic.png){:class="thumbnail mt-2 pa-1"} 
<p class="details-description">Figure 1. The Spring IoC container</p>
<br/>

# 시스템 또는 어플리케이션은 어플리케이션의 클래스가 configuration 메타데이터와 결합되어 `ApplicationContext`가 생성되고 초기화된 후에야 완전히 구성되고 실행이 가능해진다.
## Your application classes are combined with configuration metadata so that, after the `ApplicationContext` is created and initialized, you have a fully configured and executable system or application.
                                
                                                                                                                                                        
<!-- section inner content start -->
<div id="configuration-metadata" markdown="1" class="inner-contents">
# **1.2.1. Configuration 메타데이터**
## 1.2.1. Configuration Metadata
<br/>

# 앞에 있는 다이어그램에서 볼 수 있듯이 Spring `IoC container`는 configuration 메타데이터 형식을 사용한다.
## As the preceding diagram shows, the Spring IoC container consumes a form of configuration metadata. 
<br/>

# configuration 메타데이터는 개발자가 Spring `IoC container`에게 어플리케이션의 객체를 인스턴스화, 구성 및 조립하도록 지시하는 방법을 말하며
## This configuration metadata represents how you, as an application developer, tell the Spring container to instantiate, configure, and assemble the objects in your application.

# 전통적으로 간단하고 직관적인 XML 형식으로 제공된다. 덧붙어 이 장에서는 대부분 Spring `IoC container`의 주요 컨셉과 기능을 전달하는 데 사용된다. 
## Configuration metadata is traditionally supplied in a simple and intuitive XML format, which is what most of this chapter uses to convey key concepts and features of the Spring IoC container.

<!-- info wrapper start -->
<div class="spring info-wrapper mt-2">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# XML 기반 메타데이터가 유일한 configuration 메타데이터 형식은 아니다.
## XML-based metadata is not the only allowed form of configuration metadata.

# Spring **IoC container** 자체는 실제로 작성되는 configuration 메타데이터 형식과는 별개다. 
## The Spring IoC container itself is totally decoupled from the format in which this configuration metadata is actually written.
 
# 요즘 많은 개발자들은 Spring 어플리케이션을 만드는 데에 [Java 기반 환경 설정](#java-based-container-configuration)을 사용한다.
## These days, many developers choose Java-based configuration for their Spring applications.
</div>
</div>
<!-- // info wrapper end -->
<br/>

# XML이 아닌 다른 메타데이터 형식을 사용하는 방법은 다음과 같다.
## For information about using other forms of metadata with the Spring container, see:

- # [Annotation](#annotation-based-container-configuration): `Spring 2.5`에서 annotation 기반 configuration 메타데이터 지원을 도입했다.  
## Annotation-based configuration: Spring 2.5 introduced support for annotation-based configuration metadata.
- # [Java](#java-based-container-configuration): `Spring 3.0`부터는 Spring JavaConfig 프로젝트에서 제공하는 많은 기능이 핵심 Spring Framework의 일부가 되면서  
## Java-based configuration: Starting with Spring 3.0, many features provided by the Spring JavaConfig project became part of the core Spring Framework. 

# XML 대신 Java를 사용하여 `Bean`을 정의할 수 있게 되었다.
## Thus, you can define beans external to your application classes by using Java rather than XML files.

# 이러한 기능을 사용하려면 [`@Configuration`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html){:target="_blank"}, [`@Bean`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html){:target="_blank"}, [`@Import`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Import.html){:target="_blank"}, [`@DependsOn`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/DependsOn.html){:target="_blank"} 참고. 
## To use these new features, see the `@Configuration`, `@Bean`, `@Import`, and `@DependsOn` annotations.
<br/>

# Spring configuration은 일반적으로 하나 이상의 `Bean`에 대한 정의로 구성된다.   
## Spring configuration consists of at least one and typically more than one bean definition that the container must manage. 

# XML을 기반으로 하는 configuration 메타데이터는 `<beans/>` 요소 내부의 `<bean/>` 요소로 
## XML-based configuration metadata configures these beans as `<bean/>` elements inside a top-level `<beans/>` element.

# Java annotation을 기반으로 하는 configuration 메타데이터는 `@Configuration` 클래스 내부의 `@Bean` 메소드를 사용하여 `Bean`을 정의한다. 
## Java configuration typically uses @Bean-annotated methods within a @Configuration class.
<br/>

# 이렇게 정의된 `Bean`은 어플리케이션을 구성하는 실제 객체가 된다.
## These bean definitions correspond to the actual objects that make up your application.

# 일반적으로 configuration에는 서비스 계층 객체, 데이터 액세스 객체(DAO), presentation 객체<a href="#footnote-6" class="footnote">[6]</a>, infrastructure 객체<a href="#footnote-7" class="footnote">[7]</a>를 정의하며 
## Typically, you define service layer objects, data access objects (DAOs), presentation objects such as Struts Action instances, infrastructure objects such as Hibernate SessionFactories, JMS Queues, and so forth. 

# 보통 도메인 객체를 만들고 로드하는 것은 DAO 및 비즈니스 로직의 책임이기 때문에 세분화된 도메인 객체는 정의하지 않는다. 
## Typically, one does not configure fine-grained domain objects in the container, because it is usually the responsibility of DAOs and business logic to create and load domain objects. 
<br/>

# 하지만 AspectJ와 Spring의 통합을 사용하여 `IoC container`의 제어 밖에서 생성된 객체를 정의할 수도 있다. 
## However, you can use Spring’s integration with AspectJ to configure objects that have been created outside the control of an IoC container.

# ([AspectJ를 사용하여 Spring으로 도메인 객체 의존성 주입](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-atconfigurable){:target="_blank"} 참조)
## See Using AspectJ to dependency-inject domain objects with Spring.
<br/>

# XML 기반 configuration 메타데이터의 기본 구조는 다음 예시와 같다.
## The following example shows the basic structure of XML-based configuration metadata:

<div class="mt-2"></div>

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
            https://www.springframework.org/schema/beans/spring-beans.xsd">
    
        <bean id="..." class="...">  
            <!-- collaborators and configuration for this bean go here -->
        </bean>
    
        <!-- more bean definitions go here -->
    
    </beans>
```

<div class="mt-2"></div>

- `<bean />` 필수 속성
    - # `id`: 개별 `Bean` 정의의 식별자   
      ## The id attribute is a string that identifies the individual bean definition.
    - # `class`: `Bean`의 클래스 타입을 정의 & full classname을 사용   
      ## The class attribute defines the type of the bean and uses the fully qualified classname.


# `id` 속성의 값은 객체를 나타내며
## The value of the id attribute refers to collaborating objects.
 
# 객체를 참조하기 위한 XML은 위 예시에 포함되어 있지 않다. 
## The XML for referring to collaborating objects is not shown in this example. 

# 자세한 내용은 [의존성](#dependencies) 참조.
## See Dependencies for more information.
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="instantiating-a-container" markdown="1" class="inner-contents">
# **1.2.2. Container 인스턴스화** 
## 1.2.2. Instantiating a Container
<br/>

# `ApplicationContext` 생성자가 인자로 받는 경로 값은 container가 다양한 외부 리소스(로컬 파일 시스템, Java `CLASSPATH` 등)에서 configuration 메타데이터를 로드할 수 있도록 하는 리소스 문자열이다.  
## The location path or paths supplied to an `ApplicationContext` constructor are resource strings that let the container load configuration metadata from a variety of external resources, such as the local file system, the Java `CLASSPATH`, and so on.

<div class="mt-2"></div>

```java
    ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");
```

<!-- info wrapper start -->
<div class="spring info-wrapper mt-2">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# Spring의 **IoC conatiner**에 대해 배우고 나면 URI 형식의 경로를 사용해서 InputStream을 편리하게 읽어 올 수 있는 메커니즘을 제공하는 Spring의 [**Resource**](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources){:target="_blank"} 추상화에 대해 더 알고 싶어 할 수도 있다. 
## After you learn about Spring’s IoC container, you may want to know more about Spring’s **Resource** abstraction (as described in Resources), which provides a convenient mechanism for reading an InputStream from locations defined in a URI syntax.

# **Resource** 경로는 어플리케이션 컨텍스트를 구성하는 데 사용된다. ([Application Context와 Resource Path](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-app-ctx){:target="_blank"} 참조)
## In particular, **Resource** paths are used to construct applications contexts, as described in Application Contexts and Resource Paths.
</div>
</div>
<!-- // info wrapper end -->

<div class="mt-2"></div>

# 다음은 서비스 계층 객체 configuration(`services.xml`) 예시다.
## The following example shows the service layer objects (`services.xml`) configuration file:

<div class="mt-2"></div>

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
            https://www.springframework.org/schema/beans/spring-beans.xsd">
    
        <!-- services -->
    
        <bean id="petStore" class="org.springframework.samples.jpetstore.services.PetStoreServiceImpl">
            <property name="accountDao" ref="accountDao"/>
            <property name="itemDao" ref="itemDao"/>
            <!-- additional collaborators and configuration for this bean go here -->
        </bean>
    
        <!-- more bean definitions for services go here -->
    
    </beans>
```
<div class="mt-2"></div>

# 다음은 데이터 액세스 객체 configuration(`daos.xml`) 예시다.
## The following example shows the data access objects `daos.xml` file:

<div class="mt-2"></div>

```xml
    <?xml version="1.0" encoding="UTF-8"?>
    <beans xmlns="http://www.springframework.org/schema/beans"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.springframework.org/schema/beans
            https://www.springframework.org/schema/beans/spring-beans.xsd">
    
        <bean id="accountDao"
            class="org.springframework.samples.jpetstore.dao.jpa.JpaAccountDao">
            <!-- additional collaborators and configuration for this bean go here -->
        </bean>
    
        <bean id="itemDao" class="org.springframework.samples.jpetstore.dao.jpa.JpaItemDao">
            <!-- additional collaborators and configuration for this bean go here -->
        </bean>
    
        <!-- more bean definitions for data access objects go here -->
    
    </beans>
```

# 앞의 예시에서 서비스 계층은 `PetStoreServiceImpl` 클래스와 데이터 액세스 객체<a href="#footnote-8" class="footnote">[8]</a>인 `JpaAccountDao`와 `JpaItemDao `두 개로 구성된다. 
## In the preceding example, the service layer consists of the `PetStoreServiceImpl` class and two data access objects of the types `JpaAccountDao` and `JpaItemDao` (based on the JPA Object-Relational Mapping standard).
<br/>

# `<property />`요소의 `name` 속성은 해당 `Bean`에서 사용할 속성의 이름을 나타내고 `ref` 속성은 다른 `Bean` 정의의 `id`를 참조하며 
## The `property name` element refers to the name of the JavaBean property, and the `ref` element refers to the name of another bean definition.

# `<bean />` 요소의 `id`와 `<property />` 요소의 `ref` 속성으로 객체 간의 의존성을 나타낸다.
## This linkage between id and ref elements expresses the dependency between collaborating objects.

# 객체의 의존성을 설정하는 방법에 대한 더 자세한 내용은 [의존성](#dependencies) 참조.
## For details of configuring an object’s dependencies, see Dependencies.
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="composing-xml-based-configuration-metadata" markdown="1" class="inner-contents">
# **XML 기반 configuration 메타데이터 구성**
## Composing XML-based Configuration Metadata
<br/>

# XML을 여러 개로 나누어 `Bean`을 정의하는 것은 유용할 수 있다. 
## It can be useful to have bean definitions span multiple XML files.

# 이렇게 하면 각각의 XML configuration은 아키텍처의 논리적 계층 또는 모듈을 나타낼 수 있으며
## Often, each individual XML configuration file represents a logical layer or module in your architecture.

# 분리된 XML configuration에 있는 `Bean` 정의는 `ApplicationContext` 생성자를 통해 전부 로드할 수 있다. 
## You can use the application context constructor to load bean definitions from all these XML fragments.
<br/>

# `ApplicationContext`는 [1.2.2. Container 인스턴스화](#instantiating-a-container)에서 보여준 것처럼 생성자를 통해 하나 이상의 `Resource` 경로를 인자로 받거나
## This constructor takes multiple `Resource` locations, as was shown in the previous section.

# `<import/>` 요소를 사용하여 다른 리소스 경로에서 `Bean` 정의를 가져온다. 
## Alternatively, use one or more occurrences of the `<import/>` element to load bean definitions from another file or files.
<br/>

# 다음은 `<import/>` 요소를 사용하는 예시다. 
## The following example shows how to do so:

<div class="mt-2"></div>

```xml
    <beans>
        <import resource="services.xml"/>
        <import resource="resources/messageSource.xml"/>
        <import resource="/resources/themeSource.xml"/>
    
        <bean id="bean1" class="..."/>
        <bean id="bean2" class="..."/>
    </beans>
```

<div class="mt-2"></div>

# 앞의 예시에서 `Bean` 정의는 `services.xml`, `messageSource.xml`, `themeSource.xml` 세 개의 리소스 경로에서 로드된다.
## In the preceding example, external bean definitions are loaded from three files: `services.xml`, `messageSource.xml`, and `themeSource.xml`.
<br/>

# `<import />` 요소에 정의된 경로는 전부 상대 경로이기 때문에 `service.xml`은 해당 configuration 파일과 동일한 디렉토리 또는 classpath애 있어야 하고 `messageSource.xml`과 `themeSource.xml`은 해당 configuration 하위 디렉토리인 `resources` 디렉토리 안에 있어야 한다.
## All location paths are relative to the definition file doing the importing, so `services.xml` must be in the same directory or classpath location as the file doing the importing, while `messageSource.xml` and `themeSource.xml` must be in a resources location below the location of the importing file.

# 경로 문자열에서 가장 앞의 "/"는 무시되므로
## As you can see, a leading slash is ignored.
 
# 사용하지 않는 것을 권장한다.  
## However, given that these paths are relative, it is better form not to use the slash at all.

# 리소스 경로로 가져오는 `Bean` 정의는 Spring 스키마에 따른 유효한 XML `Bean` 정의여야만 한다.
## The contents of the files being imported, including the top level `<beans/>` element, must be valid XML bean definitions, according to the Spring Schema.

<!-- info wrapper start -->
<div class="spring info-wrapper mt-2">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# 상대 경로 "../"를 사용하여 상위 디렉토리에 있는 파일을 참조하는 것은 가능하지만  
## It is possible, but not recommended, to reference files in parent directories using a relative "../" path.

# 현재 어플리케이션 외부에 있는 파일에 의존성이 생기기 때문에 권장하지는 않는다.
## Doing so creates a dependency on a file that is outside the current application.

# 특히 현재 경로에서 "가장 가까운" classpath root를 선택한 다음 상위 디렉토리를 찾는 **classpath:URL**(예: classpath:../services.xml)는 더더욱 권장하지 않는다.
## In particular, this reference is not recommended for classpath: URLs (for example, classpath:../services.xml), where the runtime resolution process chooses the “nearest” classpath root and then looks into its parent directory. 

# Classpath 구성의 변경으로 인해 다른 잘못된 디렉토리가 선택될 수 있다.
## Classpath configuration changes may lead to the choice of a different, incorrect directory.

# 상대 경로 대신 정규화된 리소스 경로를 사용할 수도 있지만(예: file:C:/config/services.xml 또는 classpath:/config/services.xml)
## You can always use fully qualified resource locations instead of relative paths: for example, file:C:/config/services.xml or classpath:/config/services.xml.

# 이렇게 할 경우 어플리케이션 configuration이 특정 절대 경로에 연결된다는 점에 유의해야 한다. 
## However, be aware that you are coupling your application’s configuration to specific absolute locations.

# 일반적으로 런타임 시 JVM 시스템 속성에 대해 확인되는 "${… }"를 통해 절대 경로에 대한 참조를 유지하는 것이 좋다.
## It is generally preferable to keep an indirection for such absolute locations — for example, through "${…​}" placeholders that are resolved against JVM system properties at runtime.
</div>
</div>
<!-- // info wrapper end -->
<br/>

# 네임스페이스 자체는 가져오기 지시문 기능을 제공한다.
## The namespace itself provides the import directive feature.

# 게다가 일반적인 `Bean` 정의 이상의 추가 configuration 기능을 제공하는 XML 네임스페이스(예: 컨텍스트 및 util 네임스페이스)를 선택해서 사용할 수도 있다. 
## Further configuration features beyond plain bean definitions are available in a selection of XML namespaces provided by Spring — for example, the context and util namespaces.
</div>
<!-- // section inner contents end -->

<!-- section inner content start -->
<div markdown="1" class="inner-contents">
# **Groovy Bean 정의 DSL**
## The Groovy Bean Definition DSL
<br/>

# Grails 프레임워크로 알려진 Groovy `Bean` 정의 DSL으로도 configuration 메타데이터에 `Bean` 정의를 할 수 있으며
## As a further example for externalized configuration metadata, bean definitions can also be expressed in Spring’s Groovy Bean Definition DSL, as known from the Grails framework.

# 이 경우 ".groovy" 파일으로 만들어진다. 다음은 Groovy `Bean` DSL configuration 예시다.
## Typically, such configuration live in a ".groovy" file with the structure shown in the following example:
<br/>

```groovy
    beans {
        dataSource(BasicDataSource) {
            driverClassName = "org.hsqldb.jdbcDriver"
            url = "jdbc:hsqldb:mem:grailsDB"
            username = "sa"
            password = ""
            settings = [mynew:"setting"]
        }
        sessionFactory(SessionFactory) {
            dataSource = dataSource
        }
        myService(MyService) {
            nestedBean = { AnotherBean bean ->
                dataSource = dataSource
            }
        }
    }
```
<br/>

# 이 스타일은 XML `Bean` 정의 형태와 유사하며 Spring의 XML 네임스페이스도 지원한다.
## This configuration style is largely equivalent to XML bean definitions and even supports Spring’s XML configuration namespaces.

# 또한 `importBeans` 지시문을 통해 XML 다른 파일의 `Bean` 정의를 가져올 수도 있다.
## It also allows for importing XML bean definition files through an importBeans directive.
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div markdown="1" class="inner-contents">
# **1.2.3. Container 사용**
## 1.2.3. Using the Container
<br/>

# `ApplicationContext`는 서로 다른 `Bean`의 레지스트리와 의존성을 유지할 수 있는 고급 팩토리 인터페이스로
## The `ApplicationContext` is the interface for an advanced factory capable of maintaining a registry of different beans and their dependencies.

# 내부 메소드 `T getBean(String name, Class<T> requiredType)`를 사용하여 원하는 클래스 타입의 `Bean` 인스턴스를 찾을 수 있다.
## By using the method `T getBean(String name, Class<T> requiredType)`, you can retrieve instances of your beans.
<br/>

# 다음 예시와 같이 `ApplicationContext`를 사용하여 XML configuration의 `Bean` 정의를 읽고 액세스할 수 있다.
## The `ApplicationContext` lets you read bean definitions and access them, as the following example shows:

<div class="mt-2"></div>

```java
    // create and configure beans
    ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");
    
    // retrieve configured instance
    PetStoreService service = context.getBean("petStore", PetStoreService.class);
    
    // use configured instance
    List<String> userList = service.getUsernameList();
```

# Groovy configuration을 사용하는 경우에는 XML configuration을 사용하는 경우와 
## With Groovy configuration, bootstrapping looks very similar.

# 파일을 인식하는 컨텍스트 구현 클래스는 다르지만 매우 유사한 형태로 `ApplicationContext`를 사용할 수 있다. 
## It has a different context implementation class which is Groovy-aware (but also understands XML bean definitions).

# 다음은 Groovy configuration을 사용한 경우의 예시다.
## The following example shows Groovy configuration:

<div class="mt-2"></div>

```java
    ApplicationContext context = new GenericGroovyApplicationContext("services.groovy", "daos.groovy");
```
<br/>

# `GenericApplicationContext`는 `Bean`정의를 가져오는 책임을 `XmlBeanDefinitionReader`와 같은 리더에 위임하고 이러한 리더와 결합하여 사용한다. 예시는 다음과 같다.   
## The most flexible variant is `GenericApplicationContext` in combination with reader delegates — for example, with `XmlBeanDefinitionReader` for XML files, as the following example shows:

<div class="mt-2"></div>

```java
    GenericApplicationContext context = new GenericApplicationContext();
    new XmlBeanDefinitionReader(context).loadBeanDefinitions("services.xml", "daos.xml");
    context.refresh();
```

<div class="mt-2"></div>

# 다음 예시와 같이 리더로 `GroovyBeanDefinitionReader`를 사용할 수도있다.
## You can also use the `GroovyBeanDefinitionReader` for Groovy files, as the following example shows:

<div class="mt-2"></div>

```java
    GenericApplicationContext context = new GenericApplicationContext();
    new GroovyBeanDefinitionReader(context).loadBeanDefinitions("services.groovy", "daos.groovy");
    context.refresh();
```

<div class="mt-2"></div>

# 이렇게 하면 다양한 configuration에서 `Bean` 정의를 읽고 동일한 `ApplicationContext`에 리더를 알맞게 짝지을 수 있다.
## You can mix and match such reader delegates on the same `ApplicationContext`, reading bean definitions from diverse configuration sources.
<br/>

# `ApplicationContext`의 `getBean()`메소드를 통해 원하는 `Bean` 인스턴스를 찾을 수 있다.
## You can then use `getBean` to retrieve instances of your beans. 

# 이외에도 `ApplicationContext` 인터페이스는 `Bean`을 찾기 위한 몇몇 다른 메소드를 가지고 있지만 어플리케이션 코드에서 이러한 메소드는 사용하지 않는 게 이상적이다. 
## The `ApplicationContext` interface has a few other methods for retrieving beans, but, ideally, your application code should never use them.

# 그렇기 때문에 실제로 어플리케이션 코드는 Spring API에 전혀 의존하지 않게 된다.
## Indeed, your application code should have no calls to the `getBean()` method at all and thus have no dependency on Spring APIs at all.

# 예를 들어 웹 프레임워크와 Spring의 통합은 컨트롤러 및 JSF 관리 `Bean`과 같은 웹 프레임워크 컴포넌트에 대한 의존성 주입을 제공하여 메타데이터(예: autowiring annotation)를 통해 특정 `Bean`에 대한 의존성을 선언할 수 있도록 한다.
## For example, Spring’s integration with web frameworks provides dependency injection for various web framework components such as controllers and JSF-managed beans, letting you declare a dependency on a specific bean through metadata (such as an autowiring annotation).
</div>
<!-- // section inner contents end -->
</div>
<!-- // section contents end -->
</section>




<section class="translation-article-wrapper accordion-wrapper" markdown="1">
<div markdown="1" class="handler">
# **1.3. Bean 개요**
## 1.3. Bean Overview
</div>

<!-- section content start -->
<div markdown="1" class="contents">
#  Spring `IoC container`는 하나 이상의 `Bean`을 관리하고
## A Spring IoC container manages one or more beans.

# `Bean`은 container가 제공하는 configuration 메타데이터를 통해 생성된다. (예: XML `<bean/>` 정의 형식)
## These beans are created with the configuration metadata that you supply to the container (for example, in the form of XML `<bean/>` definitions).
<br/>

# `Bean` 정의는 `BeanDefinition` 객체로 표현되며 이 객체가 포함하는 메타데이터는 다음과 같다.
## Within the container itself, these bean definitions are represented as `BeanDefinition` objects, which contain (among other information) the following metadata:

- # 패키지 클래스 이름: 일반적으로 정의되는 `Bean` 구현 클래스다.
## A package-qualified class name: typically, the actual implementation class of the bean being defined.

- # `Bean` 동작 구성 요소: `Bean`의 scope, 수명 주기 콜백 등 어떻게 동작해야 하는지를 나타낸다.
## Bean behavioral configuration elements, which state how the bean should behave in the container (scope, lifecycle callbacks, and so forth).

- # 다른 `Bean`에 대한 참조: `Bean`이 작업을 수행하는 데 필요한 다른 Bean에 대한 참조다.
## References to other beans that are needed for the bean to do its work.
# 이러한 참조를 협력자 또는 의존성이라고도 한다. 
## These references are also called collaborators or dependencies.

- # 새로 생성된 객체에서 설정할 기타 구성 설정(예: connection 풀을 관리하는 `Bean`에서 사용할 connection 수 또는 풀 크기 제한)
## Other configuration settings to set in the newly created object — for example, the size limit of the pool or the number of connections to use in a bean that manages a connection pool.

# 위와 같은 메타데이터는 각각 `Bean`의 정의를 구성하는 속성으로 변환되며 
## This metadata translates to a set of properties that make up each bean definition. 

# 자세한 내용은 다음 표와 같다.
## The following table describes these properties:

<table style="width:auto;" class="mt-2">
    <colgroup>
    </colgroup>
    <thead>
        <tr>
            <th>Property</th>
            <th>Explained in…​</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Class</td>
            <td>
                <a href="#instantiating-beans">Instantiating Beans</a>
            </td>
        </tr>
        <tr>
            <td>Name</td>
            <td>
                <a href="#naming-beans">Naming Beans</a>
            </td>
        </tr>
        <tr>
            <td>Scope</td>
            <td>
                <a href="#bean-scopes">Bean Scopes</a>
            </td>
        </tr>
        <tr>
            <td>Constructor arguments</td>
            <td>
                <a href="#dependency-injection">Dependency Injection</a>
            </td>
        </tr>
        <tr>
            <td>Properties</td>
            <td>
                <a href="#dependency-injection">Dependency Injection</a>
            </td>
        </tr>
        <tr>
            <td>Autowiring mode</td>
            <td>
                <a href="#autowiring-collaborators ">Autowiring Collaborators</a>
            </td>
        </tr>
        <tr>
            <td>Lazy initialization mode</td>
            <td>
                <a href="#lazy-initialized-beans">Lazy-initialized Beans</a>
            </td>
        </tr>
        <tr>
            <td>Initialization method</td>
            <td>
                <a href="#initialization-callbacks">Initialization Callbacks</a>
            </td>
        </tr>
        <tr>
            <td>Destruction method</td>
            <td>
                <a href="#destruction-callbacks">Destruction Callbacks</a>
            </td>
        </tr>
    </tbody>
</table>
<p class="details-description">Table 1. The bean definition</p>  
<br/>

# `ApplicationContext` 구현은 특정 `Bean`을 생성하는 방법에 대한 정보를 포함하는 `Bean` 정의 외에 container 외부에서 사용자에 의해 생성되는 객체도 등록할 수 있게 해준다.
## In addition to bean definitions that contain information on how to create a specific bean, the `ApplicationContext` implementations also permit the registration of existing objects that are created outside the container (by users). 

# `ApplicationContext`의 `getBeanFactory()` 메소드를 통해 얻은 `DefaultListableBeanFactory`(BeanFactory 구현체)의
## This is done by accessing the ApplicationContext’s BeanFactory through the `getBeanFactory()` method, which returns the BeanFactory DefaultListableBeanFactory implementation. 

# `registerSingleton(..)` 및 `registerBeanDefinition(..)` 메소드로 사용자에 의해 생성되는 객체를 등록할 수 있다.
## `DefaultListableBeanFactory` supports this registration through the `registerSingleton(..)` and `registerBeanDefinition(..)` methods.

# 하지만 일반적으로는 `Bean` 정의 메타데이터를 통해서 `Bean`을 정의한다.
## However, typical applications work solely with beans defined through regular bean definition metadata.

<!-- info wrapper start -->
<div class="spring info-wrapper mt-2">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# container가 autowiring 및 내부 검사 과정에서 이에 대해 제대로 판단하기 위해서는 **Bean** 메타데이터 및 수동으로 제공되는 싱글톤 인스턴스가 가능한 한 빨리 등록되어야 한다.
## Bean metadata and manually supplied singleton instances need to be registered as early as possible, in order for the container to properly reason about them during autowiring and other introspection steps.

# 기존 메타데이터 및 싱글톤 인스턴스를 재정의하는 것은 어느 정도 지원된다. 하지만 런타임 시 새로운 **Bean**을 등록하는 것은 동시 액세스 예외 발생, **Bean** container 불일치 상태로 이어질 수 있어 공식적으로는 지원되지 않는다.
## While overriding existing metadata and existing singleton instances is supported to some degree, the registration of new beans at runtime (concurrently with live access to the factory) is not officially supported and may lead to concurrent access exceptions, inconsistent state in the bean container, or both.
</div>
</div>
<!-- // info wrapper end -->


<!-- section inner content start -->
<div id="naming-beans" markdown="1" class="inner-contents">
# **1.3.1.Bean 이름 지정하기**
## 1.3.1. Naming Beans
<br/>

# 모든 `Bean`은 하나 이상의 식별자를 가진다.
## Every bean has one or more identifiers.

# `Bean`에 대한 식별자는 `Bean`을 호스팅하는 container에서 고유해야한다.
## These identifiers must be unique within the container that hosts the bean.
<br/>

# 보통 `Bean`에 대한 식별자는 하나뿐이지만.
## A bean usually has only one identifier.

# 한개 이상이 필요한 경우에 추가된 식별자는 별칭으로 간주될 수 있다.
## However, if it requires more than one, the extra ones can be considered aliases.
<br/>

# XML 기반 configuration 메타데이터인 경우 `id`나 `name` 속성을 사용해서 `Bean`에 대한 식별자를 지정한다. 
## In XML-based configuration metadata, you use the `id` attribute, the `name` attribute, or both to specify the bean identifiers.

# id 속성을 사용하면 정확히 하나의 id를 지정할 수 있습니다. 
## The id attribute lets you specify exactly one id. 

# 일반적으로 이러한 이름은 영숫자('myBean', 'someService' 등)이지만 특수 문자도 포함할 수 있습니다.  
## Conventionally, these names are alphanumeric ('myBean', 'someService', etc.), but they can contain special characters as well.

# 빈에 대한 다른 별칭을 도입하려는 경우 쉼표(,), 세미콜론(;) 또는 공백으로 구분하여 이름 속성에 지정할 수도 있습니다.
## If you want to introduce other aliases for the bean, you can also specify them in the name attribute, separated by a comma (,), semicolon (;), or white space.

# 역사적 참고로, Spring 3.1 이전 버전에서 id 속성은 가능한 문자를 제한하는 xsd:ID 유형으로 정의되었습니다.  
## As a historical note, in versions prior to Spring 3.1, the id attribute was defined as an xsd:ID type, which constrained possible characters.

# 3.1부터는 xsd:string 형식으로 정의됩니다.
## As of 3.1, it is defined as an xsd:string type.

# Bean id 고유성은 더 이상 XML 파서가 아니지만 컨테이너에 의해 여전히 적용된다는 점에 유의하십시오.  
## Note that bean id uniqueness is still enforced by the container, though no longer by XML parsers.

# Bean의 이름이나 ID를 제공할 필요가 없습니다.
## You are not required to supply a name or an id for a bean.

# 이름이나 ID를 명시적으로 제공하지 않으면 컨테이너는 해당 빈에 대해 고유한 이름을 생성합니다. 
## If you do not supply a name or id explicitly, the container generates a unique name for that bean.

# 그러나 ref 요소 또는 Service Locator 스타일 조회를 사용하여 이름으로 해당 빈을 참조하려면 이름을 제공해야 합니다.
## However, if you want to refer to that bean by name, through the use of the ref element or a Service Locator style lookup, you must provide a name.

# 이름을 제공하지 않는 동기는 내부 빈 및 자동 연결 공동 작업자 사용과 관련이 있습니다.  
## Motivations for not supplying a name are related to using inner beans and autowiring collaborators.

<!-- guide wrapper start -->
<div class="spring guide-wrapper mt-2 mb-2" markdown="1">
<h1 class="text-center title">Bean 이름 짓기 규칙</h1>
<h2 class="text-center">Bean Naming Conventions</h2> 
# 규칙은 빈의 이름을 지정할 때 인스턴스 필드 이름에 대한 표준 Java 규칙을 사용하는 것입니다.
## The convention is to use the standard Java convention for instance field names when naming beans.

# 즉, 빈 이름은 소문자로 시작하고 거기에서 카멜 케이스입니다.
## That is, bean names start with a lowercase letter and are camel-cased from there.

# 이러한 이름의 예로는 accountManager, accountService, userDao, loginController 등이 있습니다. 
## Examples of such names include accountManager, accountService, userDao, loginController, and so forth.

# 빈의 이름을 일관되게 지정하면 구성을 더 쉽게 읽고 이해할 수 있습니다. 
## Naming beans consistently makes your configuration easier to read and understand.

# 또한 Spring AOP를 사용한다면 이름으로 관련된 빈들의 집합에 어드바이스를 적용할 때 많은 도움이 된다.  
## Also, if you use Spring AOP, it helps a lot when applying advice to a set of beans related by name.
</div>
<!-- // guide wrapper end -->

<!-- info wrapper start -->
<div class="spring info-wrapper">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# 클래스 경로에서 컴포넌트 스캐닝을 통해 Spring은 앞에서 설명한 규칙에 따라 이름 없는 컴포넌트에 대한 빈 이름을 생성합니다. 본질적으로 간단한 클래스 이름을 취하고 초기 문자를 소문자로 바꾸는 것입니다.
## With component scanning in the classpath, Spring generates bean names for unnamed components, following the rules described earlier: essentially, taking the simple class name and turning its initial character to lower-case.

# 그러나 두 개 이상의 문자가 있고 첫 번째와 두 번째 문자가 모두 대문자인 (비정상적) 특수한 경우에는 원래 대소문자가 유지됩니다.  
## However, in the (unusual) special case when there is more than one character and both the first and second characters are upper case, the original casing gets preserved.

# 이것들은 java.beans.Introspector.decapitalize(여기서 Spring이 사용하는)에 의해 정의된 것과 동일한 규칙입니다.
## These are the same rules as defined by java.beans.Introspector.decapitalize (which Spring uses here).
</div>
</div>
<!-- // info wrapper end -->
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div markdown="1" class="inner-contents">
# **Bean 정의 외부에서 Bean 별칭 지정**
## Aliasing a Bean outside the Bean Definition
<br/>

# Bean 정의 자체에서 id 속성에 의해 지정된 최대 하나의 이름과 name 속성에 있는 임의의 수의 다른 이름의 조합을 사용하여 Bean에 대해 둘 이상의 이름을 제공할 수 있습니다. 
## In a bean definition itself, you can supply more than one name for the bean, by using a combination of up to one name specified by the id attribute and any number of other names in the name attribute. 

# 이러한 이름은 동일한 빈에 대한 동일한 별칭이 될 수 있으며 응용 프로그램의 각 구성 요소가 해당 구성 요소 자체에 고유한 빈 이름을 사용하여 공통 종속성을 참조하도록 하는 것과 같은 일부 상황에 유용합니다. 
## These names can be equivalent aliases to the same bean and are useful for some situations, such as letting each component in an application refer to a common dependency by using a bean name that is specific to that component itself.

# 그러나 Bean이 실제로 정의되는 모든 별칭을 지정하는 것이 항상 적절한 것은 아닙니다. 
## Specifying all aliases where the bean is actually defined is not always adequate, however. It is sometimes desirable to introduce an alias for a bean that is defined elsewhere. 

# 다른 곳에서 정의된 빈에 대한 별칭을 도입하는 것이 때때로 바람직합니다. 
## This is commonly the case in large systems where configuration is split amongst each subsystem, with each subsystem having its own set of object definitions. 

# 이는 일반적으로 구성이 각 하위 시스템 간에 분할되고 각 하위 시스템에 고유한 개체 정의 집합이 있는 대규모 시스템의 경우입니다. 
## In XML-based configuration metadata, you can use the <alias/> element to accomplish this. 

# XML 기반 구성 메타데이터에서 요소를 사용하여 이를 수행할 수 있습니다. 다음 예에서는 그렇게 하는 방법을 보여줍니다.
## The following example shows how to do so:

<div class="mt-2"></div>

```xml
    <alias name="fromName" alias="toName"/>
```

# 이 경우 이름이 fromName인 빈(동일한 컨테이너에 있음)은 이 별칭 정의를 사용한 후 toName으로 참조될 수도 있습니다. 
## In this case, a bean (in the same container) named fromName may also, after the use of this alias definition, be referred to as toName.

# 예를 들어, 서브시스템 A에 대한 구성 메타데이터는 서브시스템 A-dataSource라는 이름으로 DataSource를 참조할 수 있습니다. 
## For example, the configuration metadata for subsystem A may refer to a DataSource by the name of subsystemA-dataSource. 

# 서브시스템 B에 대한 구성 메타데이터는 서브시스템B-dataSource라는 이름으로 DataSource를 참조할 수 있습니다. 
## The configuration metadata for subsystem B may refer to a DataSource by the name of subsystemB-dataSource. 

# 이 두 하위 시스템을 모두 사용하는 기본 응용 프로그램을 구성할 때 기본 응용 프로그램은 myApp-dataSource라는 이름으로 DataSource를 참조합니다. 
## When composing the main application that uses both these subsystems, the main application refers to the DataSource by the name of myApp-dataSource. 

# 세 이름이 모두 동일한 개체를 참조하도록 하려면 구성 메타데이터에 다음 별칭 정의를 추가할 수 있습니다.
## To have all three names refer to the same object, you can add the following alias definitions to the configuration metadata:

<div class="mt-2"></div>

```xml
    <alias name="myApp-dataSource" alias="subsystemA-dataSource"/>
    <alias name="myApp-dataSource" alias="subsystemB-dataSource"/>
```

# 이제 각 구성 요소와 기본 응용 프로그램은 고유한 이름을 통해 dataSource를 참조할 수 있고 다른 정의와 충돌하지 않도록 보장되지만(효과적으로 네임스페이스 생성) 동일한 빈을 참조합니다.
## Now each component and the main application can refer to the dataSource through a name that is unique and guaranteed not to clash with any other definition (effectively creating a namespace), yet they refer to the same bean.

<!-- guide wrapper start -->
<div class="spring guide-wrapper mt-2" markdown="1">
<h1 class="text-center title">Java-configuration</h1>
<h2 class="text-center">Java configuration</h2>

# Java 구성을 사용하는 경우 @Bean 주석을 사용하여 별칭을 제공할 수 있습니다. 
## If you use Javaconfiguration, the @Bean annotation can be used to provide aliases.

# 자세한 내용은 @Bean 주석 사용을 참조하십시오.
## See Using the @Bean Annotation for details.
</div>
<!-- // guide wrapper end -->
</div>
<!-- // section inner contents end -->

<!-- section inner content start -->
<div id="instantiating-beans" markdown="1" class="inner-contents">
# **1.3.2. 빈 인스턴스화**
## 1.3.2. Instantiating Beans
<br/>


# 빈 정의는 본질적으로 하나 이상의 객체를 생성하기 위한 레시피입니다.
## A bean definition is essentially a recipe for creating one or more objects. 

# 컨테이너는 요청 시 명명된 빈에 대한 레시피를 살펴보고 해당 빈 정의에 의해 캡슐화된 구성 메타데이터를 사용하여 실제 객체를 생성(또는 획득)합니다.
## The container looks at the recipe for a named bean when asked and uses the configuration metadata encapsulated by that bean definition to create (or acquire) an actual object.

# XML 기반 구성 메타데이터를 사용하는 경우 <bean/> 요소의 class 속성에 인스턴스화할 객체의 유형(또는 클래스)을 지정합니다. 
## If you use XML-based configuration metadata, you specify the type (or class) of object that is to be instantiated in the class attribute of the `<bean/>` element. 

# 이 클래스 속성(내부적으로 BeanDefinition 인스턴스의 Class 속성임)은 일반적으로 필수입니다. 
## This class attribute (which, internally, is a Class property on a BeanDefinition instance) is usually mandatory. 

# (예외의 경우 인스턴스 팩토리 메소드 및 Bean 정의 상속을 사용하여 인스턴스화를 참조하십시오.) 
## (For exceptions, see Instantiation by Using an Instance Factory Method and Bean Definition Inheritance.) 

# 다음 두 가지 방법 중 하나로 Class 속성을 사용할 수 있습니다.
## You can use the Class property in one of two ways:

- # 일반적으로 컨테이너 자체가 생성자를 반사적으로 호출하여 Bean을 직접 생성하는 경우 생성할 Bean 클래스를 지정합니다. 이는 new 연산자를 사용하는 Java 코드와 다소 동일합니다. 
## Typically, to specify the bean class to be constructed in the case where the container itself directly creates the bean by calling its constructor reflectively, somewhat equivalent to Java code with the new operator.

- # 컨테이너가 Bean을 생성하기 위해 클래스에서 정적 팩토리 메소드를 호출하는 덜 일반적인 경우에 개체를 생성하기 위해 호출되는 정적 팩토리 메소드를 포함하는 실제 클래스를 지정합니다. 
## To specify the actual class containing the static factory method that is invoked to create the object, in the less common case where the container invokes a static factory method on a class to create the bean.
# 정적 팩토리 메서드 호출에서 반환된 개체 유형은 완전히 동일한 클래스이거나 다른 클래스일 수 있습니다.
## The object type returned from the invocation of the static factory method may be the same class or another class entirely.

<!-- guide wrapper start -->
<div class="spring guide-wrapper mt-2" markdown="1">
<h1 class="text-center title">중첩된 클래스 이름</h1>
<h2 class="text-center">Nested class names</h2>

# 중첩 클래스에 대한 빈 정의를 구성하려면 중첩 클래스의 바이너리 이름이나 소스 이름을 사용할 수 있습니다. 
## If you want to configure a bean definition for a nested class, you may use either the binary name or the source name of the nested class.

# 예를 들어, com.example 패키지에 SomeThing이라는 클래스가 있고 이 SomeThing 클래스에 OtherThing이라는 정적 중첩 클래스가 있는 경우 달러 기호($) 또는 점(.)으로 구분할 수 있습니다.
## For example, if you have a class called SomeThing in the com.example package, and this SomeThing class has a static nested class called OtherThing, they can be separated by a dollar sign ($) or a dot (.).

# 따라서 빈 정의에서 클래스 속성의 값은 com.example.SomeThing$OtherThing 또는 com.example.SomeThing.OtherThing이 됩니다.
## So the value of the class attribute in a bean definition would be com.example.SomeThing$OtherThing or com.example.SomeThing.OtherThing.
</div>
<!-- // guide wrapper end -->

</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="instantiation-with-a-constructor" markdown="1" class="inner-contents">
# **생성자를 사용한 인스턴스화**
## Instantiation with a Constructor
<br/>

# 생성자 접근 방식으로 Bean을 생성하면 모든 일반 클래스가 Spring에서 사용 가능하고 호환됩니다. 
## When you create a bean by the constructor approach, all normal classes are usable by and compatible with Spring. 

# 즉, 개발 중인 클래스는 특정 인터페이스를 구현하거나 특정 방식으로 코딩할 필요가 없습니다. 
## That is, the class being developed does not need to implement any specific interfaces or to be coded in a specific fashion. 

# 단순히 빈 클래스를 지정하는 것으로 충분합니다. 
## Simply specifying the bean class should suffice. 

# 그러나 특정 빈에 사용하는 IoC 유형에 따라 기본(빈) 생성자가 필요할 수 있습니다. 
## However, depending on what type of IoC you use for that specific bean, you may need a default (empty) constructor.

# Spring IoC 컨테이너는 관리하고자 하는 거의 모든 클래스를 관리할 수 있습니다. 
## The Spring IoC container can manage virtually any class you want it to manage. 

# 진정한 JavaBeans 관리에만 국한되지 않습니다. 대부분의 Spring 사용자는 기본(인수 없는) 생성자와 컨테이너의 속성을 따라 모델링된 적절한 설정자 및 게터만 있는 실제 JavaBeans를 선호합니다. 
## It is not limited to managing true JavaBeans. Most Spring users prefer actual JavaBeans with only a default (no-argument) constructor and appropriate setters and getters modeled after the properties in the container. 

# 또한 컨테이너에 더 이국적인 비-빈 스타일 클래스를 가질 수 있습니다. 
## You can also have more exotic non-bean-style classes in your container. 

# 예를 들어 JavaBean 사양을 절대적으로 준수하지 않는 레거시 연결 풀을 사용해야 하는 경우 Spring에서도 이를 관리할 수 있습니다. 
## If, for example, you need to use a legacy connection pool that absolutely does not adhere to the JavaBean specification, Spring can manage it as well.

# XML 기반 구성 메타데이터를 사용하여 다음과 같이 빈 클래스를 지정할 수 있습니다.
## With XML-based configuration metadata you can specify your bean class as follows:

<div class="mt-2"></div>

```xml
    <bean id="exampleBean" class="examples.ExampleBean"/>
    
    <bean name="anotherExample" class="examples.ExampleBeanTwo"/>
```

# 생성자에 인수를 제공하고(필요한 경우) 개체가 생성된 후 개체 인스턴스 속성을 설정하는 메커니즘에 대한 자세한 내용은 종속성 주입을 참조하세요.
## For details about the mechanism for supplying arguments to the constructor (if required) and setting object instance properties after the object is constructed, see Injecting Dependencies.
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="instantiation-with-a-static-factory-method" markdown="1" class="inner-contents">
# **정적 팩토리 메소드를 사용한 인스턴스화**
## Instantiation with a Static Factory Method
<br/>

# 정적 팩토리 메소드로 생성하는 Bean을 정의할 때 클래스 속성을 사용하여 정적 팩토리 메소드를 포함하는 클래스를 지정하고 factory-method라는 속성을 사용하여 팩토리 메소드 자체의 이름을 지정하십시오. 
## When defining a bean that you create with a static factory method, use the class attribute to specify the class that contains the static factory method and an attribute named factory-method to specify the name of the factory method itself.

# 이 메서드를 호출하고(나중에 설명하는 선택적 인수를 사용하여) 라이브 개체를 반환할 수 있어야 합니다. 이 개체는 이후에 생성자를 통해 생성된 것처럼 처리됩니다. 
## You should be able to call this method (with optional arguments, as described later) and return a live object, which subsequently is treated as if it had been created through a constructor. 

# 이러한 빈 정의의 한 가지 용도는 레거시 코드에서 정적 팩토리를 호출하는 것입니다. 
## One use for such a bean definition is to call static factories in legacy code.

# 다음 빈 정의는 팩토리 메소드를 호출하여 빈을 생성하도록 지정합니다. 
## The following bean definition specifies that the bean be created by calling a factory method.

# 정의는 반환된 객체의 유형(클래스)을 지정하지 않고 팩토리 메서드를 포함하는 클래스만 지정합니다. 
## The definition does not specify the type (class) of the returned object, only the class containing the factory method.

# 이 예에서 createInstance() 메서드는 정적 메서드여야 합니다. 
## In this example, the createInstance() method must be a static method. 

# 다음 예는 팩토리 메소드를 지정하는 방법을 보여줍니다.
## The following example shows how to specify a factory method:

<div class="mt-2"></div>

```xml
    <bean id="clientService"
        class="examples.ClientService"
        factory-method="createInstance"/>
```

# 다음 예제는 앞의 빈 정의와 함께 작동하는 클래스를 보여줍니다.
## The following example shows a class that would work with the preceding bean definition:

```java
    public class ClientService {
        private static ClientService clientService = new ClientService();
        private ClientService() {}
    
        public static ClientService createInstance() {
            return clientService;
        }
    }
```  

# 팩토리 메서드에 인수(선택 사항)를 제공하고 객체가 팩토리에서 반환된 후 객체 인스턴스 속성을 설정하는 메커니즘에 대한 자세한 내용은 종속성 및 구성 세부 정보를 참조하세요.
## For details about the mechanism for supplying (optional) arguments to the factory method and setting object instance properties after the object is returned from the factory, see Dependencies and Configuration in Detail.
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="instantiation-by-using-an-instance-factory-method" markdown="1" class="inner-contents">
# **인스턴스 팩토리 메소드를 사용한 인스턴스화**
## Instantiation by Using an Instance Factory Method
<br/>

# 정적 팩토리 메소드를 통한 인스턴스화와 유사하게 인스턴스 팩토리 메소드를 사용한 인스턴스화는 컨테이너에서 기존 Bean의 비정적 메소드를 호출하여 새 Bean을 생성합니다. 
## Similar to instantiation through a static factory method, instantiation with an instance factory method invokes a non-static method of an existing bean from the container to create a new bean. 

# 이 메커니즘을 사용하려면 클래스 속성을 비워두고 factory-bean 속성에서 객체를 생성하기 위해 호출될 인스턴스 메소드를 포함하는 현재(또는 상위 또는 상위) 컨테이너의 빈 이름을 지정하십시오. 
## To use this mechanism, leave the class attribute empty and, in the factory-bean attribute, specify the name of a bean in the current (or parent or ancestor) container that contains the instance method that is to be invoked to create the object. 

# factory-method 속성으로 팩토리 메서드 자체의 이름을 설정합니다. 
## Set the name of the factory method itself with the factory-method attribute. 

# 다음 예제는 이러한 빈을 구성하는 방법을 보여줍니다.
## The following example shows how to configure such a bean:

<div class="mt-2"></div>

```xml
    <!-- the factory bean, which contains a method called createInstance() -->
    <bean id="serviceLocator" class="examples.DefaultServiceLocator">
        <!-- inject any dependencies required by this locator bean -->
    </bean>
    
    <!-- the bean to be created via the factory bean -->
    <bean id="clientService"
        factory-bean="serviceLocator"
        factory-method="createClientServiceInstance"/>
```

# 다음 예제에서는 해당 클래스를 보여줍니다. 
## The following example shows the corresponding class:

<div class="mt-2"></div>

```java
    public class DefaultServiceLocator {
    
        private static ClientService clientService = new ClientServiceImpl();
    
        public ClientService createClientServiceInstance() {
            return clientService;
        }
    }
```

# 다음 예제와 같이 하나의 팩토리 클래스는 둘 이상의 팩토리 메소드를 보유할 수도 있습니다.
## One factory class can also hold more than one factory method, as the following example shows:

<div class="mt-2"></div>

```xml
    <bean id="serviceLocator" class="examples.DefaultServiceLocator">
        <!-- inject any dependencies required by this locator bean -->
    </bean>
    
    <bean id="clientService"
        factory-bean="serviceLocator"
        factory-method="createClientServiceInstance"/>
    
    <bean id="accountService"
        factory-bean="serviceLocator"
        factory-method="createAccountServiceInstance"/>
```

# 다음 예제에서는 해당 클래스를 보여줍니다.
## The following example shows the corresponding class:

<div class="mt-2"></div>

```java
    public class DefaultServiceLocator {
    
        private static ClientService clientService = new ClientServiceImpl();
    
        private static AccountService accountService = new AccountServiceImpl();
    
        public ClientService createClientServiceInstance() {
            return clientService;
        }
    
        public AccountService createAccountServiceInstance() {
            return accountService;
        }
    }
```

# 이 접근 방식은 팩토리 빈 자체가 종속성 주입(DI)을 통해 관리 및 구성될 수 있음을 보여줍니다. 
## This approach shows that the factory bean itself can be managed and configured through dependency injection (DI). 

# 자세한 내용은 종속성 및 구성을 참조하십시오.
## See Dependencies and Configuration in Detail.

<!-- info wrapper start -->
<div class="spring info-wrapper mt-2">
<i class="fa fa-info-circle icon mr-1 mt-1"></i>
<div markdown="1">
# Spring 문서에서 "factory bean"은 Spring 컨테이너에 설정되어 인스턴스 또는 정적 factory메소드를 통해 객체를 생성하는 bean을 의미한다. 
## In Spring documentation, "factory bean" refers to a bean that is configured in the Spring container and that creates objects through an instance or static factory method.

# 대조적으로 FactoryBean(대문자에 주의)은 Spring 고유의 FactoryBean 구현 클래스를 참조합니다. 
## By contrast, FactoryBean (notice the capitalization) refers to a Spring-specific FactoryBean implementation class.
</div>
</div>
<!-- // info wrapper end -->
</div>
<!-- // section inner contents end -->


<!-- section inner content start -->
<div id="determining-a-beans-runtime-type" markdown="1" class="inner-contents">
# **Bean의 런타임 유형 결정하기** 
## Determining a Bean’s Runtime Type
<br/>

# 특정 Bean의 런타임 유형은 결정하기 쉽지 않습니다. 
## The runtime type of a specific bean is non-trivial to determine. 

# 빈 메타데이터 정의에서 지정된 클래스는 초기 클래스 참조일 뿐이며 선언된 팩토리 메소드와 잠재적으로 결합되거나 빈의 다른 런타임 유형으로 이어질 수 있는 FactoryBean 클래스이거나 인스턴스의 경우 전혀 설정되지 않습니다. -레벨 팩토리 메소드(대신 지정된 팩토리 빈 이름을 통해 확인됨). 또한 AOP 프록시는 대상 빈의 실제 유형(구현된 인터페이스만)의 제한된 노출로 인터페이스 기반 프록시로 빈 인스턴스를 래핑할 수 있습니다.  
## A specified class in the bean metadata definition is just an initial class reference, potentially combined with a declared factory method or being a FactoryBean class which may lead to a different runtime type of the bean, or not being set at all in case of an instance-level factory method (which is resolved via the specified factory-bean name instead). Additionally, AOP proxying may wrap a bean instance with an interface-based proxy with limited exposure of the target bean’s actual type (just its implemented interfaces).

# 특정 Bean의 실제 런타임 유형을 찾는 권장 방법은 지정된 Bean 이름에 대한 BeanFactory.getType 호출입니다. 
## The recommended way to find out about the actual runtime type of a particular bean is a BeanFactory.getType call for the specified bean name. 

# 이것은 위의 모든 경우를 고려하고 BeanFactory.getBean 호출이 동일한 빈 이름에 대해 반환할 객체 유형을 반환합니다.
## This takes all of the above cases into account and returns the type of object that a BeanFactory.getBean call is going to return for the same bean name.
</div>
<!-- // section inner contents end -->


</div>
<!-- // section contents end -->
</section>


<blockquote markdown="1" class="mt-4">
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
<p id="footnote-4" class="footnote-desc">
    <strong class="number">4.</strong> 소량의 XML 구성에 의해 제공됨
</p>
<p id="footnote-5" class="footnote-desc" markdown="1">
    <strong class="number">5.</strong> [웹 어플리케이션을 위한 ApplicationContext 인스턴스화 참조](#convenient-application-context-instantiation-for-web-application)
</p>
<p id="footnote-6" class="footnote-desc" markdown="1">
    <strong class="number">6.</strong> 예: Structs Action instances
</p>
<p id="footnote-7" class="footnote-desc" markdown="1">
    <strong class="number">7.</strong> 예: Hibernate SessionFactories, JMS Queues 등
</p>
<p id="footnote-8" class="footnote-desc" markdown="1">
    <strong class="number">8.</strong> JPA 객체 관계형 매핑 표준 기반
</p>
</blockquote>

<script type="text/javascript" src="{{ '/static/script/accordion.js' | relative_url }}"></script>