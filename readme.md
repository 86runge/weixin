navigateTo, redirectTo 只能打开非 tabBar 页面。
switchTab 只能打开 tabBar 页面。
reLaunch 可以打开任意页面。
页面底部的 tabBar 由页面决定，即只要是定义为 tabBar 的页面，底部都有 tabBar。
调用页面路由带的参数可以在目标页面的onLoad中获取。

在JavaScript中有三种声明变量的方式：var、let、const。 var：声明全局变量，换句话理解就是，声明在for循环中的变量，跳出for循环同样可以使用。 [JavaScript] 纯文本查看 复制代码 ? 1 2 3 4 5 for(var i=0;i<=1000;i++){ var sum=0; sum+=i; } alert(sum); 声明在for循环内部的sum，跳出for循环一样可以使用，不会报错正常弹出结果 let：声明块级变量，即局部变量。 在上面的例子中，跳出for循环，再使用sum变量就会报错 注意：必须声明'use strict'后才能使用let声明变量否则浏览并不能显示结果 const：用于声明常量，也具有块级作用域 const PI=3.14;

hidden只对块状布局生效。如果设置成了display:flex就不生效了，但是去掉这个就可以了
hidden 隐藏布局，虽然隐藏了，但是还是会占空间。
display:none 隐藏不占据空间。

事件绑定的写法同组件的属性，以 key、value 的形式。
key 以bind或catch开头，然后跟上事件的类型，如bindtap、catchtouchstart。自基础库版本 1.5.0 起，bind和catch后可以紧跟一个冒号，其含义不变，如bind:tap、、catch:touchstart。
value 是一个字符串，需要在对应的 Page 中定义同名的函数。不然当触发事件的时候会报错。
bind事件绑定不会阻止冒泡事件向上冒泡，catch事件绑定可以阻止冒泡事件向上冒泡。