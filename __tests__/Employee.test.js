const Employee = require('../lib/Employee.js');
const employee = new Employee('Don', '1', 'aaa@aaa.com');

test (' get values from employee pbject', () => {
    expect(employee.name).toBe('Don');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('aaa@aaa.com');
})

test( 'get name with getName method', () => {
    expect(employee.getName()).toBe('Don')
});
// test('creates employee object', () => {
//     const employee = new Employee();

//     expect(typeof employee).toBe('object');

//     // expect(employee.email).toBe();
// });

// test('create employee name', () => {
//     const employee = new Employee('Don');

//     expect(employee.name).toEqual('Don');
// });

// test('create employee id', () => {
//     const employee = new Employee('name', 1);

//     expect(employee.id).toEqual(1)
// });

// test( 'create employee email', () => {
//     const employee = new Employee('name', 1, 'email');

//     expect(employee.email).toEqual('email')
// });




