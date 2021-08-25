var x = function () {
    return 10;
}

console.log(x())

const arrowValue = (t: number) => 100 * t;

console.log(arrowValue(2))


var employee = {
    id: 1,
    greet: function () {
        setTimeout(() => { console.log("emp id :" + this.id) }, 1000);
    }
};
employee.greet();


let displayColors = function (message: any, ...colors: any) {
    console.log(message);
    for (let i in colors) {
        console.log(colors[i])
    }
}

let colorArray = ['red', 'yellow', 'blue'];
displayColors('colors now..', ...colorArray)

