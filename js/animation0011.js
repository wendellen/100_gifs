$(function(){

  var poem = ['flowers', 'that', 'fade', 'into', 'bloom']
  var currentWordIndex = 0

  $('.pills').mouseover(function(){

    $(this).find('img').css({ transform: 'rotate(720deg)' })

  }).mouseout(function(){

    $(this).find('img').css({ transform: 'rotate(0deg)' })

  })

  $('.pills').mousedown(function(){

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

  function moveAllPills(){
    $('.pills').each( function(){
      $(this).css({
        top: Math.random()*window.innerHeight - 200,
        left: Math.random()*window.innerWidth - 200
      })
    })
  }

  moveAllPills()

  $('.pills').click( function(){
    moveAllPills()
  })



})
