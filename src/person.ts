class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}
  get fullName() {
    return this.firstName + " " + this.lastName;
  }
}

class Student extends Person {}
class Teacher extends Person {
  get fullName() {
    return "Full Name: " + "Professor " + super.fullName;
  }
}
class Principal extends Person {
  get fullName() {
    return "Full Name: " + "Principal " + super.fullName;
  }
}

const student = new Student("Alisan", "Husen");
const teacher = new Teacher("Md. Mokbul", "Shekh");
const principal = new Principal("Md. Motiur", "Master");

const printPerson = (people: Person[]) => {
  for (let person of people) console.log(person.fullName);
};
printPerson([student, teacher, principal]);
