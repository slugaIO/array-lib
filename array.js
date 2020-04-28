// web sluga.io
console.clear();


Array.prototype.print = function(){
    console.log("# the array");
    console.table(this);
}

const random_array = (n) => {
    let array = [n];
    console.time("random");
    for(idx = 0; idx <= n; idx++){
        array[idx] = Math.floor((Math.random() * n) + 1);
    }
    console.timeEnd("random");
    return array;
};

let array = random_array(10000000);

// Test ausgabe
console.time("timer");
for(let x = 0; x  < array.length; x++){
    // nothing
}
console.timeEnd("timer");
console.time("timer");
array.forEach((elem) => {
    // nothing
});
console.timeEnd("timer");