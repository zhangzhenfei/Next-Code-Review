// 用户名称 - 修改为自己的名称
var userName = 'Lu仔酱';
// 需要渲染的页面的数据
// 朋友圈页面的数据
var data = [{
    user: {
        name: '阳和',
        avatar: './img/avatar2.png'
    },
    content: {
        type: 0, // 多图片消息
        text: '华仔真棒，新的一年继续努力！',
        pics: ['./img/reward1.png', './img/reward2.png', './img/reward3.png', './img/reward4.png'],
        timeString: '3分钟前',
    },
    reply: {
        hasLiked: false,
        likes: ['Guo封面', '源小神'],
        comments: [{
            author: 'Guo封面',
            text: '你也喜欢华仔哈！！！'
        }, {
            author: '喵仔zsy',
            text: '华仔实至名归哈'
        }]
    }
}, {
    user: {
        name: '伟科大人',
        avatar: './img/avatar3.png'
    },
    content: {
        type: 1, // 分享消息
        text: '全面读书日',
        pics: [],
        share: {
            pic: '',
            text: '飘洋过海来看你'
        },
        timeString: '50分钟前',
    },
    reply: {
        hasLiked: false,
        likes: ['阳和'],
        comments: []
    }
}, {
    user: {
        name: '深圳周润发',
        avatar: './img/avatar4.png'
    },
    content: {
        type: 2, // 单图片消息
        text: '很好的色彩',
        pics: ['http://coding.imweb.io/img/default/k-2.jpg'],
        timeString: '一小时前',
    },
    reply: {
        hasLiked: false,
        likes: [],
        comments: []
    }
}, {
    user: {
        name: '喵仔zsy',
        avatar: './img/avatar5.png'
    },
    content: {
        type: 3, // 无图片消息
        text: '以后咖啡豆不敢浪费了',
        pics: [],
        timeString: '2个小时前',
    },
    reply: {
        hasLiked: false,
        likes: [],
        comments: []
    }
}];


// 页面元素
var $momentsList = $('.moments-list');

/**
 * 渲染函数：点赞列表
 * @param {Array} likes 点赞名称数组
 */
function likesHtmlTpl(likes) {
    if (!likes.length) {
        return '';
    }
    var htmlText = ['<div class="reply-like"><i class="icon-like-blue"></i>'];
    if (likes.length) {
        htmlText.push(' <a class="reply-who" href="#">' + likes[0] + '</a>');
    }
    // 后面的前面都有逗号
    for (var i = 1, len = likes.length; i < len; i++) {
        htmlText.push('，<a class="reply-who" href="#">' + likes[i] + '</a>');
    }
    htmlText.push('</div>');
    return htmlText.join('');
}
/**
 * 渲染函数：评论内容
 * @param {Array} comments 评论信息对象数组
 */
function commentsHtmlTpl(comments) {
    if (!comments.length) {
        return '';
    }
    var htmlText = ['<div class="reply-comment">'];
    for (var i = 0, len = comments.length; i < len; i++) {
        var comment = comments[i];
        htmlText.push('<div class="comment-item"><a class="reply-who" href="#">' + comment.author + '</a>：' + comment.text + '</div>');
    }
    htmlText.push('</div>');
    return htmlText.join('');
}
/**
 * 渲染函数：消息回复
 * @param {Array} comments 评论信息对象数组
 */
function replyTpl(replyData) {
    var htmlText = [];
    htmlText.push('<div class="reply-zone">');
    // 点赞模板
    htmlText.push(likesHtmlTpl(replyData.likes));
    // 评论模块
    htmlText.push(commentsHtmlTpl(replyData.comments));
    htmlText.push('</div>');
    return htmlText.join('');
}
/**
 * 渲染函数：多张图片
 */
function multiplePicTpl(pics) {
    var htmlText = [];
    htmlText.push('<ul class="item-pic">');
    for (var i = 0, len = pics.length; i < len; i++) {
        htmlText.push('<li class="pic-wrap"><img class="pic-item" src="' + pics[i] + '"></li>')
    }
    htmlText.push('</ul>');
    return htmlText.join('');
}
/**
 * 循环：消息体
 * 生成的html文本可参考 message.html文件
 * @param {Object} messageData 对象
 */
function messageTpl(messageData) {
    /**
     * zhangzhenfei 批阅：多个变量声明推荐使用省略var方式，减少文件体积，提高解析性能
     * @example
     * var user = messageData.user,
     *     content = messageData.content,
     *     htmlText = [];
     */
    var user = messageData.user;
    var content = messageData.content;
    var htmlText = [];
    /**
     * zhangzhenfei 批阅：如果是使用数组方式渲染模板，不建议多次push操作数组，影响性能，直接定义使用即可，
     * 语义更加清晰，看起来和html语法更接近
     * @example
     * var htmlText = [
     *  '<div class="moments-item" data-index="0">',
     *  '<a class="item-left" href="#">',
     *  '<img src="' + user.avatar + '" width="42" height="42" alt=""/>'，
     *  '</a>',
     *  ...
     * ]
     */
    htmlText.push('<div class="moments-item" data-index="0">');
    // 消息用户头像
    htmlText.push('<a class="item-left" href="#">');
    htmlText.push('<img src="' + user.avatar + '" width="42" height="42" alt=""/>');
    htmlText.push('</a>');
    // 消息右边内容
    htmlText.push('<div class="item-right">');
    // 消息内容-用户名称
    htmlText.push('<a href="#" class="item-name">' + user.name + '</a>');
    // 消息内容-文本信息
    htmlText.push('<p class="item-msg">' + content.text + '</p>');
    /**
     * zhangzhenfei 批阅：只实现了一个多图片的模板渲染方法，缺少其他三种消息展示
     */
    // 消息内容-图片列表 （目前只支持多图片消息，需要补充完成其余三种消息展示）
    htmlText.push(multiplePicTpl(content.pics));
    // 消息时间和回复按钮
    htmlText.push('<div class="item-ft">');
    htmlText.push('<span class="item-time">' + content.timeString + '</span>');
    htmlText.push('<div class="item-reply-btn">');
    htmlText.push('<span class="item-reply"></span>');
    htmlText.push('</div></div>');
    // 消息回复模块（点赞和评论）
    htmlText.push(replyTpl(messageData.reply));
    htmlText.push('</div>');
    return htmlText.join('');
}

/**
 * 页面渲染函数：render
 */
function render() {
    // TODO: 目前只渲染了一个消息（多图片信息）,需要展示data数组中的所有消息数据。
    // var messageHtml = messageTpl(data[0]);
    //遍历，添加data数组中的所有消息数据；
    data.forEach(function (item) {
        $momentsList.append(messageTpl(item));
    })
}
/**
 * 页面绑定事件函数：bindEvent
 */
function bindEvent() {
    /**
     * zhangzhenfei 批阅：bindEvent就只应该做绑定方法的事情，方法做的事情和方法无关是编程大忌
     */
    // TODO: 完成页面交互功能
    /**
     * zhangzhenfei 批阅：变量缺少注释，难以理解，应该写明是当前弹出点赞/评论框，
     * 一个页面只允许出现一个，每次点击评论按钮会重新替换
     */
    var curlikelist = null;
    //toggle功能
    /**
     * zhangzhenfei 批阅：
     * 1. toggle方法没注释，参数没注释，难以理解，代码是写给人看的，不是仅仅实现功能即可，还需要又良好的可维护性
     * 2. 方法参数命名也应该又意义，fn,fn2是用来干嘛的呢，而且原型方法应该抽出来当做一个原型扩展工具使用
     */
    $.fn.toggle = function (fn, fn2) {
        var args = arguments, guid = fn.guid || $.guid++, i = 0,
            toggle = function (event) {
                var lastToggle = ($._data(this, "lastToggle" + fn.guid) || 0) % i;
                $._data(this, "lastToggle" + fn.guid, lastToggle + 1);
                event.preventDefault();
                return args[lastToggle].apply(this, arguments) || false;
            };
        toggle.guid = guid;
        while (i < args.length) {
            args[i++].guid = guid;
        }
        return this.click(toggle);
    };
    /**
     * zhangzhenfei 批阅：
     * 事件方法里面应该只处理事件的绑定相关逻辑，以下初始化的方法可以抽出来，作为一个initPage()方法
     */
    //添加点赞评论
    $('.item-reply-btn').before("<div class='item-reply-likelist'><span class='item-reply-likelist-like'>点赞</span><span class='item-reply-likelist-comment'>评论</span></div>");
    //添加评论栏
    $(".page-moments").append('<div class="moments-comment"><input type="text" class="moments-comment-input"><button class="moments-comment-button">评论</button></div>');
    //将点赞评论隐藏
    $(".item-reply-likelist").hide();
    /**
     * zhangzhenfei 批阅：
     * 这一部分点击回复隐藏其他回复框，其实里面这个循环是为了把不是点击的那个回复框隐藏，
     * 不需要那么麻烦，这种循环查找很影响性能，直接把所有回复框隐藏了，再使用动画直接显示出来就可以了, 一行代码搞定
     * @example
     * $(".item-reply-likelist").hide();
     */
    //点击评论按钮出现 点赞/评论,且只显示一个
    $(".item-ft").on('click', '.item-reply-btn', function (e) {
        curlikelist = $(this).siblings(".item-reply-likelist");
        // $(".item-reply-likelist").hide(); 批阅example 下面index for代码可以不要了
        var index = curlikelist.index(".item-reply-likelist");
        //遍历隐藏不是当前选项的选项卡
        for (var i = 0, len = $(".item-reply-likelist").length; i < len; i++) {
            if (i != index) {
                $(".item-reply-likelist").eq(i).hide();
            }
        }
        curlikelist.animate({
            width: "toggle",
            height: "36px"
        }, 300)
        return false;
    })
    /**
     * zhangzhenfei 批阅：
     * 相同的jquery实例可以用变量缓存起来，提高程序性能
     * @example
     * var $itemFt = $(".item-ft"）, $this = $(this)
     */
    //点击评论按钮出现评论栏
    $(".item-ft").on('click', '.item-reply-likelist-comment', function () {
        $(this).parent(".item-reply-likelist").animate({
            width: "toggle",
            height: "36px"
        }, 300);
    });
    $(".item-ft").on('click', '.item-reply-likelist-like', function () {
    })
    //点赞toggle
    /**
     * zhangzhenfei 批阅：
     * 1. 不要出现无意义变量定义，a是什么意思呢，还得通过阅读代码理解
     * 2. 原型扩展方法toggle需要传递两个参数，直接使用匿名函数导致方法体过长，可以考虑抽取定义两个方法
     */
    var a = '<i>，</i><a class="reply-who" href="#">' + userName + '</a>';
    $(".item-reply-likelist-like").toggle(function () {
        $(this).text("取消");
        //如果有人赞过
        if ($(this).parents('.item-right').find('.reply-like').length == 1) {
            $(this)
                .parents('.item-right')
                .find('.reply-like')
                .append(a);
        } else {
            //如果没人赞过
            $(this)
                .parents('.item-right')
                .find('.reply-zone')
                .prepend('<div class="reply-like"><i class="icon-like-blue"></i> <a class="reply-who" href="#">' + userName + '</a>')
        }
        $(this).parent('.item-reply-likelist').animate({
            width: "toggle",
            height: "36px"
        }, 300);
    }, //取消点赞
        function () {
            $(this).text("点赞");
            //暂时用append和remove来模拟
            if ($(this).parents('.item-right').find('.reply-like').children("a").length == 1) {
                //如果只有自己点赞，将整个点赞节点删除
                $(this).parents('.item-right').find('.reply-like').remove();
            } else {
                /**
                 * zhangzhenfei 批阅：
                 * 这里有bug，last-child选择所有父级元素下的最后一个子元素，a是最后一个子元素可以选择的到，
                 * 每次删除，直接删除后面两个元素就对了
                 * 另外jquery使用这种串联的方法，当执行到.children("a:last-child").remove()表达式的时候，
                 * 其实当前jquery上下文已经是被删除那个元素了,有几种解决方式，推荐使用end()回到上一次的jquery上下文对象
                 * @example
                 *  $(this).parents('.item-right').find('.reply-like')
                 *   .children(":last-child").remove().end()
                 *   .children(":last-child").remove();
                 */
                //如果有其他人点赞，只删除自己的
                $(this).parents('.item-right').find('.reply-like')
                    .children("a:last-child").remove()
                    .children("i:last-child").remove();
            }
            /**
             * zhangzhenfei 批阅：相同的方法可以抽取为一个公用方法，增强代码健壮性
             * @example
             * const widthAnimate = $obj => {
             *  $obj.animate({
             *   width: "toggle",
             *   height: "36px"
             *  }, 300);
             * }
             * $(this).parent('.item-reply-likelist').widthAnimate(); // call
             */
            $(this).parent('.item-reply-likelist').animate({
                width: "toggle",
                height: "36px"
            }, 300);
        })
    /**
     * zhangzhenfei 批阅：
     * 1. 上面方法缺少分号，要不全部都不加，要不每个语句后面都加上
     * 2. $windowW 明显和声明$(".page-moments")意义不一样，推荐使用有意义的声明
     * 3. 变量的声明推荐再方法的开头，不要再后面使用的时候，想到一个定义一个，代码维护性不好
     * 4. 这里大图点击切换小图，小图点击切换大图，其实都是一张图，应用不同css而已，
     * 直接对包裹这个img的元素使用jquery的toggleClass就行了，不用写那么多代码的
     * 5. 每个方法后还是缺少分号，注意了
     */
    //点击图片toggle
    var $windowW = $(".page-moments");
    //小图点击放大
    $(".item-right").on('click', '.pic-item', function () {
        $(this).parent(".pic-wrap")
            .addClass("item-pic-big")
            .css({
                width: $windowW.outerWidth() + "px",
                height: "100vh"
                //获取页面宽度
            })
        $(document.body).css({
            overflow: "hidden"
        });
        $(this).addClass("pic-mgpd");
    })
    //大图点击恢复
    $(".item-right").on('click', '.item-pic-big', function () {
        $(this)
            .removeClass("item-pic-big")
            .css({
                height: "90px",
                width: "90px"
            })
        $(document.body).css({
            overflow: "auto"
        });
        $(this).find(".pic-item").removeClass("pic-mgpd");
    })
    //评论功能实现
    $(".moments-comment").hide();
    $(".item-reply-likelist-comment").on('click', function (e) {
        $(".moments-comment").show();
        $(".moments-comment-input:eq(0)").focus();
        curlikelist.animate({
            width: "toggle",
            height: "36px"
        })
        e.stopPropagation();
    })
    //点击非输入框区隐藏输入框
    //点击其他部分 点赞/评论按钮隐藏
    /**
     * zhangzhenfei 批阅：
     * 这里有个bug，没有排除评论框的时候，会隐藏评论框，应该排除掉
     * @example
     * if ((target.className != "moments-comment") && (target.className != "moments-comment-input"))
     */
    $(window).on('click', function (e) {
        var target = e.target;
        $(".item-reply-likelist").hide();
        if (target.className != "moments-comment") {
            $('.moments-comment-input').val("");
            $(".moments-comment").hide();
        }
    });
    // 监听输入框改变
    $('.moments-comment-button').attr("disabled", true);
    $('.moments-comment-button').css(
        "background", "#ccc"
    )
    $('.moments-comment-input').bind('input propertychange', function () {
        /**
         * zhangzhenfei 批阅
         * 同样的问题，相同的对象可以抽取出来，提高程序性能
         * $('.moments-comment-button')
         */
        // 把字符串去掉空格，检查是否为空。
        $str = $.trim($('.moments-comment-input').val());
        if ($str === "") {
            //判断输入框是否为空
            $('.moments-comment-button').css("background", "#ccc");
            $('.moments-comment-button').attr("disabled", true);
        } else {
            $('.moments-comment-button').attr("disabled", false);
            $('.moments-comment-button').css("background", "#47b111");
        }
    });
    //#47b111
    $(".moments-comment").on('click', "button", function () {
        var comment = curlikelist.parents(".moments-item").find(".reply-comment");
        /**
         * zhangzhenfei 批阅
         * 代码可优化，增加评论的模板可以抽取出来，然后在用到的地方直接append
         * var comment = '<div class="comment-item"><a class="reply-who" href="#">' + userName + '</a>：' + $(".moments-comment-input").val() + '</div>'
         */
        //如果已经有评论，增加一条评论,且输入不能为空
        //若不为空，且已有评论
        if (comment.parents(".reply-zone").find(".comment-item").length > 0) {
            comment.append('<div class="comment-item"><a class="reply-who" href="#">' + userName + '</a>：' + $(".moments-comment-input").val() + '</div>')

        } else {
            /**
             * zhangzhenfei 批阅
             * jquery 链式操作推荐换行，提高代码阅读性
             */
            //若不为空，但是没有评论
            curlikelist.parents(".moments-item").find('.reply-zone').append('<div class="reply-comment"><div class="comment-item"><a class="reply-who" href="#">' + userName + '</a>：' + $(".moments-comment-input").val() + '</div></div>')
        }
        ;
        //隐藏评论区，重置input button
        $(".moments-comment-input").val("");
        $(".moments-comment").hide();
        $('.moments-comment-button').attr("disabled", true);
        $('.moments-comment-button').css(
            "background", "#ccc"
        )

    })
}

/**
 * 页面入口函数：init
 * 1、根据数据页面内容
 * 2、绑定事件
 */
function init() {
    // 展现自己的名称
    $('.user-name').text(userName);
    render();
    bindEvent();
}
init();
