import { Types } from 'mongoose';

export interface IProperty {
  urgent_sale: boolean;
  property_name: string;
  property_type: string;
  sale_method: string;
  sale_price: string;
  deposit: string;
  premium_cost: string;
  management_cost: string;
  price_nego: boolean;
  gross_leasable_area: number;
  exclusive_area: number;
  building_area: number;
  land_area: number;
  postal_code: string;
  detail_address: string;
  floor_plan: string;
  property_picture: string;
  year_built: number;
  availability: string;
  parking: string;
  direction: string;
  floor: number;
  total_floors: number;
  total_households: number;
  room: number;
  washroom: number;
  building_structure: string;
  description: string;
  building_type: string;
  hoist: number;
  power: number;
  area_of_use: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}

export interface ICoordinate {
  property_name: Types.ObjectId;
  latitude: number;
  longitude: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
