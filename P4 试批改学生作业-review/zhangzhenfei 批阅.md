## 具体要求
### 1、实现四种消息类型
对于朋友圈页面，消息大致分成四种情况：
#### 1.1、多图片消息 (消息 type 为0)


![](http://coding.imweb.io/img/project/moments/type1.png)

#### 1.2、分享消息  (消息 type 为1)

![](http://coding.imweb.io/img/project/moments/type2.png)

#### 1.3、单图片消息 (消息 type 为2)

![](http://coding.imweb.io/img/project/moments/type3.png)

#### 1.4、无图片消息 (消息 type 为3)

![](http://coding.imweb.io/img/project/moments/type4.png)


`注：基础代码已提供多图片消息的实现方法，需补充完成其余三种消息的展现所需的html、css和js。`

### 2、将提供的页面数据 `data` 转换成页面
在app.js 中提供了以下页面数据 ：
- userName： 用户名称 （可修改为自己的名字）
- data: 页面消息数据对象数组，需要对这个数据进行解析，并生成页面

```javascript
// 用户名称 - 修改为自己的名称
var userName = '张学友';
// 需要渲染的页面的数据
var data = [...];
```


### 3、实现回复按钮功能
- 点击信息的回复按钮，弹出回复操作面板
- 同时只能展现一个回复操作面板
- 点击非回复操作面板的区域，隐藏回复操作面板

具体效果如下：

![](http://coding.imweb.io/img/project/moments/replypanel.gif)


### 4、实现点赞功能
- 对于未点赞的信息，点击回复按钮，展现点赞的按钮

![](http://coding.imweb.io/img/project/moments/icon-like.png)

- 对于已点赞的信息，点击回复按钮，展现取消点赞的按钮

![](http://coding.imweb.io/img/project/moments/icon-unlike.png)

- 点击点赞按钮，完成点赞
- 点击取消按钮，取消点赞

具体效果如下：


![](http://coding.imweb.io/img/project/moments/like.gif)


### 5、实现增加评论功能
- 点击回复按钮，底部展现输入框和发送按钮
- 当文本框为空，发送按钮为灰色不可点击状态
- 当文本框不为空，发送按钮为绿色且点击发送，在信息栏中增加信息

### 6、点击图片放大功能
- 点击信息的图片，展示放大图片
- 点击放大展示的图片区域，隐藏放大图片区域

具体效果如下：

![](http://coding.imweb.io/img/project/moments/pic.gif)


## zhangzhenfei批阅：

### 1、实现四种消息类型 评分 2
#### 扣分项：
1. 只完成了多图片和无图片类型消息，单图片实现和DEMO不符，单图片宽度是需要占多图的全部宽度的
2. 分享消息类型没实现

### 2、将提供的页面数据 `data` 转换成页面 评分 5
#### 扣分项：无
实现的非常好，能够正确的展示所有需求的数据

### 3、实现回复按钮功能 评分 3
#### 扣分项：
1.同时只能展现一个回复操作面板存在可优化地方，参考批阅代码注释部分`app.js`的`256行`
2.存在bug,点击回复消息的输入框，消息框也隐藏了

### 4、实现点赞功能 评分 4
#### 扣分项：
1.存在bug，点击取消点赞的按钮，没有点赞列表名字的逗号去掉
2.代码存在可优化地方

### 5、实现增加评论功能 评分 4
#### 扣分项：
1.评论框弹出的时候，会遮住消息列表内容，可以考虑再弹出评论框的时候消息列表样式增加适当的padding-bottom
2.评论框缺少弹出动画，比较唐突，可以设置一个高度变化的过渡


### 6、点击图片放大功能 评分 5
#### 扣分项：无
功能完成的非常好，但实现方式有待提高

> 一共6大点，满分是30，得分23

## zhangzhenfei批阅总结：
总体评价：
能完成95%的功能，js的基本功不错，能够扩展原型实现toggle，灵活使用jq工具库，事件委派，链式调用，这些都是好的代码。
但是在代码里我还看见了一点点坏代码的味道，如代码变量的复用，代码规范，代码性能，这部分也不是一天两天能提高的，需要项目经验的大量积累，
希望以后能再这方面注意点。

待提高：
[JS]
1. 加强代码规范意识，写代码的时候注意方法的抽取，功能的单一性
2. 遇到for循环这种操作，思考有没有更好的实现，提高程序性能
3. 加强jquery库的运用，比如元素选择器，动画，核心，可以研究一下jquery源码，对自身提高又很大帮助

[CSS]
1. 需要考虑浏览器兼容性，不同浏览器的属性前缀的添加
2. 元素样式变化的时候，显示隐藏，高度变化等，可以考虑增加动画过渡效果，提高用户体验

## zhangzhenfei批阅总结：
通过

>【备注】index.html & style.css里有通过注释写【zhangzhenfei批阅】，请在相关文件里进行查看

> 其他参考的资源
> 1.[Autoprefixer:一个以最好的方式处理浏览器前缀的后处理程序!]('http://www.cnblogs.com/aNd1coder/archive/2013/08/12/3252690.html')
> 2.[jQuery 遍历 - end() 方法]('http://www.w3school.com.cn/jquery/traversing_end.asp')
> 3.[jQuery源码分析系列](http://www.cnblogs.com/aaronjs/p/3279314.html)
