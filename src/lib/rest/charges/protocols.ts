import type { PaymentMethodSchema } from '../bills/protocols'
import type { CustomerReturn } from '../customers/protocols'
import type { RenewedCard } from '../payment_profiles/protocols'
import type { BillReturn, Gateway } from '../subscriptions/protocols'

export interface ChargesReturn {
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
  payment_method: PaymentMethodSchema
  bill: Pick<BillReturn, 'id' | 'code'>
  customer: Pick<CustomerReturn, 'id' | 'name' | 'email' | 'code'>
}

export interface LastTransaction {
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

export interface PaymentCompany {
  id: number
  name: string
  code: string
}
