import { Request, Response, NextFunction } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import Service from '../Services/Car.service';

export default class MotoController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: Service;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new Service();
  }

  async createMoto() {
    let sTatus = false;

    if (typeof this.req.body.status !== 'undefined') {
      sTatus = this.req.body.status;
    }
    const moto: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: sTatus,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMoto = await this.service.createNewMoto(moto);
      return this.res.status(201).json(newMoto);
    } catch (error) {
      this.next(error);
    }
  }

  async getAllMoto() {
    try {
      const moto = await this.service.findAll('Moto');
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  async getByIdMoto() {
    const { id } = this.req.params;
    try {
      const moto = await this.service.findById(id, 'Moto');
      if (moto === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }

  async updateMoto() {
    const { id } = this.req.params;
    const { ...all } = this.req.body;
    try {
      const motooors = await this.service.findById(id, 'Moto');
      if (motooors === null) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      const moto = await this.service.updateMoto(id, { ...all });
      return this.res.status(200).json(moto);
    } catch (error) {
      this.next(error);
    }
  }
}