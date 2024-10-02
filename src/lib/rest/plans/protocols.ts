import type { ProductsReturn } from '../products/protocols'
import type { VindiMetadata } from '../protocols'

export declare interface PlanBody {
  name: string
  interval: string
  interval_count: number
  billing_trigger_type: string
  billing_trigger_day: number
  billing_cycles: number
  code?: string
  description: string
  installments: number
  invoice_split: boolean
  status: string
  plan_items: PlanItemBody[]
  metadata?: VindiMetadata
}

export declare interface PlanItemBody {
  cycles: number
  product_id: number
}

export declare interface PlanReturn {
  id: number
  name: string
  interval: string
  interval_count: number
  billing_trigger_type: string
  billing_trigger_day: number
  billing_cycles: number
  code: string
  description: string
  status: string
  installments: number
  invoice_split: boolean
  interval_name: string
  created_at: string
  updated_at: string
  plan_items: PlanItemReturn[]
  metadata: VindiMetadata
}

export declare interface IPlan {
  id: number
  name: string
  code: string
}

export declare interface PlanItemReturn {
  id: number
  product: ProductsReturn
  pricing_schema: PricingSchema
  cycles: number
  created_at: string
  updated_at: string
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
