// Only 1 class can be inherited just like java 

abstract class Department {
    static staticVariable = 'static var'
    // private readonly id: string
    // private name: string;
    protected employees: string[] = [] //no access as account.employees[0]
    constructor(public name: string, protected readonly id: string) { //for the convienience of not double definition
        this.name = name;
        this.id = id
        console.log(Department.staticVariable); //only accessible with the help of the class name

    }

    static createEmployee(name: string) {
        return { name: name }
    }
    abstract describe(this: Department): void //abstract class has no body in base class but every child will have to give the implementation


    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInfo() {
        console.log("The no. of employees is " + this.employees.length);
        console.log(this.employees);


    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, "IT");
        this.admins = admins
    }
    describe() {
        console.log("Department : " + this.id);

    }
}

class AccountsDepartment extends Department {
    private lastReport: string
    private static instance: AccountsDepartment

    get mostRecentReport() {
        if (this.lastReport) {

            return this.lastReport
        }
        throw new Error('No report found')
    }

    set mostRecentReport(val: string) {
        if (!val) {
            throw new Error("Not a valid token")
        }
        this.addReport(val)
    }

    private constructor(id: string, private reports: string[]) {
        super(id, "Accounts")
        this.lastReport = reports[0]
    }

    static getInstance() {
        if (AccountsDepartment.instance) {
            return this.instance;
        }
        this.instance = new AccountsDepartment('d2', [])
        return this.instance
    }

    describe() {
        console.log("Department : " + this.id);

    }

    addEmployee(name: string) {
        if (name === "sanket")
            return
        this.employees.push(name)
        // Private property ony reserved for the base class, or through getter
        // Do protected -> just like java 
    }
    addReport(text: string) { //only specific to this class
        this.reports.push(text)
        this.lastReport = text
    }
    printReports() {
        console.log(this.reports);

    }
}

const empl1 = Department.createEmployee("Hello1")
console.log(empl1);


const accounts = new ITDepartment("Accounting", ["Sanket"])

accounts.describe()

accounts.addEmployee('lokesh')
accounts.addEmployee('sanket')
accounts.printEmployeeInfo()

// const accountCopy = { name: "sanket", describe: accounts.describe }
// accountCopy.describe()

const accounting = AccountsDepartment.getInstance()
const accounting2 = AccountsDepartment.getInstance()

console.log(accounting, accounting2); //singleton pattern -> same instance 

accounting.describe()
// accounting.mostRecentReport;  fails according to the error defined
accounting.addReport("Nothings great")
accounting.mostRecentReport;
accounting.printReports()
accounting.mostRecentReport = "something"  //works according to the logic
accounting.printReports()
accounting.printEmployeeInfo()
accounting.addEmployee('lokesh')
accounting.printEmployeeInfo()
