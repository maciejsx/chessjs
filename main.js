var ROW_SIZE = 8;

function generateField() {
    $('.field').append('<div class="board"></div>');

    var columnName;

    var column = 0;

    for (var row = 0; row < ROW_SIZE; row++) {
        $('.board').append('<div class="row" id="row' + row + '"></div>');
        for (column = 0; column < ROW_SIZE; column++) {
            $('#row' + row).append('<div class="column" id="column' + row + column + '"></div>');
            console.log(row + column);
            if ((row + column) % 2 === 0) {
                $('#column' + row + column).css('background-color', 'black');
            }
        }
    }
}

$(document).ready(function() {
    $('.start').on('click', function () {
        generateField();
    });
});