import { Request, Response, NextFunction } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/Car.service';

export default class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  async createCar() {
    let sTatus = false;

    if (typeof this.req.body.status !== 'undefined') {
      sTatus = this.req.body.status;
    }
    const car: ICar = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: sTatus,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      seatsQty: this.req.body.seatsQty,
    };

    try {
      const newCar = await this.service.createNewCar(car);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  async getAllCar() {
    try {
      const cars = await this.service.findAll('Car');
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  }

  async getByIdCar() {
    const { id } = this.req.params;
    try {
      const car = await this.service.findById(id, 'Car');
      if (car === null) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }

  async updateCar() {
    const { id } = this.req.params;
    const { ...all } = this.req.body;
    try {
      const caro = await this.service.findById(id, 'Car');
      if (caro === null) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      const car = await this.service.updateCar(id, { ...all });
      return this.res.status(200).json(car);
    } catch (error) {
      this.next(error);
    }
  }
}