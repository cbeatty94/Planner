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
        } else if ((currentHour < rowHour) && (currentHour > rowHour - 8)) {
            setColor(row, "green");
        } else if ((currentHour > rowHour) && (currentHour < rowHour + 8)) {
            setColor(row, "lightgrey");
        } else {
            setColor(row, "white");
        }
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

var saveBtn = $('.row').children('.btn');

saveBtn.click(function(event) {
    event.preventDefault();
    var textInput = $(this.parentNode).children('.description').attr('id');
    var inputToStorage = $(this.parentNode).children('.description').val();
    localStorage.setItem(textInput, inputToStorage);
})

for (let index = 0; index < 9; index++) {
    $(`#textarea${index}`).text(localStorage.getItem(`textarea${index}`));
}

