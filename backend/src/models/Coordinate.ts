import { Schema, model } from 'mongoose';
import { ICoordinate } from '../types/database';

const CoordinateSchema = new Schema<ICoordinate>({
  property_name: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

const Coordinate = model<ICoordinate>('Coordinate', CoordinateSchema);

export default Coordinate;
