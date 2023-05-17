import Vehicle from './Vehicle';
import IMotorcycle from '../Interfaces/IMotorcycle';

class Mortorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(moto: IMotorcycle) {
    super(moto);
    this.category = moto.category;
    this.engineCapacity = moto.engineCapacity;
  }

  public getCategory(): string {
    return this.category;
  }

  public getEngineCapacity(): number {
    return this.engineCapacity;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  public setEngineCapacity(engineCapacity: number): void {
    this.engineCapacity = engineCapacity;
  }
}

export default Mortorcycle;