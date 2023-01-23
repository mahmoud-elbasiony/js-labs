// class test{
//     #pv
//     constructor(pv,pc){
//         this.#pv=pv;
//         this.pc=pc;
//     }
//     set pv(t){
//         this.#pv=t;
//     }
//     set pc(t){
//         this.pc=t;
//     }
// }

class Person{
    #healthRate;
    constructor(name,money=10000,sleepMode="happy",health_Rate=100){
        this.name=name;
        this.money=money;
        this.healthRate=health_Rate;
        this.sleepMode=sleepMode;

    }
    get healthRate(){
        return this.#healthRate;
    }
    set healthRate(v){
        this.#healthRate=v;
        if(this.#healthRate>100){
            this.#healthRate=100
        }else if(this.#healthRate<0){
            this.#healthRate=0;
        }
    }
    Buy(item){
        this.money-=item*10;
        return this.money;
    }
    Eat(meals){
        switch(meals){
            case 3:
                this.healthRate=100;
                break;
            case 2:
                this.healthRate=75;
                break;
            case 1:
                this.healthRate=50;
                break;
        }
        return this.healthRate;
    }
    Sleep(hours){
        if(hours==7){
            this.sleepMode="happy";
        }else if(hours>7){
            this.sleepMode="lazy";
        }else{
            this.sleepMode="tired";
        }
        return this.sleepMode;
    }
}

class Employee extends Person{
    #salary;
    static id=1;
    constructor(name,email,isManager=false,salary=1000,workMood="happy",money=10000,sleepMode="happy",healthRate=100){
        super(name,money,sleepMode,healthRate)
        this.id=Employee.id++;
        this.email=email;
        this.workMood=workMood;
        this.salary=salary;
        this.isManager=isManager;
    }
    get salary(){
        return this.#salary;
    }
    set salary(salary){
        this.#salary=salary<1000?1000:salary;
    }
    work(hours){
        if(hours==8){
            this.workMood="happy";
        }else if(hours<8){
            this.workMood="lazy";
        }else{
            this.workMood="tired";
        }
        return this.workMood;
    }

}
class Office{
    #employees;
    constructor(name,employees=[]){
        this.name=name;
        this.#employees=employees;
        
    }
    displayEmpShort(emp){
        return `
        employee id: ${emp.id}
        employee name: ${emp.name}
        ___________________`
    }
    displayEmp(emp){
        
    
        return `
        id: ${emp.id}
        name: ${emp.name}
        email: ${emp.email}
        manager: ${emp.isManager?"yes":"no"}
        salary: ${emp.isManager?"*******":emp.salary}
        work Mood: ${emp.workMood}
        money: ${emp.money}
        health Rate: ${emp.healthRate}
        sleep Mode: ${emp.sleepMode}`
    }
    hire(emp){
        this.#employees.push(emp);
        
    }
    fire(id){
        this.#employees=this.#employees.filter(emp=>emp.id!=id);
    }
    getAllEmployees(){
        if(this.#employees.length>0){
            return this.#employees.map(emp=>this.displayEmpShort(emp));
        }else{
            return "no employees found"
        }
    }
    getEmployee(id){
        let emp=this.#employees.find((emp)=>emp.id==id);
        if(emp==undefined){
            return "Employee not found";
        }else{
           return this.displayEmp(emp);
        }
    }

}
let emps=[];
emps.push(new Employee("mahmoud","mahmoud@gmail.com",true,15000));
emps.push(new Employee("ahmed","ahmed@gmail.com",false,11000));
emps.push(new Employee("ali","ali@gmail.com",false,14000));
emps.push(new Employee("hossam","hossam@gmail.com",false,12000));
emps.push(new Employee("yossef","yossef@gmail.com",false,10200));
emps.push(new Employee("mohamed","mohamed@gmail.com",false,1000));
emps.push(new Employee("shehab","shehab@gmail.com",false,100));

let office=new Office("iti",emps);
function menu(){
out:while(true){
    let choice=prompt(`
    enter choice:
        1:add employee
        2:remove employee
        3:print all employees
        4:get employee
        5:exit`);
        
    console.log(choice);

    let id,name,email,ismng,salary,emp;
    
    switch (choice) {
        case '1':
        case "hire":
            name=prompt("enter employee name:");
            email=prompt("enter employee email:");
            ismng=confirm("is he a manager?");
            salary=Number(prompt("enter employee salary:"));
            emp=new Employee(name,email,ismng,salary);
            office.hire(emp);
            break;
        case '2':
        case "fire":
            id=Number(prompt("enter employee id:"));
            office.fire(id);
            break;
        case '3':
        case "fire":
            alert(office.getAllEmployees());
            break;
        case '4':
        case "fire":
            id=Number(prompt("enter employee id:"));
            console.log(id);
            alert(office.getEmployee(id));
            
            break;
        default:
            break out;
    }
}
}