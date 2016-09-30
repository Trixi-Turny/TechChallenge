$(document).ready(function() {


  listenForSubmit();
  makeCenterStory();
  var stories = {};

  function listenForSubmit() {
    var textBoxContents = {};
    $(':submit').click(function() {
      event.preventDefault();
      var element = $(this);
      var value = element.siblings('.textarea').val();
      console.log(value);
      // textBoxContents[i]= value;
      makeLink(element, value);
    });
    // aggregateValues.push(textBoxContents);
    console.log(textBoxContents);
  }

  function makeLink(element, value) {
    var element = element;
    console.log(element);
    $(element).prev('a').text(value);
    console.log($(element).prev('.storylink').text(value));
    hideBox(element);
  }

  function hideBox(element) {
    var element = element;
    $(element).siblings('textarea').css({
      "visibility": "hidden"
    });
    $(element).css({
      "visibility": "hidden"
    });
  }

  function makeCenterStory() {
    $('.storylink').click(function(i, element) {
      event.preventDefault();
      var newStory = document.createElement('p');
      $(newStory).attr({
        "class": "centerStory"
      });
      $('.centerStory').replaceWith(newStory);
      $(newStory).html($(this).text());
      resetElements();
    });

    function resetElements() {
      $('.textarea').each(function(i, element) {;
        $(this).val("");
        $(this).css({
          "visibility": "visible"
        });
        $(this).siblings('input').css({
          "visibility": "visible"
        });
        $(this).siblings('a').text("");
      });
    }
  }
});