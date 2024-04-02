import type { OmitDeep } from '@/@types/utils/omit-deep'
import type { IDiscount } from '../discounts/protocols'
import type { IProduct } from '../products/protocols'

export declare interface ProductItemReturn {
  id: number
  status: string
  uses: number
  cycles: number
  quantity: number
  created_at: string
  updated_at: string
  product: IProduct
  pricing_schema: PricingSchema
  discounts: IDiscount[]
}

export declare interface ProductItemBody {
  product_id: number
  subscription_id: number
  cycles: number
  quantity: number
  pricing_schema: OmitDeep<PricingSchema, 'id'>
}

export declare interface ProductItemDiscount {
  id: number
  product: IProduct
}

export declare interface PricingSchema {
  id: string
  short_format: string
  price: number
  minimum_price: number
  schema_type: string
  pricing_ranges: PricingRange[]
  created_at: string
}

export declare interface PricingRange {
  id: string
  start_quantity: number
  end_quantity: number
  price: number
  overage_price: number
}
