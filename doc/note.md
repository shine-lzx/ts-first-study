**types 用于声明对另一个库的依赖，而 path 用于声明对另一个文件的依赖。**

```javascript
// https://www.cnblogs.com/xiao-peng-ji/p/11391465.html
/// <reference types="sizzle" />
/// <reference path="JQueryStatic.d.ts" />
```

#### 声明全局类型
**只能定义类型而不能有具体实现**

+ declare var 声明全局变量

+ declare function 声明全局方法

+ declare class 声明全局类

+ declare enum 声明全局枚举类型

+ declare namespace 声明（含有子属性的）全局对象

+ interface 和 type 声明全局类型

```javascript
// @ts-ignore  隐藏ts报错
```
