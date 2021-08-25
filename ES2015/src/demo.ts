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
    for (let i of colors) {
        console.log(i)
    }
}

let colorArray = ['red', 'yellow', 'blue'];
displayColors('colors now..', ...colorArray)

class Person {

    constructor(name: any) {
        console.log(`parent constructor ${name}`);
    }

    getID = () => {
        console.log('getting parent getID');

        return 10;
    };
}

class Employee extends Person {

    constructor(name: any) {

        super(name);

        console.log(`child constructor ${name}`);

    }

    getID = () => {

        console.log('getting child getID');

        return 50;
    };
}

let member = new Employee('ram');
console.log(member.getID());

