import type { ProductItemDiscount } from '../product_items/protocols'

export declare interface DiscountBody {
  product_item_id: number
  discount_type: string
  percentage: number
  amount: number
  quantity: number
  cycles: number
}

export declare interface DiscountReturn {
  id: number
  discount_type: string
  percentage: number
  amount: number
  quantity: number
  cycles: number
  status: string
  created_at: string
  updated_at: string
  product_item: ProductItemDiscount
}

export declare interface IDiscount {
  id: number
  discount_type: string
  percentage: number
  amount: number
  quantity: number
  cycles: number
}
