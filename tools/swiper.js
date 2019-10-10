(function ($) {
    function Swiper(obj) {
        this.wrap = obj.wrap;
        this.imgList = obj.images;
        this.imgNum = obj.images.length;
        this.animationType = obj.animationType || "animation";
        this.width = obj.width || $(this.wrap).width();
        this.height = obj.height || $(this.wrap).height();
        this.btnColor = obj.btnColor || "#fff";
        this.btnSize = obj.btnSize || 5;
        this.btnPosition = obj.btnPosition || 20;
        this.liSize = obj.liSize || 20;
        this.liPosition = obj.liPosition || 30;
        this.liColor = obj.liColor || "#fff";
        this.liActiveColor = obj.liActiveColor || "#000";
        this.liMargin = obj.liMargin || 20;
        this.createDom();
        this.initStyle();
    }
    // 创建Dom
    Swiper.prototype.createDom = function () {
        const $ul = $('<ul class="swiper"></ul>');
        const $oUl = $('<ul class="oUl"></ul>');
        this.imgList.forEach( (item, index) => {
            const $li = $(`<li><a href="#"><img src="${item}"></img></a></li>`);
            const $oli = $('<li></li>');
            $ul.append($li);
            $oUl.append($oli);
        });
        // 如果是无缝轮播图，则多创建一张图片
        if (this.animateType == 'animate') {
			$('<li><a href=#><img src="' + this.imgList[0] + '"></img></a></li>').appendTo($Oul);
		};
        const $leftBtn = $('<span class="leftBtn">&lt;</span>');
        const $rightBtn = $('<span class="rightBtn">&gt;</span>');
        $(this.wrap).append($ul).append($oUl).append($leftBtn).append($rightBtn);

    },
    // 初始化dom样式
    Swiper.prototype.initStyle = function () {
        // 防止用户没有设置
        $("*", this.wrap).css({
            margin: 0,
            padding: 0,
            listStyle: "none",
            fontSize: 0
        });
        $(this.wrap).css({
            position: "relative",
            overflow: "hidden"
        });
        $('.swiper', this.wrap).css({
            width: this.animationType === "animation" ? (this.imgNum + 1) * this.width : this.width,
            height: this.height,
            position: "absolute"
        });
        $('.swiper li', this.wrap).css({
            display: "inline-block",
            width: this.width,
            height: this.height
        });
        $('.swiper li img', this.wrap).css({
            width: this.width,
            height: this.height
        });
        $('.leftBtn, .rightBtn', this.wrap).css({
            display: "block",
            position: "absolute",
            fontSize: this.btnSize + "px",
            color: this.btnColor,
            top: "50%",
            transform: "translateY(-50%)"
        });
        $('.leftBtn', this.wrap).css({
            left: this.btnPosition + "px"
        });
        $('.rightBtn', this.wrap).css({
            right: this.btnPosition + "px"
        });
        $('.oUl', this.wrap).css({
            position: "absolute",
            left: "50%",
            transform: "translateX(-50%)", 
            bottom: this.liPosition + "px"
        });
        $('.oUl li', this.wrap).css({
            width: this.liSize,
            height: this.liSize,
            borderRadius: "50%",
            border: `1px solid ${this.liColor}`,
            display: "inline-block",
            margin: `0 ${this.liMargin + "px"}`
        });
    }
    $.fn.extend({
        swiper: function (obj) {
            obj.wrap = this;
            new Swiper(obj);
        }
    })
})($);