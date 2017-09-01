// Triggering function when page is ready
$(document).ready(function () {
  // Making input field active
  $('#field').focus();
  // When search button is pressed it activates function
  $('#searchBtn').click(function () {
    // Taking value from input field
    var inquiry = $("#field").val();
    // Making url with search query inserted
    var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + inquiry + "&format=json&callback=?";
    // AJAX call
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      dataType: 'json',
      // If call was successful
      success: function (data) {
        // Checking if we have received the data
        console.log(data);
        $("#result").html('');
        // FOR loop which goes backwards so that the most relevant
        // result will be on top
        for (var i = data[1].length - 1; i >= 0; i--) {
          $("#result").prepend('<div class="well"><a target="_blank" href="' + data[3][i] + '"><h2>' + data[1][i] + '</h2></a><p>' + data[2][i] + '</p></div>');
        };
      },
      // If there was a problem with the call
      error: function (errorMessage) {
        // You can put anything that you like here, I have opted for alert :)
        alert("Error");
      }
    });
  });
});
