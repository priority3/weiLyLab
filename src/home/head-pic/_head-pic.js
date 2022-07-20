import './head-pic.scss'
import $ from 'jquery'

$(window).resize(function() {
  const high = $(window).height()
  $('.head-container').css('height', high - 150)
  console.log(1)
})
$(document).ready(function() {
  $('.head-arr').click(function() {
    $('html').scrollTop(830)
  })
})
