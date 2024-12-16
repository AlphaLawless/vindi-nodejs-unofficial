import type { VindiMetadata } from '../protocols'

export declare interface PeriodReturn {
  id: number
  billing_at: string
  cycle: number
  start_at: string
  end_at: string
  duration: number
  subscription: {
    id: number
    code: string
    plan: {
      id: number
      name: string
      code: string
    }
    customer: {
      id: number
      name: string
      email: string
      code: string
    }
  }
  created_at: string
  updated_at: string
}

export declare interface PeriodUsagesReturn {
  id: number
  description: string
  created_at: string
  metadata: VindiMetadata
  product_item: {
    id: number
    product: {
      id: number
      name: string
      code: string
    }
  }
  bill: {
    id: number
    code: string
  }
  quantity: number
}
