import type { ApiResponse, Options } from '@/protocols'
import type { VindiClient } from '@/vindi-client'
import type { VindiMetadata } from '../../protocols'
import type { BillsReturn } from '../protocols'

export declare interface BillUpdateRequest
  extends Exclude<BillUpdateData, 'requestOptions'> {
  config: VindiClient
}

export declare interface BillUpdateData {
  id: string | number
  body: {
    code?: string
    billing_at?: string
    installments?: number
    payment_method_code?: string
    due_at?: string
    metadata?: VindiMetadata
    payment_profile?: Partial<{
      id: number
      token: string
      holder_name: string
      registry_code: string
      bank_branch: string
      bank_account: string
      card_expiration: string
      allow_as_fallback: true
      card_number: string
      card_cvv: string
      card_token: string
      gateway_id: string
      payment_method_code: string
      payment_company_code: string
      gateway_token: string
    }>
  }
  requestOptions?: Options
}

export declare interface BillUpdateResponse extends ApiResponse {
  bill: BillsReturn
}
