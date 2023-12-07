//write your code here to make the tests pass

class Document {
    constructor(employeeName) {
        this.employeeName = employeeName;
    }
}

class Employee {
    constructor(name) {
        this.name = name;
    }

    work(office) {
        for (let i = 0; i < 10; i++) {
            office.addDocument(new Document(this.name));
        }
    }
}

class Manager {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    hireEmployee(employee) {
        this.employees.push(employee);
    }

    askEmployeesToWork(office) {
        for (const employee of this.employees) {
            employee.work(office);
        }
    }
}

class Cleaner {
    constructor(name) {
        this.name = name;
    }

    clean() {
        console.log("clean");
    }
}

class Office {
    constructor() {
        this.documents = [];
        this.managers = [];
        this.cleaners = [];
    }

    addDocument(document) {
        this.documents.push(document);
    }

    hireCleaner(name) {
        const cleaner = new Cleaner(name);
        this.cleaners.push(cleaner);
    }

    hireManager(name) {
        const manager = new Manager(name);
        this.managers.push(manager);
    }

    startWorkDay() {
        for (const manager of this.managers) {
            manager.askEmployeesToWork(this);
        }

        for (const cleaner of this.cleaners) {
            cleaner.clean();
        }
    }
}


const office = new Office();

office.hireCleaner("elias");
office.hireManager("khoury");

office.startWorkDay();

