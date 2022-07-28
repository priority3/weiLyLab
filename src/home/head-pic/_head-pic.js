import './head-pic.scss'
import $ from 'jquery'
$(window).ready(function() {
  const high = $(window).height()
  $('.head-container').css('height', high - 150)
})
$(window).resize(function() {
  const high = $(window).height()
  $('.head-container').css('height', high - 150)
})
$(document).ready(function() {
  $('.head-arr').click(function() {
    $('html').scrollTop(830)
  })
})
$(window).resize(function() {
  const width = $(window).width()
  if (width <= 1600) {
    if (width <= 1440) {
      $('html').css('font-size', 42)
    } else $('html').css('font-size', 45)
    console.log(123)
  }
  if (width >= 1600) {
    $('html').css('font-size', 50)
    console.log(321)
  }
})
$(window).ready(function() {
  const width = $(window).width()
  if (width <= 1600) {
    if (width <= 1440) {
      $('html').css('font-size', 42)
    } else { $('html').css('font-size', 45) }
    console.log(123)
  }
  if (width >= 1600) {
    $('html').css('font-size', 50)
    console.log(321)
  }
})
