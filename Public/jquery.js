$(document).ready(function() {


listenForSubmit();

  function listenForSubmit() {
    var textBoxContents = {};
    $(':submit').click(function() {
      event.preventDefault();
      $('.textarea').each(function(i, element) {
        textBoxContents[i]=$(this).val();
      });
    });
}

});

