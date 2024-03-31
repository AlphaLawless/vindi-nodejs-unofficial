export interface PaymentMethodsReturn {
  id: number
  public_name: string
  name: string
  code: string
  type: string
  status: string
  settings: string
  set_subscription_on_success: string
  allow_as_alternative: boolean
  payment_companies: PaymentCompany[]
  maximum_attempts: number
  created_at: string
  updated_at: string
}

export interface PaymentCompany {
  id: number
  name: string
  code: string
}
