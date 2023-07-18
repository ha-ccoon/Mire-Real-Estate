import { Schema, model } from 'mongoose';
import { IProperty } from '../types/database';

const PropertySchema = new Schema<IProperty>({
  urgent_sale: {
    type: Boolean,
    required: true,
  },
  property_name: {
    type: String,
    required: true,
  },
  property_type: {
    type: String,
    required: true,
  },
  sale_method: {
    type: String,
    required: true,
  },
  sale_price: {
    type: String,
    required: true,
  },
  deposit: String,
  premium_cost: String,
  management_cost: String,
  price_nego: {
    type: Boolean,
    required: true,
  },
  gross_leasable_area: Number,
  exclusive_area: Number,
  building_area: Number,
  land_area: Number,
  postal_code: {
    type: String,
    required: true,
  },
  detail_address: {
    type: String,
    required: true,
  },
  floor_plan: String,
  property_picture: String,
  year_built: Number,
  availability: {
    type: String,
    required: true,
  },
  parking: String,
  direction: String,
  floor: Number,
  total_floors: Number,
  total_households: Number,
  room: Number,
  washroom: Number,
  building_structure: String,
  description: {
    type: String,
    required: true,
  },
  building_type: String,
  hoist: Number,
  power: Number,
  area_of_use: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null },
});

const Property = model<IProperty>('Property', PropertySchema);

export default Property;
