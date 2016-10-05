
function createTableHeader() {

}

function generateField() {
    $('.field').append( '<table class=".table"></table>')
    for()
}

function parseDateFromString(stringDate) {
    return new Date(Date.parse(stringDate));
}

$(document).ready(function(){
    $('.a').on('click', function () {
       console.log('asd');
    });
    $('.b').on('click', function () {
        console.log('ddd');
    });
    console.log(parseDateFromString("2015"));
    $('.start').on('click', function () {
        $('.field').css('background-color', 'red');
    });

});
