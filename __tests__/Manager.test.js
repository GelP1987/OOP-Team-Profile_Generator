// The application must have these classes: Employee, Manager, Engineer, and manager. The tests for these classes (in the _tests_ directory) must all pass.
test("creates Manager object", () => {
    const manager = new Manager("Karen","115","Karen@email.email", "221 B")
      expect(manager.name()).toBe("Karen");
      expect(manager.id()).toBe("115");
      expect(manager.email()).toBe("Karen@email.email");
      expect(manager.officeNumber()).tobe("221 B")
    });
    
    test("exports manager to use in index", () => {});