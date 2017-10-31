$(function(){

  var poem = ['flowers', 'that', 'fade', 'into', 'bloom']
  var currentWordIndex = 0

  $('.lotus').mouseover(function(){

    $(this).find('img').css({ filter: 'grayscale(100%)' })

  }).mouseout(function(){

    $(this).find('img').css({ filter: 'grayscale(0%)' })

  })

  $('.lotus').mousedown(function(){

    $(this).find('img').css({ opacity: 1 })

    var textEl = $(this).find('div')
    textEl.css({ opacity: 1 })
    textEl.text( poem[currentWordIndex % poem.length] )
    currentWordIndex++

    $('#mycursor').css({ transform: 'scale(0.5)' })

  }).mouseup(function(){

    $(this).find('img'). css({
      opacity: 1,
    })
    $(this).find('div').css({
      opacity: 0
    })

    $('#mycursor').css({ transform: 'scale(1)' })

  })

  function moveAllLotus(){
    $('.lotus').each( function(){
      $(this).css({
        top: Math.random()*window.innerHeight - 200,
        left: Math.random()*window.innerWidth - 200
      })
    })
  }

  moveAllLotus()

  $('.lotus').click( function(){
    moveAllLotus()
  })



})
