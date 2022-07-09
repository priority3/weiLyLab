import $ from 'jquery'

$('.eav-content').mouseenter(function () {
  $(this).siblings().addClass('animation-slide-left')
})
$('.drop').mouseenter(function () {
  $(this).children().css('display', 'block')
})
$('.drop').mouseleave(function () {
  $(this).children('ul').css('display', 'none')
})
