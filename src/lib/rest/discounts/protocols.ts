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
  product_item: ProductItem
}

export declare interface ProductItem {
  id: number
  product: Product
}

export declare interface Product {
  id: number
  name: string
  code: string
}
