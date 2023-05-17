import sinon from 'sinon';
import { expect } from 'chai';
import Service from '../../../src/Services/Car.service';
import CarModel from '../../../src/Models/Car.model';
import Car from '../../../src/Domains/Car';

import { carroNovo, carroNovoInfo, listCarros, carroNovoUpdated } from '../mock';

describe('Testes Service', function () {
  afterEach(function () {
    sinon.restore();
  });

  it('createNewCar', async function () {
    sinon.stub(CarModel.prototype, 'create').resolves(carroNovo);
    const service = new Service();
    const result = await service.createNewCar(carroNovoInfo);
    expect(result).to.be.deep.equal(carroNovo);
  });

  it('findAll', async function () {
    sinon.stub(CarModel.prototype, 'getAll').resolves(listCarros);
    const service = new Service();
    const result = await service.findAll('Car');
    expect(result).to.be.deep.equal(listCarros.map((carro) => new Car(carro)));
  });

  it('findById', async function () {
    sinon.stub(CarModel.prototype, 'getById').resolves(carroNovo);
    const service = new Service();
    const result = await service.findById(carroNovo.id, 'Car');
    expect(result).to.be.deep.equal(new Car(carroNovo));
  });

  it('updateCar', async function () {
    sinon.stub(CarModel.prototype, 'update').resolves(carroNovoUpdated);
    const service = new Service();
    const result = await service.updateCar(carroNovoUpdated.id, carroNovoUpdated);
    expect(result).to.be.deep.equal(carroNovoUpdated);
  });
});