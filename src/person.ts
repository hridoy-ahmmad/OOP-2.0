class Person {
  constructor(
    public firstName: string,
    public lastName: string,
  ) {}
  get fullName() {
    return "Full Name: " + this.firstName + " " + this.lastName;
  }
}

class Student extends Person {}
class Teacher extends Person {
  get fullName() {
    return "Full Name: "+ 'Professor ' + this.firstName + " " + this.lastName;
  }
}

const student = new Student("Alisan", "Husen");
const teacher = new Teacher('Md. Mokbul', 'Shekh')


console.log(teacher.fullName);
