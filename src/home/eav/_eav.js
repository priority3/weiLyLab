import $ from 'jquery'
import './eav.scss'
// 下拉菜单的实现
$('.drop').mouseenter(function() {
  $(this).children('ul').stop(true, false).slideDown(400)
})
$('.drop').mouseleave(function() {
  $(this).children('ul').stop(true, false).slideUp(400)
})
$('.eav-box').hover(
  function() {
    $(this).show()
  },
  function() {
    $(this).slideUp(400)
  }
)
// ID点击的动画
$('.eav-name').click(function() {
  console.log('click') // 测试用
  $(this).children('span').addClass('animate__bounce')
})
// 保持下拉菜单父亲选中效果
$('.drop').mouseenter(function() {
  $(this).children('span').addClass('keep')
})
$(document).ready(function() {
  $('.no').click(function() {
    $('html').scrollTop(0)
  })
  $('.no1').click(function() {
    $('html').scrollTop(830)
  })
  $('.no2').click(function() {
    $('html').scrollTop(2500)
  })
  $('.no3').click(function() {
    $('html').scrollTop(3800)
  })
})
