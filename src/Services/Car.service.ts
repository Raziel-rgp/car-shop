/* eslint-disable no-constant-condition */
import Car from '../Domains/Car';
import Mortorcycle from '../Domains/Motorcycle';
import ICar from '../Interfaces/ICar';
import IMotorcycle from '../Interfaces/IMotorcycle';
import CarModel from '../Models/Car.model';
import MotorcycleModel from '../Models/Motorcycle.model';

const carro = 'Car';
const moto = 'Moto';
export default class Service {
  private _createCarDomain(car: ICar | undefined | null): Car | undefined | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  private _createMotoDomain(motor: IMotorcycle | undefined | null): Mortorcycle | undefined | null {
    if (motor) {
      return new Mortorcycle(motor);
    }
    return null;
  }

  async createNewCar(car: ICar) {
    const carModel = new CarModel();
    const newCar = await carModel.create(car);
    return this._createCarDomain(newCar);
  }

  async createNewMoto(Moto: IMotorcycle) {
    const motoModel = new MotorcycleModel();
    const newMoto = await motoModel.create(Moto);
    return this._createMotoDomain(newMoto);
  }

  async findAll(vehicle: string) {
    if (vehicle === carro) {
      const car = new CarModel();
      const cars = await car.getAll();
      const carsMap = cars.map((car1) => this._createCarDomain(car1));
      return carsMap;
    }
    if (vehicle === moto) {
      const motor = new MotorcycleModel();
      const motos = await motor.getAll();
      const motosMap = motos.map((moto1) => this._createMotoDomain(moto1));
      return motosMap;
    }
  }

  async findById(id: string, vehicle: string) {
    if (vehicle === carro) {
      const car = new CarModel();
      const cars = await car.getById(id);
      return this._createCarDomain(cars);
    }
    if (vehicle === moto) {
      const motor = new MotorcycleModel();
      const motos = await motor.getById(id);
      return this._createMotoDomain(motos);
    }
  }

  async updateCar(id: string, car: ICar) {
    const carr = new CarModel();
    const cars = await carr.update(id, car);
    return this._createCarDomain(cars);
  }

  async updateMoto(id: string, motors: IMotorcycle) {
    const mooto = new MotorcycleModel();
    const motos = await mooto.update(id, motors);
    return this._createMotoDomain(motos);
  }
}