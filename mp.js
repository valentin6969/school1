$(document).ready(() => {
$('.menu-button').on('mouseenter', () => {
    $('.nav-menu').show()
  })
  
  $('.nav-menu').on('mouseleave', () => {
    $('.nav-menu').hide();
  })
}); 