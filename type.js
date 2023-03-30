var names = [];
names.push(2); // no error
names.push("fgh"); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.
console.log(typeof (names));
