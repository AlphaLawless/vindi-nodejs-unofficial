import type {
  PaymentCompanySchema,
  PaymentMethodSchema,
  RenewedCardSchema
} from '../bills/protocols'
import type { ICustomer } from '../customers/protocols'

export declare interface PaymentProfilesBody {
  id: number
  remove_permanentrly: boolean
}

export declare interface PaymentProfilesCreateBody {
  holder_name: string
  registry_code?: string
  bank_branch?: string
  bank_account?: string
  card_expiration?: string
  allow_as_fallback: boolean
  card_number?: string
  card_cvv?: string
  payment_method_code: string
  payment_company_code: string
  card_renewed_at?: string
  gateway_token?: string
  customer_id: number
}

export interface PaymentProfilesReturn {
  id: number
  status: string
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
  gateway_token: string
  type: string
  created_at: string
  updated_at: string
  payment_company: PaymentCompanySchema
  payment_method: PaymentMethodSchema
  customer: ICustomer
}
