var today = moment()

$('#currentDay').text(today.format('MMMM Do YYYY, LT'));

setInterval(function(){
    $('#currentDay').text(today.format('MMMM Do YYYY, LT'))}, 1000)
