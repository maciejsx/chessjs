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

    public.removeHigherPriority = removeHigherPriority;
    function removeHigherPriority() {
        return public.array.shift();
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

    var d = new Array();
    public.d = d;

    public.initd = initd;
    function initd() {
        public.d[i] = 0;
        for (var i = 1; i < public.graph.size; i++) {
            public.d[i] = null;
        }
    }

    public.queue = new Queue();
    function addVertesToQueue() {
        for (var i = 0; i < public.graph; i++) {
            public.queue.insert(public.graph[i]);
        }
    }

    public.algorythm = algorythm;
    function algorythm() {
        while(!empty(public.d)) {
            public.d.getPathValue();
        }
    }




}