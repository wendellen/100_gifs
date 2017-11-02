$(function (){

  $('.gradient').mousedown(function(){

    $(this).find('nav div').css({ opacity: 0 })
    $(this).find('main article').css({ opacity: 0 })
    $(this).find('main aside').css({ opacity: 0 })

  }).mouseup(function(){

    $(this).find('nav div').css({ opacity: 1 })
    $(this).find('main article').css({ opacity: 1 })
    $(this).find('main aside').css({ opacity: 1 })
  })

})
