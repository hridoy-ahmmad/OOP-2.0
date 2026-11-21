class Account {
  id: number;
  name: string;
  balance: number;
  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this.balance = balance;
  }
  deposit(amount: number) {
    return (this.balance = this.balance + amount);
  }
}
const account = new Account(1123, "sd", 45000);
account.deposit(0);

console.log(account.balance);
