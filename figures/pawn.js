// var Pawn = function () {
//
// }

var x = new Queue();

function Queue() {
    var public = {};

    public.array = new Array();

    public.sorts = sorts;
    function sorts(a, b) {
        return a-b;
    }

    public.insert = insert;
    function insert(value) {
        public.array.push(value);
        public.array.sort(sorts);
    };

    public.compare = compare
    function compare() {
        return ;
    }

    public.finds = finds;
    function finds(key) {
        for (var index = 0; public.array.length; index++) {
            if (public.array[index] == key) {
                return public.array[index];
            }
        }
    }

    public.getValue = getValue;
    function getValue(key) {
        return finds(key);
    }

    return public;
}

var graph = new Graph();

function Graph() {
    public = {};
    var size = 5;

    var array = new Array();
    public.array = graph;

    public.init = init;
    function init() {
        for (var x = 0; x < size * size; x++) {
            public.array[x] = null;
        }
    }

    public.fillData = fillData;
    function fillData(number) {
        for (var index = 0; index < number; index++) {
            public.array[Math.floor(Math.random() * (size * size) - 1)] = Math.floor(Math.random() * (20) + 1);
        }
    }

    public.getPathValue = getPathValue;
    function getPathValue(from, to) {
        return array[from * size + to];
    }

    return public;
};

var blog = new Blog();

function Blog() {
    var public = {};

    var graph = new Graph();
    public.graph = graph;

    public.d = d;
    var d = new Array();

    public.initd = initd;
    function initd() {
        for (var i = 0; i < public.graph.size; i++) {
            
        }
    }



}