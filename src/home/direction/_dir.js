import './dir.scss'
import $ from 'jquery'
$(window).resize(function () {
  const width = $(window).width()
  $('.dir-content').css('width', width * 0.8)
  console.log(2)
})
