var board = new Board();

function Board() {
    var BOARD_SIZE = 64;
    var ROW_SIZE = 8;
    var public = {};
    var fields = {};
    var currentFigure;

    public.currentFigure = currentFigure;

    public.fields = fields;

    public.initFields = initFields;
    function initFields() {
        for (var index = 0; index < BOARD_SIZE; index++) {
            if (index > ROW_SIZE && index < BOARD_SIZE - ROW_SIZE) {
                continue;
            }
            fields[index] = new Pawn();
        }
    }

    public.removeFieldAtPosition = removeFieldAtPosition;
    function removeFieldAtPosition(x, y) {
        public.fields[x * ROW_SIZE + y] = null;
    }

    public.moveFields = moveFields;
    function moveFields(xFrom, yFrom, xTo, yTo) {
        public.fields[xTo * ROW_SIZE + yTo] = public.fields[xFrom * ROW_SIZE + yFrom];
        removeFieldAtPosition(xFrom, yFrom);
    }

    public.renderFieldBackgroud = renderFieldBackgroud;
    function renderFieldBackgroud(element) {
        $('#element').css('background-color', 'red');
    }

    public.refreshField = refreshField;
    function refreshField() {
        for (var index = 0; index < fields.length; index++) {
            if (fields[index] == null ) {
                continue;
            }
            //set color according to value
            fields[index] = ;
        }
    }

    public.setElementBackgroundImage = setElementBackgroundImage;
    function setElementBackgroundImage(figure) {
        $('#' . element).css('background-image', '');
    }
}
