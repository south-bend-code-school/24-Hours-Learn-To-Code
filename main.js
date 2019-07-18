(function () {
  $(document).ready(init)

  function init(){
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.modal').modal();
    $('#get-info').modal('open');
  }

})();
