// using the Employee constructor 
const Employee = require('../lib/Employee');

// creates the employee object 
test('creates an employee object', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// pulls id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// pulls id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// pulls emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// pulls role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

