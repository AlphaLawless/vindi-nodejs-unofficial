import type { OmitDeep } from '@/@types/utils/omit-deep'
import type { VindiMetadata } from '../protocols'

export declare interface ProductsBody {
  name: string
  code?: string
  unit: string
  status: string
  description: string
  invoice: string
  pricing_schema: OmitDeep<PricingSchema, 'id'>
  metadata?: VindiMetadata
}

export declare interface ProductsReturn {
  id: number
  name: string
  code: string
  unit: string
  status: string
  description: string
  invoice: string
  created_at: string
  updated_at: string
  pricing_schema: PricingSchema
  metadata: VindiMetadata
}

export declare interface IProduct {
  id: number
  name: string
  code: string
}

export declare interface PricingSchema {
  id: string
  short_format?: string
  price: number
  minimum_price: number
  schema_type: string
  pricing_ranges: PricingRange[]
  created_at?: string
}

export declare interface PricingRange {
  id: string
  start_quantity: number
  end_quantity: number
  price: number
  overage_price: number
}
