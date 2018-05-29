$(document).ready(function(){
  $('#slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
		infinite: true,
		speed: 500,
	});
});
  $(document).ready(function(){
  var slider = "#slider2"; // スライダー
  var thumbnailItem = "#thumbnail-list .thumbnail-item"; // サムネイル画像アイテム
  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function(){
   var index = $(thumbnailItem).index(this);
   $(this).attr("data-index",index);
  });
  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on('init',function(slick){
   var index = $(".slide2-item.slick-slide.slick-current").attr("data-slick-index");
   $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnail-current");
  });
  //slickスライダー初期化
  $(slider).slick({
    autoplay: false,
    arrows: true,
    fade: true,
    infinite: false, //これはつけましょう。
    prevArrow: '<img src="images/hidarii.png" class="slide-arrow prev-arrow" style="left:-2%">',
    nextArrow: '<img src="images/migi.png" class="slide-arrow next-arrow">'
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnail-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnail-current");
  });
});


$(document).ready(function(){
  var slider = "#slider2sp"; // スライダー
  var thumbnailItem = "#thumbnailsp-list .thumbnailsp-item"; // サムネイル画像アイテム
  // サムネイル画像アイテムに data-index でindex番号を付与
  $(thumbnailItem).each(function(){
   var index = $(thumbnailItem).index(this);
   $(this).attr("data-index",index);
  });
  // スライダー初期化後、カレントのサムネイル画像にクラス「thumbnail-current」を付ける
  // 「slickスライダー作成」の前にこの記述は書いてください。
  $(slider).on('init',function(slick){
   var index = $(".slide2sp-item.slick-slide.slick-current").attr("data-slick-index");
   $(thumbnailItem+'[data-index="'+index+'"]').addClass("thumbnailsp-current");
  });
  //slickスライダー初期化
  $(slider).slick({
    autoplay: false,
    arrows: true,
    fade: true,
    infinite: false, //これはつけましょう。
    prevArrow: '<img src="images/hidariisp.png" class="slide-arrow prev-arrow">',
    nextArrow: '<img src="images/migisp.png" class="slide-arrow next-arrow">'
  });
  //サムネイル画像アイテムをクリックしたときにスライダー切り替え
  $(thumbnailItem).on('click',function(){
    var index = $(this).attr("data-index");
    $(slider).slick("slickGoTo",index,false);
  });
  //サムネイル画像のカレントを切り替え
  $(slider).on('beforeChange',function(event,slick, currentSlide,nextSlide){
    $(thumbnailItem).each(function(){
      $(this).removeClass("thumbnailsp-current");
    });
    $(thumbnailItem+'[data-index="'+nextSlide+'"]').addClass("thumbnailsp-current");
  });
});
