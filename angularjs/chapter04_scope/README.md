* 作用域是视图和控制器之间的胶水。
* 作用域是应用状态的基础。
* AngularJS将$scope设计成和DOM类似的结构，因此$scope可以进行嵌套，也就是说我们可以引用父级$scope中的属性。
* 作用域提供了监视数据模型变化的能力。它允许开发者使用其中的apply机制，将数据模型的变化在整个应用范围内进行通知。

> 将应用的业务逻辑都放在控制器中，而将相关的数据都放在控制器的作用域中，这是非常完美的架构。

##4.1、视图和$scope的世界
ng-app元素同$rootScope进行绑定，$rootScope是所有$scope对象的最上次。

##4.2、就是HTML而已

在AngularJS应用的模板中使用多种标记，包括下面这些:

> 指令：将DOM元素增强为可复用的DOM组件的属性或元素。
> 值绑定：模板语法{{ }}可以将表达式绑定到视图上。
> 过滤器：可以在视图中使用的函数，用来进行格式化。
> 表单控件：用来检验用户输入的控件。

##4.3、作用于能做什么
作用域有以下的基本功能：
> 提供观察者以监视数据模型的变化；
> 可以将数据模型的变化通知给整个应用，甚至是系统外的组件；
> 可以进行嵌套，隔离业务功能和数据；
> 给表达式提供运算时所需的执行环境。

##4.4、$scope的生命周期
$scope对象的生命周期处理有四个不同阶段：

###4.4.1、创建
在创建控制器或指令时，AngularJS会用`$injector`创建一个新的作用域，并在这个新建的控制器或指令运行时将作用域传递进去。

###4.4.2、链接
当Angular开始运行时，所有的$scope对象都会附加或者链接到视图中。这些作用域将会注册当Angular应用上下文中发生变化时需要运行的函数。(`$watch函数`)

###4.4.3、更新
通常事件循环运行在$rootScope，每个子域都会进行脏值检查，如果检测到变化，$scope对象就会触发指定的回调函数。

###4.4.4、销毁
当一个$scope在视图中不再需要时，这个作用域将会清理和销毁自己。

##4.5、指令和作用域
指令在AngularJS中被广泛使用，指令*通常不会创建自己的$scope*，但也有例外。比如`ng-controller`和`ng-repeat`指令会创建自己的子作用域并将它们附加到DOM元素上。
