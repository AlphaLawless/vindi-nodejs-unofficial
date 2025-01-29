import type { OmitDeep } from '@/@types/utils/omit-deep'
import type { ICustomer } from '../customers/protocols'
import type { PaymentProfile } from '../payment_profiles/protocols'
import type { IPlan } from '../plans/protocols'
import type {
  PricingSchema,
  ProductItemBody,
  ProductItemReturn
} from '../product_items/protocols'
import type { VindiMetadata } from '../protocols'

export declare interface SubscriptionBody {
  start_at?: string
  plan_id: number
  customer_id: number
  code?: string
  payment_method_code: string
  installments?: number
  billing_trigger_type?: string
  billing_trigger_day?: number
  billing_cycles?: number
  metadata?: VindiMetadata
  product_items: Array<
    Omit<Partial<ProductItemBody>, 'id' | 'pricing_schema'> & {
      pricing_schema: OmitDeep<Partial<PricingSchema>, 'id'>
    }
  >
  payment_profile?: Pick<PaymentProfile, 'id'> &
    Partial<Omit<PaymentProfile, 'id'>>
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
  customer: ICustomer
  plan: IPlan
  product_items: ProductItemReturn[]
  payment_method: PaymentMethod
  current_period: CurrentPeriod
  metadata: VindiMetadata
  payment_profile: PaymentProfile
  invoice_split: boolean
  subscription_affiliates: SubscriptionAffiliate[]
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

export declare interface SubscriptionAffiliate {
  affiliate_id: number
  amount: number
  amount_type: number
  status: string
}

export declare interface BillReturn {
  id: number
  code: string
  amount: number
  installments: number
  status: string
  billing_at: string
  due_at: string
  url: string
  created_at: string
  charges: Charge[]
  payment_profile: PaymentProfile
}

export declare interface Charge {
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
  last_transaction: LastTransaction
  payment_method: PaymentMethod
}

export declare interface LastTransaction {
  id: number
  transaction_type: string
  status: string
  amount: number
  installments: number
  gateway_message: string
  gateway_response_code: string
  gateway_authorization: string
  gateway_transaction_id: string
  gateway_response_fields: string
  fraud_detector_score: number
  fraud_detector_status: string
  fraud_detector_id: string
  created_at: string
  gateway: Gateway
  payment_profile: PaymentProfile
}

export declare interface Gateway {
  id: number
  connector: string
}
