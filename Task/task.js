'use strict'
function alert(text){
    console.log(text);
}
function makeBuffer() {
    let bufferValue = "";

    function string() {
        return bufferValue;
    }

    string.add = function(value) {
        if (isNaN(value))
            bufferValue += value + " ";
        else
            bufferValue += value;
    }

    string.print = string;

    string.clear = function() {
        bufferValue=" "
    }

    return string;
}

let buffer = makeBuffer();
buffer.add("JavaScript");
buffer.add("Вчити");
buffer.add("Потрібно!");
console.log(buffer.print())
console.log('-----------------------')
let buffer2 = makeBuffer ();
buffer2.add(0);
buffer2.add(1);
buffer2.add(0);
console.log (buffer2.print())
console.log('-----------------------')
let buffer3 = makeBuffer();
buffer3.add("Тест");
buffer3.add("тебе не з'їсть!");
console.log(buffer3.print());
buffer3.clear();
console.log(buffer3.print());
