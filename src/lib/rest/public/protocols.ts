export declare interface PublicPaymentProfilesReturn {
  gateway_token: string
}

export declare interface PublicPaymentProfilesBody {
  holder_name: string
  registry_code?: string
  bank_branch?: string
  bank_account?: string
  card_expiration: string
  allow_as_fallback?: boolean
  card_number: string
  card_cvv: string
  payment_method_code: string
  payment_company_code: string
}
