// Employee constructor 
const Employee = require('../lib/Employee');

// Employee objects
test('creates an employee object', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// This will pull the id from getId() 
test('gets employee name', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

// This will pull the id from getId() 
test('gets employee ID', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// This will pull the emails from getEmail()
test('gets employee email', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// This will pull the role from getRole()
test('gets role of employee', () => {
    const employee = new Employee('Tyson', 90, 'tyson@alittledesigner.com');

    expect(employee.getRole()).toEqual("Employee");
}); 

