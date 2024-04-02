export interface BillItemsReturn {
  id: number
  amount: number
  quantity: number
  pricing_range_id: number
  description: string
  pricing_schema: PricingSchema
  product: Product
  product_item: ProductItem
  discount: Discount
  usages: Usage[]
}

export interface PricingSchema {
  id: string
  short_format: string
  price: number
  minimum_price: number
  schema_type: string
  pricing_ranges: PricingRange[]
  created_at: string
}

export interface PricingRange {
  id: string
  start_quantity: number
  end_quantity: number
  price: number
  overage_price: number
}

export interface Product {
  id: number
  name: string
  code: string
}

export interface ProductItem {
  id: number
  product: Product2
}

export interface Product2 {
  id: number
  name: string
  code: string
}

export interface Discount {
  id: number
  discount_type: string
  percentage: number
  amount: number
  quantity: number
  cycles: number
}

export interface Usage {
  id: number
  description: string
  created_at: string
  quantity: number
  base_amount: number
}
