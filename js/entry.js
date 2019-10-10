(function() {
  function init() {
    createDom();
    bindEvent();
  }
  function createDom() {
    // 创建轮播图
    $(".swiperWrap").swiper({
      images: [
        "../images/swiper1.jpg",
        "../images/swiper2.jpg",
        "../images/swiper3.jpg",
        "../images/swiper4.jpg"
      ],
      isAuto: true,
      animationType: "animation",
      btnSize: 50,
      btnPosition: 20,
      btnColor: "#fff",
      liSize: 20,
      liPosition: 30,
      liColor: "#fff",
      liActiveColor: "#000",
      liMargin: 20
    });
  }
  function bindEvent() {}
  init();
})($);
