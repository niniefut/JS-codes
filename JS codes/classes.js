class patient{
    constructor(name, id, ward){
        this.name=name;
        this.id=id;
        this.ward=ward;
    }
    displayInfo(){
        console.log(`Name: ${this.name}`);
        console.log(`ID: ${this.id}`);
        console.log(`Ward: ${this.ward}`);
    }
}
const patient1= new patient("Tomike",1256,"Maternity");
patient1.displayInfo();
console.log();
const patient2= new patient("Adeoye", 2867, "Paediatric");
patient2.displayInfo();