export class Employee{
    constructor(id,name){
        this.id=id;
        this.name=name;
    }

    display(){
        console.log(`ID = ${this.id}, NAME = ${this.name}`);
    }
}