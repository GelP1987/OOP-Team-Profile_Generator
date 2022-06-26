// The application must have these classes: Employee, Manager, Intern, and Intern. The tests for these classes (in the _tests_ directory) must all pass.
test("creates Intern object", () => {
    const employee = new Intern("Kangaskhan","115","Kangaskhan@email.email", "Kent")
      expect(employee.name()).toBe("Kangaskhan");
      expect(employee.employeeId()).toBe("115");
      expect(employee.email()).toBe("Kangaskhan@email.email");
      expect(employee.school()).tobe("Kent")
    });
    
    test("exports Intern to use in index", () => {});