const Employee= require('../lib/Employee')
const Employee = new Employee("KSteve","99","ksteve@email.email")
    test("tests if we can get constructor values for employee object", () => {
      expect(employee.name()).toBe("KSteve");
      expect(employee.id()).toBe("99");
      expect(employee.email()).toBe("KSteve@email.email");
    });
    
    test("tests if we can get the name value from getName", () => {
        expect(employee.getName()).toBe('KSteve');
    });

    test("tests to see if we can get the id value from getID", () => {
        expect(employee.getId()).tobe("99");
    });

    test("tests to see if we can get the email value from getEmail", () => {
        expect(employee.getEmail()).tobe('KSteve@email.email');
    });

    test("tests to see if we can get the role value from getRole", () => {
        expect(employee.getRole()).tobe('Employee')
    });