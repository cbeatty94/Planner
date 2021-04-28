var today = moment()

$('#currentDay').text(today.format('MMMM Do YYYY, LT'));

setInterval(function(){
    $('#currentDay').text(today.format('MMMM Do YYYY, LT'))}, 1000)

const rows = document.getElementsByClassName("row");
var currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
    rowHour = parseInt(rowIdString);
    }
    if (rowHour) {
        if (currentHour === rowHour) {
            setColor(row, 'red');
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}
