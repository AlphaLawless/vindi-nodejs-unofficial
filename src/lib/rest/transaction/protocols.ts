import type { CustomerReturn } from '../customers/protocols'
import type { PaymentMethodsReturn } from '../payment_methods/protocols'
import type { PaymentProfile } from '../payment_profiles/protocols'

export declare interface TransactionReturn {
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
  fallback_type: string
  fraud_detector_score: number
  fraud_detector_status: string
  fraud_detector_id: string
  created_at: string
  updated_at: string
  gateway: {
    id: number
    connector: string
  }
  payment_profile: PaymentProfile
  charge: {
    id: number
  }
  customer: Pick<CustomerReturn, 'id' | 'name' | 'email' | 'code'>
  payment_method: Pick<
    PaymentMethodsReturn,
    'id' | 'public_name' | 'name' | 'code' | 'type'
  >
}
