$(function(){

  var poem = ['flowers', 'that', 'fade', 'into', 'bloom']
  var currentWordIndex = 0

  $('.bloom').mouseover(function(){

    $(this).find('img').css({ transform: 'rotate(720deg)' })

  }).mouseout(function(){

    $(this).find('img').css({ transform: 'rotate(0deg)' })

  })

  $('.bloom').mousedown(function(){

    $(this).find('img').css({ opacity: 0 })

    var textEl = $(this).find('div')
    textEl.css({ opacity: 1 })
    textEl.text( poem[currentWordIndex % poem.length] )
    currentWordIndex++

    $('#mycursor').css({ transform: 'scale(0.7)' })

  }).mouseup(function(){

    $(this).find('img'). css({
      opacity: 1,
    })
    $(this).find('div').css({
      opacity: 0
    })

    $('#mycursor').css({ transform: 'scale(1)' })

  })

  function moveAllBlooms(){
    $('.bloom').each( function(){
      $(this).css({
        top: Math.random()*window.innerHeight - 200,
        left: Math.random()*window.innerWidth - 200
      })
    })
  }

  moveAllBlooms()

  $('.bloom').click( function(){
    moveAllBlooms()
  })



})


// x =     0 1 2 3 4 5 6 7 8 9
// x % 4 = 0 1 2 3 0 1 2 3 0 1
// x % 5 = 0 1 2 3 4 0 1 2 3 4
