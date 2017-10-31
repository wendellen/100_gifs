$(function(){

  $('.bloom').mouseover(function(){

    $(this).find('img').css({
      opacity: 0.3,
      transform: 'rotate(720deg)'
    })
    $(this).find('div').css({
      opacity: 1
    })

  }).mouseout(function(){

    $(this).find('img'). css({
      opacity: 1,
      transform: 'rotate(0deg)'
    })
    $(this).find('div').css({
      opacity: 0.3
    })

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
