$(document).ready(function() {


listenForSubmit();
var aggregateValues ={};
  function listenForSubmit() {
    var textBoxContents = {};
    $(':submit').click(function() {
      event.preventDefault();
      $('.textarea').each(function(i, element) {
        textBoxContents[i]=$(this).val();
      });
      aggregateValues.push = textBoxContents;
      console.log(textBoxContents);
    });
}
console.log(aggregateValues);
});

