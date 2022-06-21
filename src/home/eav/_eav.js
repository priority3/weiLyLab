import $ from 'jquery'

// 下拉菜单的实现
$('.drop').mouseenter(function () {
  $(this).children('ul').stop(true, false).slideDown(400)
})
$('.drop').mouseleave(function () {
  $(this).children('ul').stop(true, false).slideUp(400)
})
// ID点击的动画
$('.eav-name').click(function () {
  console.log('click') // 测试用
  $(this).children('span').addClass('animate__bounce')
})
