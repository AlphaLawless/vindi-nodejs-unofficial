import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { ChargesReturn } from '../protocols'

export declare interface RetryChargeRequest
  extends Exclude<RetryChargeData, 'requestOptions'> {
  config: VindiClient
}

export declare interface RetryChargeData {
  id: string | number
  body?:
    | Partial<{
        holder_name: string
        registry_code: string
        bank_branch: string
        bank_account: string
        card_expiration: string
        allow_as_fallback: true
        card_number: string
        card_cvv: string
        payment_method_code: string
        payment_company_code: string
        gateway_token: string
      }>
    | {
        gateway_token: string
      }
  requestOptions?: Options
}

export declare interface RetryChargeResponse extends ApiResponse {
  charge: ChargesReturn
}
