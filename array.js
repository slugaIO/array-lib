// web sluga.io
console.clear();


Array.prototype.print = function(){
    console.log("# the array");
    console.table(this);
}

Array.prototype.iterator = function(){
    console.log(`array has ${this.length} elements`);
    console.time("for loop");
    for(x = 0; x < this.length; x++){
        //
    }
    console.timeEnd("for loop");
    console.time("forEach");
    this.forEach( (elem) => {
        // 
    });
    console.timeEnd("forEach");
}

const random_array = (n) => {
    let array = [n];
    console.time("random");
    for(idx = 0; idx < n; idx++){
        array[idx] = Math.floor((Math.random() * n) + 1);
    }
    console.timeEnd("random");
    return array;
};

let array = random_array(10000000);
array.iterator();