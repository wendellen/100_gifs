(function() {

  var clock = document.querySelector('.clock');
  var button = document.getElementById("toggle");

  var toggle = function() {

    clock.classList.toggle("ticking");

  };

  button.addEventListener('click', toggle);

})();
