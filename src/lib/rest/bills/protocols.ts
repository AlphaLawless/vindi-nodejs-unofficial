import type { OmitDeep } from '@/@types/utils/omit-deep'
import type { ICustomer } from '../customers/protocols'
import type { IDiscount } from '../discounts/protocols'
import type { IPlan } from '../plans/protocols'
import type { IProduct } from '../products/protocols'
import type { VindiMetadata } from '../protocols'

export declare interface BillsBody {
  customer_id: number
  code?: string
  installments?: number
  payment_method_code: string
  billing_at?: string
  due_at?: string
  bill_items: BillItemsBody[]
  bill_affiliates?: BillAffiliatesSchema
  metadata?: VindiMetadata
  payment_profile?: PaymentProfileBody
  payment_condition?: PaymentConditionSchema
}

export declare interface BillItemsBody {
  product_id: number
  product_code?: string
  amount: number
  description?: string
  quantity?: number
  pricing_schema?: OmitDeep<
    Partial<PricingSchema>,
    'id' | 'short_format' | 'created_at'
  >
}

export declare interface PaymentProfileBody {
  id: number
  token: string
  holder_name: string
  registry_code: string
  bank_branch: string
  bank_account: string
  card_expiration: string
  allow_as_fallback: boolean
  card_number: string
  card_cvv: string
  card_token: string
  gateway_id: string
  payment_method_code: string
  payment_company_code: string
  gateway_code: string
}

export declare interface BillsReturn {
  id: number
  code: string
  amount: number
  installments: number
  status: string
  seen_at: string
  billing_at: string
  due_at: string
  url: string
  created_at: string
  updated_at: string
  bill_items: BillItemsSchema[]
  charges: ChargesSchema[]
  bill_affiliates: BillAffiliatesSchema[]
  customer: ICustomer
  period: PeriodSchema
  subscription: SubscriptionSchema
  metadata: VindiMetadata
  payment_profile: PaymentProfileSchema
  payment_condition: PaymentConditionSchema
}

export declare interface BillItemsSchema {
  id: number
  amount: number
  quantity: number
  pricing_rang_id: number
  description: string
  pricing_schema: PricingSchema
  products: IProduct
  product_items: ProductItemsSchema
  discount: IDiscount
}

export declare interface PricingSchema {
  id: string
  short_format: string
  price: number
  minimum_price: number
  schema_type: string
  pricing_ranges: PricingRangeSchema[]
  created_at: string
}

export declare interface PricingRangeSchema {
  id: string
  start_quantity: number
  end_quantity: number
  price: number
  overage_price: number
}

export declare interface ProductItemsSchema {
  id: number
  product: IProduct
}

export declare interface ChargesSchema {
  id: number
  amount: number
  status: string
  due_at: string
  paid_at: string
  installments: number
  attempt_count: number
  next_attempt: number
  print_url: string
  created_at: string
  updated_at: string
  last_transaction: LastTransactionSchema
  payment_method: PaymentMethodSchema
}

export declare interface LastTransactionSchema {
  id: number
  transaction_type: string
  status: string
  amount: number
  intallments: number
  gateway_message: string
  gateway_response_code: string
  gateway_authorization: string
  gateway_transaction_id: string
  gateway_response_fields: string
  fraud_detector_score: number
  fraud_detector_status: string
  fraud_detector_id: string
  created_at: string
  gateway: GatewaySchema
  payment_profile: PaymentProfileSchema
}

export declare interface GatewaySchema {
  id: number
  connector: string
}

export declare interface PaymentProfileSchema {
  id: number
  holder_name: string
  registry_code: string
  bank_branch: string
  bank_account: string
  card_expiration: string
  allow_as_fallback: boolean
  card_number_first_six: string
  card_number_last_four: string
  renewed_card: RenewedCardSchema
  card_renewed_at: string
  token: string
  created_at: string
  payment_company: PaymentCompanySchema
}

export declare interface RenewedCardSchema {
  card_number_last_four: string
  card_expiration: string
}

export declare interface PaymentCompanySchema {
  id: number
  name: string
  code: string
}

export declare interface PaymentMethodSchema {
  id: number
  public_name: string
  name: string
  code: string
  type: string
}

export declare interface BillAffiliatesSchema {
  affiliate_id: number
  amount: number
  amount_type: number
}

export declare interface PeriodSchema {
  id: number
  billing_at: string
  cycle: number
  start_at: string
  end_at: string
  duration: number
}

export declare interface SubscriptionSchema {
  id: number
  code: string
  plan: IPlan
  customer: ICustomer
}

export declare interface PaymentConditionSchema {
  penalty_fee_value: number
  penalty_fee_type: string
  daily_fee_value: number
  daily_fee_type: string
  after_due_days: number
  payment_condition_discounts: PaymentCondictionDiscountsSchema[]
}

export declare interface PaymentCondictionDiscountsSchema {
  value: number
  value_type: string
  days_before_due: number
}
