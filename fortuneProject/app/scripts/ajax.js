$(document).ready(function () {
  $('#fortuneButton').click(function () {
    var printFortune = $('#printFortune');

    $.getJSON('localhost:3000/fortune', function (data) {
      console.log(data);

      var items = data.items.map(function (item) {
        return item.key + ': ' + item.value;
      });

      printFortune.empty();

      if (items.length) {
        var content = '<li>' + items.join('</li><li>') + '</li>';
        var list = $('<ul />').html(content);
        printFortune.append(list);
      }
    });

    printFortune.text('Loading the JSON file.');
  });
});
