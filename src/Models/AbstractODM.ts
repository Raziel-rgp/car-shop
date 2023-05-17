import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from 'mongoose';

export default abstract class AbstractODM<T> {
  protected model: Model<T>;
  protected schema: Schema;
  protected modelName: string;

  constructor(schema: Schema, modelName: string) {
    this.schema = schema;
    this.modelName = modelName;
    this.model = models[this.modelName] || model(modelName, this.schema);
  }

  async create(obj: T): Promise<T> {
    return this.model.create({ ...obj });
  }

  async getAll(): Promise<T[]> {
    return this.model.find();
  }

  async getById(id: string): Promise<T | null> {
    if (!isValidObjectId(id)) {
      throw new Error('Invalid mongo id');
    }
    return this.model.findById(id);
  }

  async update(ids: string, obj: T): Promise<T | null> {
    if (!isValidObjectId(ids)) {
      throw new Error('Invalid mongo id');
    }
    return this.model.findByIdAndUpdate(
      { _id: ids },
      { ...obj } as UpdateQuery<T>,
      { new: true },
    );
  }
}