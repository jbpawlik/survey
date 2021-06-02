


//User Interface Logic

$(document).ready(function() {
  $('form#demographics').submit(function(event) {
    event.preventDefault();
    const name = $('#fullname').val();
    $('#output').text(name);
  })
})

const beverage = $("#mood").val();

const flavor = $("input:radio[name=flavor]:checked").val();