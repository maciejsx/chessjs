var Figure = function() {
    var public = {};
    var image;

    var position;
    public.position = position;

    function setPosition(_x, _y) {
        public.position.x = _x;
        public.position.y = _y;
    }

    function getPosition() {
        return public.position;
    }

    public.getImage = getImage;
    function getImage() {
        return public.image;
    }

    public.move = move;
    function move() {

    }

    public.allowedMove = allowedMove;
    function allowedMove() {

    }
}