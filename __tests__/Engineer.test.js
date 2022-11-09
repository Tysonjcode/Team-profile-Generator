// using the Engineer constructor 
const Engineer = require('../lib/Engineer');

// creating the engineer object  
test('creates an Engineer object', () => {
    const engineer = new Engineer('Tyson', 90, 'tyson@alittledesigner.com', 'Tysonjcode');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

// pulls github from getGithub()
test('gets engineer github value', () => {
    const engineer = new Engineer('Tyson', 90, 'tyson@alittledesigner.com', 'Tysonjcode');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// pulls role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('Tyson', 90, 'tyson@alittledesigner.com', 'Tysonjcode');

    expect(engineer.getRole()).toEqual("Engineer");
});