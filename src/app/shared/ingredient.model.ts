export class Ingredient {
  private name: string;
  private amount: number;

  constructor(name: string, amount: number) {
    this.setName(name);
    this.setAmount(amount);
  }

  public getName(): string {
    return this.name;
  }
  public setName(name: string) {
    this.name = name;
  }
  public getAmount(): number {
    return this.amount;
  }
  public setAmount(amount){
    this.amount = amount;
  }
}
