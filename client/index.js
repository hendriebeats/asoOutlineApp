import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

var sentance1 = document.getElementById('item1');
var sentance2 = document.getElementById('item2');
var sentance3 = document.getElementById('item3');
var x1 = 0, x2 = 0, x3 = 0;
var x = [0,1,2];
var resultingIndentValues = [];


interact(sentance1)
    .draggable({
        snap: {
        targets: [
            interact.createSnapGrid({ x: 90, y: 1 })
        ],
        range: Infinity,
        relativePoints: [ { x: 60, y: 30 } ]
    },
    inertia: true,
    restrict: {
        restriction: sentance1.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true
    }
})
.on('dragmove', function (event) {
    x[0]+= event.dx;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translateX(' + x[0] + 'px)';
});

interact(sentance2)
    .draggable({
        snap: {
        targets: [
            interact.createSnapGrid({ x: 90, y: 1 })
        ],
        range: Infinity,
        relativePoints: [ { x: 60, y: 30 } ]
    },
    inertia: true,
    restrict: {
        restriction: sentance2.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true
    }
})
.on('dragmove', function (event) {
    x[1] += event.dx;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translateX(' + x[1] + 'px)';
});

interact(sentance3)
    .draggable({
        snap: {
        targets: [
            interact.createSnapGrid({ x: 90, y: 1 })
        ],
        range: Infinity,
        relativePoints: [ { x: 60, y: 30 } ]
    },
    inertia: true,
    restrict: {
        restriction: sentance3.parentNode,
        elementRect: { top: 0, left: 0, bottom: 1, right: 1 },
        endOnly: true
    }
})
.on('dragmove', function (event) {
    x[2] += event.dx;

    event.target.style.webkitTransform =
    event.target.style.transform =
        'translateX(' + x[2] + 'px)';
});

function calculateIndent(){
    for(var i=0; i<3; i++){
        var currentIndent = Math.round((x[i]-.4375)/90);
        alert("Sentance " + (i+1) +" is indented " + currentIndent + " times");
        resultingIndentValues[i] = currentIndent;
    }
}
