// The application must have these classes: Employee, Manager, Engineer, and Intern. The tests for these classes (in the _tests_ directory) must all pass.
test("creates Engineer object", () => {
    const employee = new Engineer("Kamber","99","kamber@email.email", "KamberHub")
      expect(employee.name()).toBe("Kamber");
      expect(employee.id()).toBe("100");
      expect(employee.email()).toBe("Kamber@email.email");
      expect(employee.github()).tobe("KamberHub")
    });
    
    test("exports Engineer to use in index", () => {});
