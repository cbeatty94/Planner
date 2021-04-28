var today = moment()

$('#currentDay').text(today.format('MMMM Do YYYY, LT'));

setInterval(function(){
    $('#currentDay').text(today.format('MMMM Do YYYY, LT'))}, 1000)


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
// local storage

$('#textarea1').val(localStorage.textarea1)
$('#textarea2').val(localStorage.textarea2)
$('#textarea3').val(localStorage.textarea3)
$('#textarea4').val(localStorage.textarea4)
$('#textarea5').val(localStorage.textarea5)
$('#textarea6').val(localStorage.textarea6)
$('#textarea7').val(localStorage.textarea7)
$('#textarea8').val(localStorage.textarea8)
$('#textarea9').val(localStorage.textarea9)


// background color changes
function timeColor(){
    var time = new Date().getHours();
    console.log(time);

}