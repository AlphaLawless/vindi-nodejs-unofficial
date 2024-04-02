import type { VindiMetadata } from '../protocols'

export interface SubscriptionBody {
  start_at?: string
  plan_id: number
  customer_id: number
  code: string
  payment_method_code: string
  installments?: number
  billing_trigger_type?: string
  billing_trigger_day?: number
  billing_cycles?: number
  metadata?: VindiMetadata
  product_items: Array<Omit<Partial<ProductItem>, 'id'> & { id: number }>
  payment_profile?: PaymentProfile
  invoice_split?: boolean
  subscription_affiliates?: SubscriptionAffiliate[]
}

export declare interface SubscriptionReturn {
  id: number
  status: string
  start_at: string
  end_at: string
  next_billing_at: string
  overdue_since: string
  code: string
  cancel_at: string
  interval: string
  interval_count: number
  billing_trigger_type: string
  billing_trigger_day: number
  billing_cycles: number
  installments: number
  created_at: string
  updated_at: string
  customer: Customer
  plan: Plan
  product_items: ProductItem[]
  payment_method: PaymentMethod
  current_period: CurrentPeriod
  metadata: VindiMetadata
  payment_profile: PaymentProfile
  invoice_split: boolean
  subscription_affiliates: SubscriptionAffiliate[]
}

export declare interface Customer {
  id: number
  name: string
  email: string
  code: string
}

export declare interface Plan {
  id: number
  name: string
  code: string
}

export declare interface ProductItem {
  id: number
  status: string
  uses: number
  cycles: number
  quantity: number
  created_at: string
  updated_at: string
  product: Product
  pricing_schema: PricingSchema
  discounts: Discount[]
}

export declare interface Product {
  id: number
  name: string
  code: string
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

export declare interface Discount {
  id: number
  discount_type: string
  percentage: number
  amount: number
  quantity: number
  cycles: number
}

export declare interface PaymentMethod {
  id: number
  public_name: string
  name: string
  code: string
  type: string
}

export declare interface CurrentPeriod {
  id: number
  billing_at: string
  cycle: number
  start_at: string
  end_at: string
  duration: number
}

export declare interface PaymentProfile {
  id: number
  holder_name: string
  registry_code: string
  bank_branch: string
  bank_account: string
  card_expiration: string
  allow_as_fallback: boolean
  card_number_first_six: string
  card_number_last_four: string
  renewed_card: RenewedCard
  card_renewed_at: string
  token: string
  created_at: string
  payment_company: PaymentCompany
}

export declare interface RenewedCard {
  card_number_last_four: string
  card_expiration: string
}

export declare interface PaymentCompany {
  id: number
  name: string
  code: string
}

export declare interface SubscriptionAffiliate {
  affiliate_id: number
  amount: number
  amount_type: number
  status: string
}
