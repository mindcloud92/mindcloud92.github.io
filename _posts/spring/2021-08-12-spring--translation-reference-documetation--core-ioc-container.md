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

# 간단히 말해서 `BeanFactory`는 환경 설정 프레임워크와 기본 기능을 제공하고 `ApplicationContext`는 더 많은 엔터프라이즈별 기능을 추가 제공한다.
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

# `Bean`과 이들 간의 의존성은 환경 설정 메타데이터에 반영된다.
## Beans, and the dependencies among them, are reflected in the configuration metadata used by a container.
</div>
</section>


<section class="translation-article-wrapper accordion-wrapper mb-4" markdown="1">
<div markdown="1" class="handler">
# **1.2. Container 개요**
## 1.2. Container Overview
</div>

<div markdown="1" class="contents">
# `ApplicationContext`<a href="#footnote-3" class="footnote">[3]</a> 인터페이스는 Spring `IoC container`를 나타내고 `Bean`의 인스턴스화, 구성 및 조립을 담당한다.
## The `org.springframework.context.ApplicationContext` interface represents the Spring IoC container and is responsible for instantiating, configuring, and assembling the beans.
 
# 또한 환경 설정 메타데이터를 읽어 인스턴스화, 구성 및 조립할 객체에 대한 지침을 가져온다.
## The container gets its instructions on what objects to instantiate, configure, and assemble by reading configuration metadata.

# 환경 설정 메타데이터는 XML이나 Java annotation 또는 코드 형태로 사용할 수 있고
## The configuration metadata is represented in XML, Java annotations, or Java code.

# 어플리케이션을 구성하는 객체 간의 풍부한 상호 의존성을 표현할 수 있게 해준다.
## It lets you express the objects that compose your application and the rich interdependencies between those objects.
<br/>


# `ApplicationContext` 인터페이스의 구현체 중 몇 가지는 Spring과 함께 제공되며
## Several implementations of the `ApplicationContext` interface are supplied with Spring.

# 일반적으로 독립 실행형 어플리케이션에서는 [ClassPathXmlApplicationContext](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/ClassPathXmlApplicationContext.html){:target="_blank"}이나 [FileSystemXmlApplicationContext](https://docs.spring.io/spring-framework/docs/5.3.9/javadoc-api/org/springframework/context/support/FileSystemXmlApplicationContext.html){:target="_blank"}를 사용한다.
## In stand-alone applications, it is common to create an instance of `ClassPathXmlApplicationContext` or `FileSystemXmlApplicationContext`.

# 환경 설정 메타데이터를 정의하기 위한 형식으로는 전통 형식인 XML과 Java annotation이나 코드로 선언하는 부가적인 형식<a href="#footnote-4" class="footnote">[4]</a>이 있다. 
## While XML has been the traditional format for defining configuration metadata, you can instruct the container to use Java annotations or code as the metadata format by providing a small amount of XML configuration to declaratively enable support for these additional metadata formats.
<br/>

# 대부분의 어플리케이션 시나리오에서는 Spring `IoC container`에 정의된 객체를 명시적인 코드로 직접 인스턴스화하지 않아도 된다. 
## In most application scenarios, explicit user code is not required to instantiate one or more instances of a Spring IoC container.

# 예를 들어 일반적으로 웹 어플리케이션 시나리오에서는 어플리케이션의 `web.xml` 파일에 상용구 코드 8줄 정도만 작성해도 충분히 `ApplicationContext`를 인스턴스화할 수 있다.<a href="#footnote-5" class="footnote">[5]</a>
## For example, in a web application scenario, a simple eight (or so) lines of boilerplate web descriptor XML in the web.xml file of the application typically suffices (see Convenient ApplicationContext Instantiation for Web Applications).

# [STS](https://spring.io/tools){:target="_blank"}(Eclipse 기반 개발 환경)를 사용하는 경우 이러한 상용구를 사용한 환경 설정을 몇 번의 클릭이나 키 입력으로 손쉽게 할 수 있다.
## If you use the Spring Tools for Eclipse (an Eclipse-powered development environment), you can easily create this boilerplate configuration with a few mouse clicks or keystrokes.

<br/>
# 다음 다이어그램은 Spring이 작동하는 방식을 개괄적으로 보여준다.
## The following diagram shows a high-level view of how Spring works. 

![container magic](https://docs.spring.io/spring-framework/docs/current/reference/html/images/container-magic.png){:class="thumbnail mt-1 pa-1"} 
<p class="thumbnail-description">Figure 1. The Spring IoC container</p>

<br/>
# 시스템 또는 어플리케이션은 어플리케이션의 클래스가 구성 메타데이터와 결합되어 `ApplicationContext`가 생성되고 초기화된 후에야 완전히 구성되고 실행이 가능해진다.
## Your application classes are combined with configuration metadata so that, after the `ApplicationContext` is created and initialized, you have a fully configured and executable system or application.

<div markdown="1" class="mt-5">
# **1.2.1. 환경 설정 메타데이터**
## 1.2.1. Configuration Metadata

# 위에 있는 다이어그램에서 볼 수 있듯이 Spring `IoC container`는 환경 설정 메타데이터의 형식을 사용한다.
## As the preceding diagram shows, the Spring IoC container consumes a form of configuration metadata. 

<br/>
# 환경 설정 메타데이터는 어플리케이션 개발자가 Spring `IoC container`에게 어플리케이션의 객체를 인스턴스화, 구성 및 조립하도록 지시하는 방법을 나타내며
## This configuration metadata represents how you, as an application developer, tell the Spring container to instantiate, configure, and assemble the objects in your application.

# 전통적으로 간단하고 직관적인 XML 형식으로 제공된다. 덧붙어 이 장에서는 Spring `IoC container`의 주요 컨셉과 기능을 전달하는데 대부분 사용된다. 
## Configuration metadata is traditionally supplied in a simple and intuitive XML format, which is what most of this chapter uses to convey key concepts and features of the Spring IoC container.

<div class="spring info-wrapper mt-3 mb-3 pb-1 mb-2">
<i class="fa fa-info-circle icon mr-half mt-1"></i>
<div markdown="1">
# XML 기반 메타데이터가 유일한 환경 설정 메타데이터 형식은 아니다.
## XML-based metadata is not the only allowed form of configuration metadata.

# Spring **IoC container** 자체는 환경 설정 메타데이터가 실제로 작성되는 형식과 완전히 분리된다. 
## The Spring IoC container itself is totally decoupled from the format in which this configuration metadata is actually written.
 
# 요즘 많은 개발자들은 Spring 어플리케이션을 만드는 데에 [Java 기반의 환경 설정](#java-based-container-configuration)을 사용한다.
## These days, many developers choose Java-based configuration for their Spring applications.
</div>
</div>

# XML 형식이 아닌 다른 메타데이터 형식을 사용하는 방법은 다음과 같다.
## For information about using other forms of metadata with the Spring container, see:

- # [Annotation](#annotation-based-container-configuration): `Spring 2.5`에서 annotation 기반 구성 메타데이터 지원을 도입했다.  
## Annotation-based configuration: Spring 2.5 introduced support for annotation-based configuration metadata.
- # [Java](#java-based-container-configuration): `Spring 3.0`부터 Spring JavaConfig 프로젝트에서 제공하는 많은 기능이 핵심 Spring Framework의 일부가 되면서  
## Java-based configuration: Starting with Spring 3.0, many features provided by the Spring JavaConfig project became part of the core Spring Framework. 
# XML 대신 Java를 사용하여 어플리케이션 클래스 외부에 `Bean`을 정의할 수 있게 되었다.
## Thus, you can define beans external to your application classes by using Java rather than XML files.
# 이러한 새로운 기능을 사용하려면 [`@Configuration`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Configuration.html){:target="_blank"}, [`@Bean`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Bean.html){:target="_blank"}, [`@Import`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Import.html){:target="_blank"}, [`@DependsOn`](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/DependsOn.html){:target="_blank"} 참고. 
## To use these new features, see the `@Configuration`, `@Bean`, `@Import`, and `@DependsOn` annotations.

<br/>

# Spring 환경 설정은 일반적으로 하나 이상의 `Bean`에 대한 정의로 구성된다.   
## Spring configuration consists of at least one and typically more than one bean definition that the container must manage. 

# `Bean`에 대한 정의를 XML 기반 환경 설정 메타데이터는 최상위 `<beans/>` 요소 내부의 `<bean/>` 요소로 
## XML-based configuration metadata configures these beans as `<bean/>` elements inside a top-level `<beans/>` element.

# Java 기반 환경 설정 메타데이터는 `@Configuration` 클래스 내부의 `@Bean` 메소드를 사용하여 구성한다. 
## Java configuration typically uses @Bean-annotated methods within a @Configuration class.

<br/>

# 이러한 `Bean` 정의는 어플리케이션을 구성하는 실제 객체가 된다.
## These bean definitions correspond to the actual objects that make up your application.

# 일반적으로 서비스 계층의 객체, 데이터 액세스 객체(DAO), presentation 객체<a href="#footnote-6" class="footnote">[6]</a>, infrastructure 객체<a href="#footnote-7" class="footnote">[7]</a>를 정의하며 
## Typically, you define service layer objects, data access objects (DAOs), presentation objects such as Struts Action instances, infrastructure objects such as Hibernate SessionFactories, JMS Queues, and so forth. 

# 보통 도메인 객체를 만들고 로드하는 것은 DAO 및 비즈니스 로직의 책임이기 때문에 일반적으로는 환경 설정에 세분화된 도메인 객체를 구성하지 않는다. 
## Typically, one does not configure fine-grained domain objects in the container, because it is usually the responsibility of DAOs and business logic to create and load domain objects. 


<br/>
# 하지만 AspectJ와 Spring의 통합을 사용하여 `IoC container`의 제어 밖에서 생성된 객체를 구성할 수 있다. 
## However, you can use Spring’s integration with AspectJ to configure objects that have been created outside the control of an IoC container.

# ([AspectJ를 사용하여 Spring으로 도메인 객체 의존성 주입](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#aop-atconfigurable){:target="_blank"} 참조)
## See Using AspectJ to dependency-inject domain objects with Spring.

<br/>
# XML 기반 환경 설정 구성의 기본 구조는 다음 예제와 같다.
## The following example shows the basic structure of XML-based configuration metadata:

<div markdown="1" class="mt-2 mb-2">

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
</div>
<i></i>

- `<bean />` 필수 속성
    - # `id`: 개별 `Bean` 정의의 식별자   
      ## The id attribute is a string that identifies the individual bean definition.
    - # `class`: `Bean`의 class type을 정의 & full classname을 사용   
      ## The class attribute defines the type of the bean and uses the fully qualified classname.


# `id` 속성의 값은 협업 객체를 나타내며
## The value of the id attribute refers to collaborating objects.
 
# 협업 객체를 참조하기 위한 XML은 위 예제에 포함되어 있지 않다. 
## The XML for referring to collaborating objects is not shown in this example. 

# 자세한 내용은 [의존성](#dependencies) 참조.
## See Dependencies for more information.
</div>

<div id="instantiating-a-container" markdown="1" class="mt-5">
# **1.2.2. Container 인스턴스화** 
## 1.2.2. Instantiating a Container

# `ApplicationContext` 생성자에 사용하는 위치 경로는 container가 로컬 파일 시스템, Java `CLASSPATH` 등과 같은 다양한 외부 리소스에서 환경설정 메타데이터를 로드할 수 있도록 하는 리소스 문자열이다.  
## The location path or paths supplied to an `ApplicationContext` constructor are resource strings that let the container load configuration metadata from a variety of external resources, such as the local file system, the Java `CLASSPATH`, and so on.

<div class="mt-2"></div>

```java
    ApplicationContext context = new ClassPathXmlApplicationContext("services.xml", "daos.xml");
```

<div class="mt-1"></div>

```kotlin
    val context = ClassPathXmlApplicationContext("services.xml", "daos.xml")
```

<div class="spring info-wrapper mt-3 mb-3 pb-1 mb-2">
<i class="fa fa-info-circle icon mr-half mt-1"></i>

<div markdown="1">

# Spring의 **IoC conatiner**에 대해 배우고 나면 URI 형식의 경로를 사용해서 InputStream을 편리하게 읽어 올 수 있는 메커니즘을 제공하는 Spring의 [**Resource**](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources){:target="_blank"} 추상화에 대해 더 알고 싶어 할 수도 있다. 
## After you learn about Spring’s IoC container, you may want to know more about Spring’s **Resource** abstraction (as described in Resources), which provides a convenient mechanism for reading an InputStream from locations defined in a URI syntax.

# **Resource** 경로는 어플리케이션 컨텍스트를 구성하는 데 사용된다. ([Application Context와 Resource Path](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#resources-app-ctx){:target="_blank"} 참조)
## In particular, **Resource** paths are used to construct applications contexts, as described in Application Contexts and Resource Paths.
</div>
</div>

<br/>

# 다음은 서비스 계층 객체 구성 파일(`services.xml`) 예제다.
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

<br/>
# 다음은 데이터 액세스 객체 구성 파일(`daos.xml`) 예제다.
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

# 앞의 예제에서 서비스 계층은 `PetStoreServiceImpl` 클래스와 데이터 액세스 객체<a href="#footnote-8" class="footnote">[8]</a>인 `JpaAccountDao`와 `JpaItemDao `두 개로 구성된다. 
## In the preceding example, the service layer consists of the `PetStoreServiceImpl` class and two data access objects of the types `JpaAccountDao` and `JpaItemDao` (based on the JPA Object-Relational Mapping standard).

# `<property />`요소의 `name` 속성은 JavaBean 속성의 이름을 참조하고 `ref` 속성은 다른 `Bean` 정의의 이름을 참조하며 
## The `property name` element refers to the name of the JavaBean property, and the `ref` element refers to the name of another bean definition.

# `id`와 `ref` 속성 간의 연결은 객체 간의 의존성을 나타낸다.
## This linkage between id and ref elements expresses the dependency between collaborating objects.

# 객체의 의존성을 구성하는 방법에 대한 더 자세한 내용은 [의존성](#dependencies) 참조.
## For details of configuring an object’s dependencies, see Dependencies.
<br/>

# **XML 기반 환경 설정 메타데이터 구성**
## Composing XML-based Configuration Metadata

# 여러 XML 파일에 `Bean` 정의를 하는 것이 유용할 수 있다. 
## It can be useful to have bean definitions span multiple XML files.

# 종종 각 개별 XML 구성 파일은 아키텍처의 논리적 계층 또는 모듈을 나타낸다. 
## Often, each individual XML configuration file represents a logical layer or module in your architecture.

# 어플리케이션 컨텍스트 생성자를 사용해서 이러한 모든 XML 조각에서 `Bean` 정의를 로드할 수 있다. 
## You can use the application context constructor to load bean definitions from all these XML fragments.
<br/>

# 이 생성자는 [이전 섹션](#instantiating-a-container)에서 보여준 것 처럼 여러가지 `Resource` 위치경로를 사용한다.
## This constructor takes multiple `Resource` locations, as was shown in the previous section.

# 또는 `<import/>` 요소를 하나 이상 사용하여 다른 파일에서 `Bean` 정의를 로드한다. 
## Alternatively, use one or more occurrences of the `<import/>` element to load bean definitions from another file or files.

# 다음 예제에서는 그렇게 하는 방법을 보여준다. 
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

# 앞의 예제에서 외부 `Bean` 정의는 세 개의 파일(`services.xml`, `messageSource.xml`, `themeSource.xml`)에서 로드된다  
## In the preceding example, external bean definitions are loaded from three files: `services.xml`, `messageSource.xml`, and `themeSource.xml`.

# 모든 위치 경로는 가져오기를 수행하는 정의 파일에 상대적이므로 `service.xml`은 가져오기를 수행하는 파일과 동일한 디렉토리 또는 classpath 위치에 있어야 하며 `messageSource.xml` 및 `themeSource.xml`은 위치 아래의 가져오기 파일 리소스 위치에 있어야 한다.
## All location paths are relative to the definition file doing the importing, so `services.xml` must be in the same directory or classpath location as the file doing the importing, while `messageSource.xml` and `themeSource.xml` must be in a resources location below the location of the importing file.

# 보다시피 선행 슬래시는 무시된다.
## As you can see, a leading slash is ignored.
 
# 그러나 이러한 경로는 상대적이므로 슬래시를 전혀 사용하지 않는 것이 더 낫다.  
## However, given that these paths are relative, it is better form not to use the slash at all.

# 최상위 요소 `<beans/>` 요소를 포함하여 가져오는 파일의 내용은 Spring 스키마에 따라 유효한 XML `Bean` 정의여야 한다.
## The contents of the files being imported, including the top level `<beans/>` element, must be valid XML bean definitions, according to the Spring Schema.

<br/>

<div class="spring info-wrapper pb-1">
<i class="fa fa-info-circle icon mr-half mt-1"></i>
<div markdown="1">
# 상대 경로 "../"를 사용하여 상위 디렉토리에 있는 파일을 참조하는 것은 가능하지만 권장하지는 않는다. 
## It is possible, but not recommended, to reference files in parent directories using a relative "../" path.

# 이렇게 하면 현재 어플리케이션 외부에 있는 파일에 의존성이 생긴다. 
## Doing so creates a dependency on a file that is outside the current application.

 # 특히 이 참조는 런타임 확인 프로세스가 "가장 가까운" classpath root를 선택한 다음 상위 디렉토리를 조사하는 classpath: URL(예: classpath:../services.xml)에 대해 권장되지 않는다.
## In particular, this reference is not recommended for classpath: URLs (for example, classpath:../services.xml), where the runtime resolution process chooses the “nearest” classpath root and then looks into its parent directory. 

# Classpath 구성 변경으로 인해 다른 잘못된 디렉토리가 선택될 수 있다.
## Classpath configuration changes may lead to the choice of a different, incorrect directory.

# 상대 경로 대신 항상 정규화된 리소스 위치를 사용할 수 있다.(예: file:C:/config/services.xml 또는 classpath:/config/services.xml).
## You can always use fully qualified resource locations instead of relative paths: for example, file:C:/config/services.xml or classpath:/config/services.xml.

# 그러나 어플리케이션 구성을 특정 절대 경로에 연결하고 있다는 점에 유의해야한다. 
## However, be aware that you are coupling your application’s configuration to specific absolute locations.

# 일반적으로 런타임 시 JVM 시스템 속성에 대해 확인되는 "${… }" 자리 표시자를 통해 절대 위치에 대한 참조를 유지하는 것이 좋다.
## It is generally preferable to keep an indirection for such absolute locations — for example, through "${…​}" placeholders that are resolved against JVM system properties at runtime.
</div>
</div>

<br/>

# 네임스페이스 자체는 가져오기 지시문 기능을 제공한다.
## The namespace itself provides the import directive feature.

#  더 나아가 Spring에서 제공하는 XML 네임스페이스(예: 컨텍스트 및 util 네임스페이스) 선택에서 일반적인 Bean 정의 이상의 추가 환경설정 기능을 사용할 수 있다 
## Further configuration features beyond plain bean definitions are available in a selection of XML namespaces provided by Spring — for example, the context and util namespaces.

<br/>

# **Groovy Bean 정의 DSL**
## The Groovy Bean Definition DSL

# 외부화된 환결설정 메타데이터의 추가 예로서 Grails 프레임워크로 알려진 것처럼 Bean 정의는 Spring의 Grooby Bean 정의 DSL로 표현된 표현될 수 있다.
## As a further example for externalized configuration metadata, bean definitions can also be expressed in Spring’s Groovy Bean Definition DSL, as known from the Grails framework.

# 일반적으로 이러한 구성은 다음 예제와 같은 구조의 ".groovy" 파일에 있다.
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

# 이 구성 스타일은 XML Bean 정의와 거의 동일하고 Spring의 XML 구성 네임스페이스도 지원한다.
## This configuration style is largely equivalent to XML bean definitions and even supports Spring’s XML configuration namespaces.

# 또한 importBeans 지시문을 통해 XML 빈 정의 파일을 가져올 수도 있다.
## It also allows for importing XML bean definition files through an importBeans directive.
</div>

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
