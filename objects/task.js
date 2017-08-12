var task = {
    title: 'My Title',
    description: 'My Description'
};

// var task = Object.create(Object.prototype);
// task.title = " My Title";
// task.description = "My Description";

// task.toString = function() {
//     return this.title + ' ' + this.description;
// }

Object.defineProperty(task, "toString", {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,
    enumerable: false,
    configurable: false
});

task.toString = 'hi';

console.log(task);
console.log(task.toString());