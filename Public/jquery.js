$(document).ready(function() {


  listenForSubmit();
  var aggregateValues = {};

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
  console.log(aggregateValues);

  function makeLink(element, value) {
    var element = element;
    console.log(element);
    $(element).prev('a').text(value);
    hideBox(element);
  }

  function hideBox(element) {
    var element = element;
    $(element).siblings('textarea').css({
      "visibility": "hidden"
    });
  }
});