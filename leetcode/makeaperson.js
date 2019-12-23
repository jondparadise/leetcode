var Person = function (firstAndLast) {
    var name = firstAndLast.split(' ');
    this.getFullName = function () { return name[0] + " " + name[1]; };
    this.getFirstName = function () { return name[0] };
    this.getLastName = function () { return name[1] };
    this.setFirstName = function (value) { name[0] = value };
    this.setLastName = function (value) { name[1] = value };
    this.setFullName = function (value) {
        name[0] = value.split(' ')[0];
        name[1] = value.split(' ')[1];
    }
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());
