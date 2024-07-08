$(function(){

 //カルーセル
 $('.carousel').slick({
   autoplay: true,
   dots: true,
   infinite: true,
   autoplaySpeed: 5000,
   arrows: false,
 });

 //リンクホバー時にフォント色変化
 $('.hover').on('mouseover',function(){
  $(this).animate({
    opacity: 0.5,
  },400);
 });

 $('.hover').on('mouseout',function(){
  $(this).animate({
    opacity: 1.0,
  },400);
 });

 //TOPボタンの表示・非表示
 $(window).scroll(function(){
  
  if($(this).scrollTop() >= 100){
    $('#back-btn').fadeIn();
  } else {
    $('#back-btn').fadeOut();
  }
 });

 //リンクをクリックしたとき滑らかにスクロール
 $('a[href^="#"]').on('click',function(){
  let scrollTarget;
  if($(this).attr('href')==='#'){
    scrollTarget = $('html');
   } else {
    scrollTarget = $($(this).attr('href'));
   }
   $('html,body').animate({
    scrollTop: scrollTarget.offset().top
   },600);
   return false;
 });

 //スクロースしたときにセクションをフェードイン
 $(window).scroll(function(){
  $('section').each(function(){
    if($(window).scrollTop() > $(this).offset().top - $(window).height() + 100){
      $(this).css('opacity','1');
    }
  });
 });

 //画像ホバー時に透明度下がる
 $('.modal').on('mouseover',function(){
  $(this).animate({
    opacity: 0.5,
  },400);
 });
 $('.modal').on('mouseout',function(){
  $(this).animate({
    opacity: 1.0,
  },400);
 });

 //モーダル設定
 $('.modal').on('click',function(){
  const imgdata = $(this).attr('src');
  $('.modal-img').attr('src',imgdata);
  $('.modal-background, .modal-close, .modal-img').fadeIn();
  $('#back-btn').css('opacity','0.5');

 });
 $('.modal-close').on('click',function(){
  $('.modal-background, .modal-close, .modal-img').fadeOut();
 });

});