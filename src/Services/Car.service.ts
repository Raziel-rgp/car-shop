import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/Car.model';

export default class CarService {
  private _createCarDomain(car: ICar | undefined): Car | undefined {
    if (car) {
      return new Car(car);
    }
  }

  async createNewCar(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this._createCarDomain(newCar);
  }
}