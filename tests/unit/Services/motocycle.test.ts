import sinon from 'sinon';
import { expect } from 'chai';
import Service from '../../../src/Services/Car.service';
import MotorcycleModel from '../../../src/Models/Motorcycle.model';
import Motorcycle from '../../../src/Domains/Motorcycle';

import { novaMoto, novaMotoInfo, motorcyclesArray, updatedMotorcycle } from '../mock';

describe('Testes Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('createNewCar', async function () {
    sinon.stub(MotorcycleModel.prototype, 'create').resolves(novaMoto);
    const service = new Service();
    const result = await service.createNewMoto(novaMotoInfo);
    expect(result).to.be.deep.equal(novaMoto);
  });

  it('findAll', async function () {
    sinon.stub(MotorcycleModel.prototype, 'getAll').resolves(motorcyclesArray);
    const service = new Service();
    const result = await service.findAll('Moto');
    expect(result).to.be.deep.equal(motorcyclesArray.map((carro) => new Motorcycle(carro)));
  });

  it('findById', async function () {
    sinon.stub(MotorcycleModel.prototype, 'getById').resolves(novaMoto);
    const service = new Service();
    const result = await service.findById(novaMoto.id, 'Moto');
    expect(result).to.be.deep.equal(new Motorcycle(novaMoto));
  });

  it('updateCar', async function () {
    sinon.stub(MotorcycleModel.prototype, 'update').resolves(updatedMotorcycle);
    const service = new Service();
    const result = await service.updateMoto(updatedMotorcycle.id, updatedMotorcycle);
    expect(result).to.be.deep.equal(updatedMotorcycle);
  });
});